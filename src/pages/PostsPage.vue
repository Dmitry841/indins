<template>
  <div>
    <h1>Страница сказок</h1>
    <posts-list :posts="allPosts" v-if="!isPostsLoading" />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts"></div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions, mapMutations } from "vuex";
import { defineComponent } from "vue";
import PostsList from "@/components/PostsList.vue";
export default defineComponent({
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapGetters({
      allPosts: "postsModule/allPosts",
      isPostsLoading: "postsModule/isPostsLoading",
    }),
  },
  components: {
    PostsList,
  },
  methods: {
    ...mapMutations({
      setPage: "postsModule/setPage",
    }),
    ...mapActions({
      loadMorePosts: "postsModule/loadMorePosts",
      fetchPosts: "postsModule/fetchPosts",
    }),
  },
});
</script>

<style></style>
