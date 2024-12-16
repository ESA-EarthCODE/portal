<script setup>
import { data as blogposts } from "../../blogposts.data.js";
</script>

<template>
  <esa-cards>
    <esa-card
      v-for="(blogpost, index) in blogposts"
      :feature="blogpost.frontmatter.feature"
      overline="Story"
      :image="blogpost.frontmatter.image"
      :title="blogpost.frontmatter.title"
      :date="blogpost.frontmatter.date"
      :link="blogpost.url"
      action="Read more"
    ></esa-card>
  </esa-cards>
</template>
