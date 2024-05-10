<script setup lang="ts">
import type { Post } from '@/data/posts'
const { post } = defineProps<{ post: Post }>()

const isHover = ref(false)

</script>

<template>
  <div class="card" :class="{hover: isHover}">
    <h2 class="title">
      {{ post.title }}
    </h2>
    <CategoryLink :category="post.category" />
    <renderMarkdown :source="post.intro" />
    <NuxtLink
      :to="`/posts/${post.slug}`"
      class="more"
      @mouseenter="isHover=true"
      @mouseleave="isHover=false"
    >
      More ...
    </NuxtLink>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/styles/colors.scss';

.card{
  padding: 15px 15px 35px;
  border: 1px solid colors.$green-dark;
  border-radius: 5px;
  margin-bottom: 25px;
  font-size:12px;
  position: relative;
}
.card .title{
  font-size: 20pt;
}

.card .more{
  position: absolute;
  color: colors.$green-medium;
  font-size: 12pt;
  padding: 5px 10px;
  right: 0;
  bottom: 0;
}
.card.hover{
  border-color: colors.$green-medium;
}
.card.hover .title {
  color: colors.$green-light;
}
.card.hover .more{
  color: colors.$green-light;
}
</style>
