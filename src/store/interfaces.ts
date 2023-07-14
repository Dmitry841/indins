export interface IContentPostTones {
  position: number;
  tone: number;
  length: number;
}

export interface IPostsItems {
  id: number;
  date: string;
  authorName: string;
  authorUrl: string;
  content: string;
  contentPostTones: IContentPostTones[];
}

export interface IPostsState {
  isPostsLoading: boolean;
  page: number;
  limit: number;
  posts: IPostsItems[];
}

export interface IGlobalStore {
  post: IPostsState;
}
