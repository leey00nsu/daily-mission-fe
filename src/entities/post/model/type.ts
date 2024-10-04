import { z } from 'zod';

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

export const CreatePostSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: '포스트 제목은 2글자 이상 20글자 이하여야 합니다.',
    })
    .max(20, {
      message: '포스트 제목은 2글자 이상 20글자 이하여야 합니다.',
    }),
  content: z.string().min(2, {
    message: '포스트 내용은 2글자 이상이여야 합니다.',
  }),
  image: z.instanceof(File, {
    message: '포스트 이미지 파일을 업로드해주세요.',
  }),
});

export type CreatePostRequest = z.infer<typeof CreatePostSchema> & {
  missionId: number;
};

export interface GetPostRequest {
  id: number;
}
export type GetPostResponse = Post;

export interface GetPostsRequest {
  missionId: number;
}
export type GetPostsResponse = Post[];

export const UpdatePostSchema = CreatePostSchema;

export type UpdatePostRequest = z.infer<typeof UpdatePostSchema> & {
  id: number;
};

export interface DeletePostRequest {
  id: number;
}
