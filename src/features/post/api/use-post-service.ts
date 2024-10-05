import {
  createPost,
  deletePost,
  getMissionPosts,
  getPost,
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
  missionPosts: (missionId: number) => ['posts', missionId],
  userPosts: () => ['userPosts'],
};

export const queryOptions = {
  post: (id: number) => ({
    queryKey: queryKeys.post(id),
    queryFn: () => getPost({ id }),
  }),
  missionPosts: (missionId: number) => ({
    queryKey: queryKeys.missionPosts(missionId),
    queryFn: () => getMissionPosts({ missionId }),
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
    ...queryOptions.post(id),
    ...props,
  });
};

export const useGetMissionPosts = (
  { missionId }: GetPostsRequest,
  props?: UseQueryOptions<unknown, unknown, GetPostsResponse>,
) => {
  return useQuery({
    ...queryOptions.missionPosts(missionId),
    ...props,
  });
};

export const useGetUserPosts = (
  props?: UseQueryOptions<unknown, unknown, GetPostsResponse>,
) => {
  return useQuery({
    ...queryOptions.userPosts(),
    ...props,
  });
};

export const useCreatePost = (
  props?: UseMutationOptions<void, Error, CreatePostRequest, unknown>,
) => {
  return useMutation({
    mutationFn: createPost,
    ...props,
  });
};

export const useUpdatePost = (
  props?: UseMutationOptions<void, Error, UpdatePostRequest, unknown>,
) => {
  return useMutation({
    mutationFn: updatePost,
    ...props,
  });
};

export const useDeletePost = (
  props?: UseMutationOptions<void, Error, DeletePostRequest, unknown>,
) => {
  return useMutation({
    mutationFn: deletePost,
    ...props,
  });
};
