<script setup>
import { data as blogposts } from "../../blogposts.data.js";
</script>

<template>
  <esa-cards>
    <esa-card
      v-for="(blogpost, index) in blogposts.sort((a, b) =>
        new Date(a.frontmatter.date) < new Date(b.frontmatter.date) ? 1 : -1,
      )"
      :feature="blogpost.frontmatter.feature"
      overline="Story"
      :image="blogpost.frontmatter.image"
      :title="blogpost.frontmatter.title"
      :date="new Date(blogpost.frontmatter.date).toLocaleDateString()"
      :link="blogpost.url"
      action="Read more"
    ></esa-card>
  </esa-cards>
</template>
