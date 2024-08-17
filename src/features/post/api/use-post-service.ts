import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  getUserPosts,
  updatePost,
} from '@/entities/post/api/post-service';
import {
  CreatePostRequest,
  DeletePostRequest,
  GetPostRequest,
  GetPostResponse,
  GetPostsRequest,
  GetPostsResponse,
  UpdatePostRequest,
} from '@/entities/post/model/type';

import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';

export const queryKeys = {
  post: (id: number) => ['post', id],
  posts: (missionId: number) => ['posts', missionId],
  userPosts: () => ['userPosts'],
};

export const queryOptions = {
  post: (id: number) => ({
    queryKey: queryKeys.post(id),
    queryFn: () => getPost({ id }),
  }),
  posts: (missionId: number) => ({
    queryKey: queryKeys.posts(missionId),
    queryFn: () => getPosts({ missionId }),
  }),
  userPosts: () => ({
    queryKey: queryKeys.userPosts(),
    queryFn: () => getUserPosts(),
  }),
};

export const useGetPost = (
  { id }: GetPostRequest,
  props?: UseQueryOptions<unknown, unknown, GetPostResponse>,
) => {
  return useQuery({
    queryKey: queryKeys.post(id),
    queryFn: queryOptions.post(id).queryFn,
    ...props,
  });
};

export const useGetPosts = (
  { missionId }: GetPostsRequest,
  props?: UseQueryOptions<unknown, unknown, GetPostsResponse>,
) => {
  return useQuery({
    queryKey: queryKeys.posts(missionId),
    queryFn: queryOptions.posts(missionId).queryFn,
    ...props,
  });
};

export const useGetUserPosts = (
  props?: UseQueryOptions<unknown, unknown, GetPostsResponse>,
) => {
  return useQuery({
    queryKey: queryKeys.userPosts(),
    queryFn: queryOptions.userPosts().queryFn,
    ...props,
  });
};

export const useCreatePost = (
  props?: UseMutationOptions<void, unknown, CreatePostRequest, unknown>,
) => {
  return useMutation({
    mutationFn: createPost,
    ...props,
  });
};

export const useUpdatePost = (
  props?: UseMutationOptions<void, unknown, UpdatePostRequest, unknown>,
) => {
  return useMutation({
    mutationFn: updatePost,
    ...props,
  });
};

export const useDeletePost = (
  props?: UseMutationOptions<void, unknown, DeletePostRequest, unknown>,
) => {
  return useMutation({
    mutationFn: deletePost,
    ...props,
  });
};
