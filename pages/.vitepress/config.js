import config from "../../brand-config/config.json";

export default {
  appearance: false,
  cleanUrls: true,
  themeConfig: {
    nav: [
      {
        href: "/about",
        title: "About",
      },
      {
        href: "/resources",
        title: "Resources",
      },
      {
        href: "/community",
        title: "Community",
      },
      {
        href: "/get-involved",
        title: "Get Involved",
      },
      {
        href: "/blog",
        title: "Blog",
      },
      {
        href: "/contact",
        title: "Contact",
      },
    ],
    gateway: [
      {
        title: "ESA Vision",
        links: [
          {
            name: "EO Science Strategy",
            href: "https://doi.org/10.5281/zenodo.13819557",
          },
        ],
      },
      {
        title: "ESA EO Programme",
        links: [
          {
            name: "Observing the Earth",
            href: "https://www.esa.int/Applications/Observing_the_Earth",
          },
          {
            name: "Science for Society",
            href: "https://eo4society.esa.int",
          },
        ],
      },
      {
        title: "Research at ESA",
        links: [

            {
              name: "Earth System Science Hub",
              href: "https://sciencehub.esa.int",
            },
        ],
      },
      {
        title: "Opportunities",
        isLarge: true,
        links: [
          [
            {
              name: "Network of Resources",
              href: "https://nor-discover.org",
            },
          ]
        ],
      },
    ],
    login: config.dashboard,
    footer: {
      title: "Get in touch",
      description:
        "Join ESA's initiative to ensure long-term preservation and accessibility of research data, code, and documentation for a global scientific community.",
      contactLink: "mailto:earthcode@esa.int",
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
