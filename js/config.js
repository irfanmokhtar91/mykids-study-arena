/**
 * Online Parent Sync API Configuration
 * Populated automatically when deploying `worker/` to your personal Cloudflare account
 * via `worker/deploy-personal.ps1`. Keep blank before deploy so offline mode works cleanly.
 */
(function (global) {
  const App = (global.App = global.App || {});
  const OVERRIDE_KEY = "mykids_cloud_api_override";

  App.CLOUD_API_URL = "https://mykids-study-arena-api.mykidsarena.workers.dev";
  // Public Google OAuth client id (not a secret). Filled by worker/deploy-personal.ps1.
  App.GOOGLE_CLIENT_ID = "878824935856-0b89vbtfnias7lv2gdnicop3thhko6bj.apps.googleusercontent.com";

  App.getCloudApiUrl = function () {
    let custom = "";
    try {
      custom = global.localStorage.getItem(OVERRIDE_KEY) || "";
    } catch (e) {
      custom = "";
    }
    const raw = (custom || App.CLOUD_API_URL || "").trim();
    return raw.replace(/\/+$/, "");
  };

  App.setCloudApiUrl = function (url) {
    const clean = String(url || "").trim().replace(/\/+$/, "");
    try {
      if (clean) {
        global.localStorage.setItem(OVERRIDE_KEY, clean);
      } else {
        global.localStorage.removeItem(OVERRIDE_KEY);
      }
    } catch (e) {
      // ignore localStorage error
    }
    return clean;
  };
})(window);
