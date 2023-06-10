export interface IListItem {
  _id?: string,
  name: string,
  prompt: string,
  photo: string,
  __v?: number
}

export interface IList {
  list: IListItem[];
}

export interface IFormComponent {
  author: string,
  prompt: string,
  setAuthor: (value: string) => void,
  setPrompt: (value: string) => void
}

export interface IPreviewComponent {
  img: string,
  loading: boolean
}

export interface ISubmitComponent {
  generateImgHandler: () => void,
  loading: boolean,
  shareButtonHandler: () => void
}


export interface IAllPostsResponse {
  data: {
    data: IListItem[],
    success: boolean
  }
}
