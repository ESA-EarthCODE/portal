<script setup>
import { onMounted, ref } from "vue";
import { useData } from "vitepress";
const { page } = useData();
let fetchedContent = ref("");

onMounted(async () => {
  if (window.location.pathname === "/blog/preview") {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("url")) {
      const response = await fetch(urlParams.get("url"));
      fetchedContent.value = await response.text();
    }
  }
});
</script>

<template>
  <ClientOnly>
    <eox-storytelling
      .markdown="fetchedContent || page.content"
    ></eox-storytelling>
  </ClientOnly>
</template>

<style>
eox-storytelling {
  --header-font-family: NotesESAbold, sans-serif;
  --body-font-family: Arial, sans-serif;
  margin: calc(var(--vp-nav-height) * -1) 0 var(--vp-nav-height) 0;
  background: white;
  --eox-color: var(--vp-c-black);
  position: relative;
  z-index: calc(var(--vp-z-index-local-nav) + 1);
}
</style>
