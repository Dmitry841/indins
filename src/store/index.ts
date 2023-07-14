import { createStore } from "vuex";
import { postsModule } from "@/store/postsModule";
import { IGlobalStore } from "./interfaces";

export default createStore<IGlobalStore>({
  modules: {
    postsModule,
  },
});
