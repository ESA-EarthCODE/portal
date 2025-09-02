<template>
  <ul>
    <li v-for="(item, index) in items">
      <a :href="`${props.endpoint}/t/${item.slug}`">
        <span class="title">{{ item.unicode_title || item.fancy_title }}</span>
        <span class="date">{{
          new Date(item.bumped_at).toLocaleDateString()
        }}</span>
        <span class="excerpt">{{
          item.excerpt?.replace("&hellip\;", " ...")
        }}</span>
        <span class="posts">
          <img
            v-for="poster in item.posters"
            :src="`${props.endpoint}${users.find((u) => u.id === poster.user_id).avatar_template.replace('{size}', '28')}`"
          />
          {{ item.posters.length }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>message-text-outline</title>
            <path
              fill="#C2C8CC"
              d="M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H6L2,22V4C2,2.89 2.9,2 4,2H20M4,4V17.17L5.17,16H20V4H4M6,7H18V9H6V7M6,11H15V13H6V11Z"
            />
          </svg>
          {{ item.posts_count }}
        </span>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  endpoint: { type: String, required: true },
  per_page: { type: Number, default: 10 }
});
const items = ref([]);
const users = ref([]);

onMounted(async () => {
  const response = await fetch(props.endpoint + "/latest.json?order=activity&per_page=" + props.per_page);
  const json = await response.json();
  items.value = json.topic_list.topics;
  users.value = json.users;
});
</script>

<style scoped>
li a {
  background: #fff;
  border: 1px solid #c2c8cc;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 12px;
  display: grid;
  grid-template-areas:
    "title"
    "date"
    "posts"
    "excerpt";
  gap: 16px;
  transition: all ease-in-out 0.3s;
}
li a:hover {
  transform: translateY(-0.15rem);
}
.title {
  font-family: NotesESAbold, sans-serif;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  grid-area: title;
  margin-bottom: 8px;
}
.date {
  grid-area: date;
  color: #647078;
  font-size: 1rem;
  line-height: 1.5625rem;
}
.excerpt {
  grid-area: excerpt;
  color: #8a969e;
  font-size: 1rem;
  line-height: 1.5625rem;
}
.posts {
  grid-area: posts;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  line-height: 2rem;
}
.posts img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 8px;
}
.posts img:nth-child(n + 2) {
  margin-left: -20px;
}
.posts svg {
  margin-left: 16px;
  margin-right: 8px;
  height: 28px;
}
@media (min-width: 640px) {
  li a {
    grid-template-areas:
      "title date"
      "excerpt posts";
  }
  .date,
  .posts {
    justify-self: self-end;
  }
}
</style>
