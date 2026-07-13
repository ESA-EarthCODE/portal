---
layout: page
---

<section class="blue hero">
  <h1>Newsletter Archive</h1>
  <p>Explore our past EO Open Science Newsletters.</p>
  <div class="multiple-ctas">
    <a href="https://assets-eur.mkt.dynamics.com/846bcca8-9413-4d04-822b-7282239af232/digitalassets/standaloneforms/1596564b-a729-f011-8c4d-7c1e52350f4e" target="_blank" class="VPButton cta">Subscribe</a>
    <a href="/news-events" class="VPButton cta primary no-icon">Back to News & Events</a>
  </div>
</section>

<section class="light-grey">
  <div v-for="item in data" :key="item.name" class="archive-item">
    <h2>{{ item.name }}</h2>
    <div class="archive-content-wrapper">
        <iframe :srcdoc="item.content" width="100%" height="100%" style="height: 100%;" frameborder="0"></iframe>
    </div>
    <div style="margin-top: 1rem;">
      <a :href="item.url" target="_blank" class="VPButton cta no-icon">View full screen</a>
    </div>
  </div>
</section>

<script setup>
import { data } from './archive.data.js'
</script>

<style scoped>
.archive-item {
  margin-bottom: 4rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.archive-content-wrapper {
  height: 500px;
  overflow: hidden;
  border: 1px solid #eee;
  padding: 0.5rem;
  margin: 1rem 0;
}
@media (min-width: 640px) {
  .archive-item {
    padding: 2rem;
  }
  .archive-content-wrapper {
    padding: 1rem;
  }
}
</style>
