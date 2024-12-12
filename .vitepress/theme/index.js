// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import BlogPost from "./components/BlogPost.vue";
import BlogGallery from "./components/BlogGallery.vue";
import { data as blogposts } from "../blogposts.data.js";
import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  async enhanceApp({ app, router, siteData }) {
    app.component("blog", BlogPost);
    app.component("BlogGallery", BlogGallery);
    router.onBeforePageLoad = async (to) => {
      if (!import.meta.env.SSR) {
        if (to.includes("/blog/") && to !== "/blog/" && to !== "/blog/README") {
          router.route.data = {
            content: blogposts.find((n) => to.startsWith(n.url)).src,
            frontmatter: {
              layout: "blog",
            },
          };
          return false;
        }
      }
      return true;
    };
    router.onAfterRouteChanged = () => {
      if (!import.meta.env.SSR) {
        window.scrollTo(0, 0);
      }
    };

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
      app.use(await import("@eox/storytelling/dist/eox-storytelling"));
    }
  },
};
