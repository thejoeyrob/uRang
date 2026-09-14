window.URANG_CONFIG = {
  /*
    Set lookupApi to your deployed uRang lookup worker, for example:
    https://urang-lookup.yourname.workers.dev/lookup

    The browser never contains the directory-provider API key.
    The worker chooses the best configured provider based on the number country.
  */
  lookupApi: "",

  /*
    Optional lightweight status endpoint. If omitted, uRang derives /status
    from lookupApi. This does NOT download a full directory; it just confirms
    which directory route/version is active for the user's home country.
  */
  directoryStatusApi: "",

  refreshDirectoryStatusOnOpen: true,

  // Successful directory identities can be reused locally for 7 days.
  positiveCacheHours: 168,

  // "No match" is cached only briefly so new directory data is picked up.
  negativeCacheHours: 12
};
