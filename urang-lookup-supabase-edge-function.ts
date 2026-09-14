import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { parsePhoneNumberFromString } from "npm:libphonenumber-js@1.13.13/max";

const ALLOWED_ORIGINS = new Set([
  "https://thejoeyrob.github.io",
  "http://localhost:8080",
  "http://localhost:5173"
]);

function cors(req: Request) {
  const origin = req.headers.get("origin") || "";
  const allowOrigin = ALLOWED_ORIGINS.has(origin) ? origin : "https://thejoeyrob.github.io";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers": "content-type, apikey, authorization, x-client-info",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Vary": "Origin"
  };
}

function json(req: Request, body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...cors(req),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

function clean(value: unknown) {
  const s = String(value ?? "").trim();
  return !s || /^n\/?a$/i.test(s) ? "" : s;
}

function countryName(code?: string) {
  if (!code) return "";
  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(code) || code;
  } catch {
    return code;
  }
}

function normaliseType(type?: string) {
  if (!type) return "";
  const map: Record<string, string> = {
    MOBILE: "Mobile",
    FIXED_LINE: "Landline",
    FIXED_LINE_OR_MOBILE: "Landline or mobile",
    TOLL_FREE: "Freephone",
    PREMIUM_RATE: "Premium rate",
    SHARED_COST: "Shared cost",
    VOIP: "VoIP",
    PERSONAL_NUMBER: "Personal number",
    PAGER: "Pager",
    UAN: "Universal access",
    VOICEMAIL: "Voicemail"
  };
  return map[type] || type.replaceAll("_", " ").toLowerCase().replace(/(^|\s)\S/g, m => m.toUpperCase());
}

function riskText(d: any) {
  const score = Number(d?.fraud_score ?? 0);
  if (d?.recent_abuse === true || d?.spammer === true || score >= 90) return "High-risk signals reported";
  if (d?.risky === true || score >= 85) return "Risk signals reported";
  return "";
}

async function ipqsLookup(phone: string, country: string) {
  const key = Deno.env.get("IPQS_API_KEY");
  if (!key) return null;

  const url = new URL("https://ipqualityscore.com/api/json/phone");
  url.searchParams.set("phone", phone);
  if (country) url.searchParams.append("country[]", country === "GB" ? "UK" : country);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6500);

  try {
    const response = await fetch(url, {
      headers: { "Accept": "application/json", "IPQS-KEY": key },
      signal: controller.signal
    });
    if (!response.ok) return null;

    const d = await response.json();
    if (d?.success === false) return null;

    const name = clean(d?.name);
    const locationParts = [clean(d?.city), clean(d?.region), clean(d?.country)].filter(Boolean);
    const typeParts = [clean(d?.line_type), clean(d?.carrier)].filter(Boolean);
    const risk = riskText(d);

    return {
      found: Boolean(name),
      status: name ? "found" : "not_found",
      title: name,
      location: [...new Set(locationParts)].join(", "),
      type: typeParts.join(" · "),
      source: risk ? `Live directory · ${risk}` : "Live directory check completed.",
      confidence: name ? "Directory match" : "",
      provider: "IPQS",
      valid: d?.valid,
      active: d?.active,
      carrier: clean(d?.carrier),
      lineType: clean(d?.line_type),
      risk
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

function localNumberIntelligence(raw: string, fallbackCountry?: string) {
  const fallback = fallbackCountry && fallbackCountry.length === 2 ? fallbackCountry as any : undefined;
  const phone = parsePhoneNumberFromString(raw, fallback);

  if (!phone) {
    return {
      valid: false,
      country: fallbackCountry || "",
      location: countryName(fallbackCountry),
      type: "",
      national: "",
      international: raw
    };
  }

  const country = phone.country || fallbackCountry || "";
  return {
    valid: phone.isValid(),
    possible: phone.isPossible(),
    country,
    location: countryName(country),
    type: normaliseType(phone.getType()),
    national: phone.formatNational(),
    international: phone.number
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(req) });

  const url = new URL(req.url);
  const isStatus = req.method === "GET" &&
    (url.searchParams.get("mode") === "status" || url.pathname.endsWith("/status"));

  if (isStatus) {
    const ipqs = Boolean(Deno.env.get("IPQS_API_KEY"));
    return json(req, {
      ok: true,
      service: "uRang lookup",
      version: "1.6.0",
      live: true,
      identityProvider: ipqs ? "IPQS" : "not configured",
      numberIntelligence: "libphonenumber-js",
      country: (url.searchParams.get("country") || "GB").toUpperCase()
    });
  }

  if (req.method !== "POST") return json(req, { error: "Method not allowed" }, 405);

  let body: any;
  try {
    body = await req.json();
  } catch {
    return json(req, { error: "Invalid JSON" }, 400);
  }

  const e164 = clean(body?.e164);
  const requestedCountry = clean(body?.country).toUpperCase();

  if (!/^\+[1-9]\d{6,14}$/.test(e164)) {
    return json(req, { error: "A valid E.164 phone number is required" }, 400);
  }

  const intelligence = localNumberIntelligence(e164, requestedCountry);
  const directory = await ipqsLookup(e164, intelligence.country || requestedCountry);

  if (directory) {
    return json(req, {
      ...directory,
      location: directory.location || intelligence.location,
      type: directory.type || intelligence.type,
      number: {
        e164: intelligence.international,
        national: intelligence.national,
        country: intelligence.country,
        valid: intelligence.valid
      }
    });
  }

  return json(req, {
    found: false,
    status: "metadata_only",
    title: "",
    location: intelligence.location,
    type: intelligence.type,
    source: intelligence.valid
      ? "Numbering-plan check completed. No live identity directory is connected yet."
      : "The number could not be verified against the numbering plan.",
    confidence: "",
    provider: "Numbering plan",
    valid: intelligence.valid,
    number: {
      e164: intelligence.international,
      national: intelligence.national,
      country: intelligence.country,
      valid: intelligence.valid
    }
  });
});
