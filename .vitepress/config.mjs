import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./pages",
  appearance: "force-dark",
  cleanUrls: true,
  title: "EarthCODE",
  titleTemplate: " EarthCODE",
  description: "Earth Science Collaborative Open Development Environment",
  themeConfig: {
    nav: [
      {
        link: "/about",
        text: "About",
      },
      {
        link: "/resources",
        text: "Resources",
      },
      {
        link: "/community",
        text: "Community",
      },
      {
        link: "/get-involved",
        text: "Get Involved",
      },
      {
        link: "/blog",
        text: "Blog",
      },
      {
        link: "/contact",
        text: "Contact",
      },
    ],
  },
  head: [
    ["link", { rel: "icon", href: "/img/EarthCODE_Favicon_32x32px.png" }],
    // Open Graph / Facebook
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:url",
        content: "https://earthcode.esa.int",
      },
    ],
    ["meta", { property: "og:title", content: "EarthCODE" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Earth Science Collaborative Open Development Environment",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://earthcode.esa.int/assets/img/earthcode.png",
      },
    ],
    // Twitter
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        property: "twitter:url",
        content: "https://earthcode.esa.int",
      },
    ],
    ["meta", { property: "twitter:title", content: "EarthCODE" }],
    [
      "meta",
      {
        property: "twitter:description",
        content: "Earth Science Collaborative Open Development Environment",
      },
    ],
    [
      "meta",
      {
        property: "twitter:image",
        content: "https://earthcode.esa.int/assets/img/earthcode.png",
      },
    ],
    [
      "script",
      {},
      `
      var _paq = (window._paq = window._paq || []);
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(["requireCookieConsent"]);
      _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
      _paq.push(["trackPageView"]);
      _paq.push(["enableLinkTracking"]);
      (function () {
        var u = "https://nix.eox.at/piwik/";
        _paq.push(["setTrackerUrl", u + "matomo.php"]);
        _paq.push(["setSiteId", "13"]);
        var d = document,
          g = d.createElement("script"),
          s = d.getElementsByTagName("script")[0];
        g.async = true;
        g.src = u + "matomo.js";
        s.parentNode.insertBefore(g, s);
      })();
    `,
    ],
  ],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.toLowerCase().includes("esa-");
        },
      },
    },
  },
});
