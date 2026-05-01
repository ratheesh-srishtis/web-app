import { defineConfig, type Plugin, type Connect } from "vite";
import react from "@vitejs/plugin-react";

const base = "/web-app/";

/**
 * Vite serves a nested base at /web-app/ (with trailing slash).
 * Visiting /web-app without the slash shows a confusing error on refresh.
 */
function redirectBaseToTrailingSlash(): Plugin {
  const withoutTrailingSlash = base.replace(/\/$/, "") || "/";

  const middleware: Connect.NextHandleFunction = (req, res, next) => {
    const url = req.url ?? "";
    const pathname = url.split("?")[0];

    if (pathname === withoutTrailingSlash) {
      const query = url.includes("?") ? url.slice(url.indexOf("?")) : "";
      res.statusCode = 302;
      res.setHeader("Location", `${base}${query}`);
      res.end();
      return;
    }
    next();
  };

  return {
    name: "redirect-base-to-trailing-slash",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), redirectBaseToTrailingSlash()],
  base,
});
