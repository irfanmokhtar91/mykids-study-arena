import { createApp } from "./core.js";
import { D1Store } from "./store_d1.js";

export default {
  async fetch(request, env) {
    const app = createApp({ store: new D1Store(env.DB), env });
    return app.handle(request);
  }
};
