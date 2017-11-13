export interface ISearchState {
  name: string
  id: string
  notFound: boolean
}

export const initialState: ISearchState = {
  name: '',
  id: '',
  notFound: false
};
