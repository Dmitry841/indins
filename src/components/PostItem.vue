<template>
  <div>
    <div class="post">
      <div>
        <div><strong>Дата:</strong> {{ formattedDate }}</div>
        <div><strong>Имя автора:</strong> {{ post?.authorName }}</div>
        <div><strong>Адрес:</strong> {{ post?.authorUrl }}</div>
        <div>
          <strong>Описание:</strong
          ><post-text
            :text="post?.content"
            :contentPostTones="post?.contentPostTones"
          ></post-text>
        </div>
      </div>
    </div>
    <divider />
  </div>
</template>

<script lang="ts">
import { IPostsItems } from "@/store/interfaces";
import { defineComponent, PropType } from "vue";
import { dateFormatter } from "@/utils";
import PostText from "@/components/PostText";
import Divider from "@/components/Divider.vue";
export default defineComponent({
  props: {
    post: {
      type: Object as PropType<IPostsItems>,
      requared: true,
    },
  },
  data() {
    return {
      formattedDate: dateFormatter(this.post?.date),
    };
  },
  components: {
    PostText,
    Divider,
  },
});
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid rgb(181, 190, 190);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
