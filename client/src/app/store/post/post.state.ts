export interface IPostState {
  content: string;
  posts: Array<object>;
  deletePost: object;
}

export const initialState: IPostState = {
  content: '',
  posts: [],
  deletePost: {}
};
