import { IPostsState, IPostsItems } from "./interfaces";
import type { Commit } from "vuex";

export interface IProps {
  state: IPostsState;
  commit: Commit;
}

export const postsModule = {
  state: (): IPostsState => ({
    posts: [],
    isPostsLoading: false,
    page: 1,
    limit: 10,
  }),
  getters: {
    allPosts(state: IPostsState) {
      return state.posts;
    },
    isPostsLoading(state: IPostsState) {
      return state.isPostsLoading;
    },
  },
  mutations: {
    setPosts(state: IPostsState, posts: IPostsItems[]) {
      state.posts = posts.map((item) => {
        item.id = Math.random();
        return item;
      });
    },
    setLoading(state: IPostsState, loading: boolean) {
      state.isPostsLoading = loading;
    },
    setPage(state: IPostsState, page: number) {
      state.page = page;
    },
  },
  actions: {
    async fetchPosts({ state, commit }: IProps) {
      try {
        commit("setLoading", true);
        const url = new URL("http://localhost:3000/posts");
        url.searchParams.set("_page", String(state.page));
        url.searchParams.set("_limit", String(state.limit));
        const response = await fetch(url.toString());
        commit("setPosts", await response.json());
      } catch (e) {
        alert("Ошибка");
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePosts({ state, commit }: IProps) {
      try {
        commit("setPage", state.page + 1);
        const url = new URL("http://localhost:3000/posts");
        url.searchParams.set("_page", String(state.page));
        url.searchParams.set("_limit", String(state.limit));
        const response = await fetch(url.toString());
        commit("setPosts", [...state.posts, ...(await response.json())]);
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
