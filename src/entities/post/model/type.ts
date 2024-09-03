export interface Post {
  id: number;
  missionId: number;
  missionTitle: string;
  nickname: string;
  userImageUrl: string;
  title: string;
  content: string;
  imageUrl: string;
  createdDate: string;
  modifiedDate: string;
}

export interface GetPostRequest {
  id: number;
}
export type GetPostResponse = Post;

export interface GetPostsRequest {
  missionId: number;
}
export type GetPostsResponse = Post[];

export interface CreatePostRequest {
  missionId: number;
  title: string;
  content: string;
  image: File;
}

export interface UpdatePostRequest {
  id: number;
  title: string;
  content: string;
  image: File;
}

export interface DeletePostRequest {
  id: number;
}
