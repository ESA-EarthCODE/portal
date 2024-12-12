<script setup>
import { data as blogposts } from "../../blogposts.data.js";

const blogpostExcerpts = blogposts.map((n) => {
  const el = document.createElement("html");
  el.innerHTML = n.html;
  return (
    el.querySelector("h1")?.textContent ||
    n.url.replace("/blog/", "").replace(".html", "")
  );
});
</script>

<template>
  <div class="gallery">
    <a
      v-for="(blogpost, index) in blogposts"
      class="blogpost"
      :href="blogpost.url"
    >
      <p>{{ blogpostExcerpts[index] }}</p>
    </a>
  </div>
</template>

<style scoped>
.gallery {
  --columns: 1;
}
@media screen and (min-width: 480px) {
  .gallery {
    --columns: 2;
  }
}
@media screen and (min-width: 768px) {
  .gallery {
    --columns: 3;
  }
}
.gallery {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 8px;
  margin: 64px 0;
}
.blogpost {
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand);
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease-in-out;
}
.blogpost:hover {
  background: var(--vp-c-brand);
  color: white;
}
</style>
