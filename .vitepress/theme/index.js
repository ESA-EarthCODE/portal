// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      app.use(await import("@eox/esa-ui/components/menu.js"));
      app.use(await import("@eox/esa-ui/components/header.js"));
      app.use(await import("@eox/esa-ui/components/navbar.js"));
      app.use(await import("@eox/esa-ui/components/cover.js"));
      app.use(await import("@eox/esa-ui/components/capabilities.js"));
      app.use(await import("@eox/esa-ui/components/card.js"));
      app.use(await import("@eox/esa-ui/components/roadmap.js"));
      app.use(await import("@eox/esa-ui/components/gateway.js"));
      app.use(await import("@eox/esa-ui/components/footer.js"));
      app.use(await import("@eox/esa-ui/components/cookies.js"));
    }
  },
};
