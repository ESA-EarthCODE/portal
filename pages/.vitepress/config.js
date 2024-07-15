import config from "../../brand-config/config.json";

export default {
  appearance: false,
  cleanUrls: true,
  themeConfig: {
    nav: [
      {
        href: "/#faq",
        title: "FAQ",
      },
      {
        href: "/#community",
        title: "Community",
      },
      {
        href: "/#team",
        title: "Team",
      },
      {
        href: "/#contact-us",
        title: "Contact",
      },
      {
        href: "https://opensciencedata.esa.int/",
        title: "Science Catalog",
      },
    ],
    // login: config.dashboard,
    footer: {
      title: "Want to get notified?",
      description:
        "EarthCODE is coming soon. If you want to get notified about the public launch, do not hesitate to contact us about our newsletter.",
      contactLink: "mailto:chandra.taposeea@telespazio.com",
      links: [
        [
          {
            href: "https://www.esa.int/",
            title: "ESA Portal",
          },
          {
            href: "https://www.esa.int/About_Us/Corporate_news",
            title: "About ESA",
          },
        ],
        [
          {
            href: "https://www.esa.int/Services/Terms_and_conditions",
            title: "Terms and Conditions",
          },
          {
            href: "https://www.esa.int/Services/Cookies_notice",
            title: "Cookies Notice",
          },
        ],
        [
          {
            href: "https://www.esa.int/Services/Privacy_notice",
            title: "Privacy Notice",
          },
        ],
      ],
    },
  },
  title: config.meta.title,
  description: config.meta.description,
  head: [
    ["link", { rel: "icon", href: config.meta.favicon }],
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
  vite: {
    publicDir: "../brand-config",
    ssr: {
      noExternal: ["@eox/pages-theme-esa"],
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.toLowerCase().includes("-");
        },
      },
    },
  },
};
