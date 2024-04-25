export interface IComment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: IAuthor;
}

export interface IAuthor {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
