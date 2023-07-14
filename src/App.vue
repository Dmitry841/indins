<template>
  <div class="app">
    <posts-page></posts-page>
  </div>
</template>

<script lang="ts"></script>

<script lang="ts">
import { defineComponent } from "vue";
import PostsPage from "./pages/PostsPage.vue";
export default defineComponent({
  components: {
    PostsPage,
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
