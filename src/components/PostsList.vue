<template>
  <div v-if="(posts || []).length > 0">
    <h3>Список Сообщений</h3>
    <transition-group name="posts-list">
      <post-item v-for="post in posts" :post="post" :key="post.id"></post-item>
    </transition-group>
  </div>
  <h2 v-else style="color: red">Список сообщений пуст</h2>
</template>

<script lang="ts">
import PostItem from "@/components/PostItem.vue";
import { defineComponent, PropType } from "vue";
import type { IPostsItems } from "@/store/interfaces";

export default defineComponent({
  components: { PostItem },
  props: {
    posts: {
      type: Array as PropType<IPostsItems[]>,
      requared: true,
    },
  },
});
</script>

<style scoped>
.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>
