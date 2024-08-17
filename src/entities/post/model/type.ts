export interface Post {
  id: number;
  missionId: number;
  missionTitle: string;
  userName: string;
  userImgUrl: string;
  title: string;
  content: string;
  imgUrl: string;
  createdDate: string;
  modifiedDate: string;
}

export interface GetPostRequest {
  id: number;
}
export interface GetPostResponse extends Post {}

export interface GetPostsRequest {
  missionId: number;
}
export interface GetPostsResponse extends Post {}

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
