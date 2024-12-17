<script setup>
import { onMounted } from "vue";
import { useData, useRouter } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { applyShadowDomEventListener } from "./helpers";

const { Layout } = DefaultTheme;
const { site, theme, frontmatter } = useData();
const router = useRouter();

onMounted(async () => {
  setTimeout(() => {
    document.querySelector("esa-cookies").addEventListener("accept", () => {
      _paq.push(["rememberCookieConsentGiven"]);
    });
    document.querySelector("esa-cookies").addEventListener("decline", () => {
      _paq.push(["forgetCookieConsentGiven"]);
      _paq.push(["optUserOut"]);
    });

    if (
      !document.cookie.includes("mtm_cookie_consent") &&
      !document.cookie.includes("mtm_consent_removed")
    ) {
      document.querySelector("esa-cookies").style.display = "block";
    }

    // TRACK PAGE SCROLL
    function getScrollPercent() {
      const h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";
      return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    }
    const scrollTargets = {
      25: false,
      50: false,
      75: false,
      100: false,
    };
    document.addEventListener("scroll", (e) => {
      Object.keys(scrollTargets).forEach((target) => {
        if (getScrollPercent() >= parseInt(target) && !scrollTargets[target]) {
          scrollTargets[target] = true;
          _paq.push(["trackEvent", "Scroll_depth", `${target}%`]);
        }
      });
    });

    document.body.classList.add("loaded");

    const routerEventHandler = (event, anchor) => {
      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");
      if (href.startsWith("http") || target === "_blank") {
        window.open(href, target).focus();
      } else {
        router.go(href);
      }
    };

    applyShadowDomEventListener(
      [
        "esa-menu",
        // "esa-header",
        "esa-navbar",
        "esa-cover",
        "esa-capability",
        "esa-card",
        "esa-roadmap-step",
        // "esa-gateway",
        // "esa-footer",
        // "esa-cookies",
      ],
      "click",
      routerEventHandler,
    );
  });
});
</script>

<template>
  <Layout :class="frontmatter.layout">
    <template #layout-top>
      <ClientOnly>
        <esa-menu
          .menuItems="theme.nav.map(n => ({title: n.text, href: n.link}))"
        ></esa-menu>
        <esa-header></esa-header>
        <esa-navbar
          :brand-title="site.title"
          .menuItems="theme.nav.map(n => ({title: n.text, href: n.link}))"
        ></esa-navbar>
      </ClientOnly>
    </template>
    <template #home-hero-before>
      <ClientOnly>
        <esa-cover
          :overline="frontmatter.title"
          :title="frontmatter.hero.text"
          :background-image="frontmatter.hero.image"
          :underline="frontmatter.hero.tagline"
          cta
          :cta-link="frontmatter.hero.actions[0].link"
          :cta-text="frontmatter.hero.actions[0].text"
        ></esa-cover>
      </ClientOnly>
    </template>
    <template #layout-bottom>
      <ClientOnly>
        <esa-gateway
          .items='[
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
        links: [

            {
              name: "Network of Resources",
              href: "https://nor-discover.org",
            },
        ],
      },
    ]'
        ></esa-gateway>
        <esa-footer
          title="Get in touch"
          description="Join ESA's initiative to ensure long-term preservation and accessibility of research data, code, and documentation for a global scientific community."
          contact-link="mailto:earthcode@esa.int"
          .footerItems="[
          [
            {
              href: 'https://www.esa.int/',
              title: 'ESA Portal',
            },
            {
              href: 'https://www.esa.int/About_Us/Corporate_news',
              title: 'About ESA',
            },
          ],
          [
            {
              href: 'https://www.esa.int/Services/Terms_and_conditions',
              title: 'Terms and Conditions',
            },
            {
              href: 'https://www.esa.int/Services/Cookies_notice',
              title: 'Cookies Notice',
            },
          ],
          [
            {
              href: 'https://www.esa.int/Services/Privacy_notice',
              title: 'Privacy Notice',
            },
          ],
        ]"
        ></esa-footer>
        <esa-cookies
          link="https://www.esa.int/Services/Cookies_notice"
          style="display: none"
        ></esa-cookies>
      </ClientOnly>
    </template>
  </Layout>
</template>

<style scoped>
esa-footer {
  padding: 0 24px;
}
@media (min-width: 640px) {
  esa-footer {
    padding: 0 200px;
  }
}
</style>
