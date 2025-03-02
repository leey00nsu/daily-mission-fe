import {
  createPost,
  deletePost,
  getPaginatedMissionPosts,
  getPaginatedUserPosts,
  getPost,
  toggleLikePost,
  updatePost,
} from '@/entities/post/api/post-service';
import {
  CreatePostRequest,
  DeletePostRequest,
  GetPaginatedPostsResponse,
  GetPostRequest,
  GetPostResponse,
  GetPostsRequest,
  ToggleLikeRequest,
  UpdatePostRequest,
} from '@/entities/post/model/type';

import {
  UseMutationOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export const queryKeys = {
  all: ['post'],
  post: (id: number) => ['post', id],
  paginatedMissionPosts: (page: number, size: number, missionId: number) => [
    'post',
    'paginatedMissionPosts',
    page,
    size,
    missionId,
  ],
  paginatedUserPosts: (page: number, size: number) => [
    'post',
    'paginatedUserPosts',
    page,
    size,
  ],
  userPosts: () => ['post', 'userPosts'],
};

export const queryOptions = {
  post: (id: number) => ({
    queryKey: queryKeys.post(id),
    queryFn: () => getPost({ id }),
  }),
  paginatedMissionPosts: (missionId: number, page: number, size: number) => ({
    initialPageParam: page,
    queryKey: queryKeys.paginatedMissionPosts(page, size, missionId),
    queryFn: ({ pageParam = page }) =>
      getPaginatedMissionPosts({
        missionId,
        page: pageParam,
        size,
      }),
    getNextPageParam: (
      lastPage: GetPaginatedPostsResponse,
      allPages: GetPaginatedPostsResponse[],
      pageParam: number,
    ) => {
      return lastPage.meta.isNext ? (pageParam as number) + 1 : undefined;
    },
  }),
  paginatedUserPosts: (page: number, size: number) => ({
    initialPageParam: page,
    queryKey: queryKeys.paginatedUserPosts(page, size),
    queryFn: ({ pageParam = page }) =>
      getPaginatedUserPosts({
        page: pageParam,
        size,
      }),
    getNextPageParam: (
      lastPage: GetPaginatedPostsResponse,
      allPages: GetPaginatedPostsResponse[],
      pageParam: number,
    ) => {
      return lastPage.meta.isNext ? (pageParam as number) + 1 : undefined;
    },
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

export const useGetMissionPosts = ({
  missionId,
  page,
  size,
}: GetPostsRequest) => {
  return useInfiniteQuery({
    ...queryOptions.paginatedMissionPosts(missionId, page, size),
  });
};

export const useGetUserPosts = ({
  page,
  size,
}: Pick<GetPostsRequest, 'page' | 'size'>) => {
  return useInfiniteQuery({
    ...queryOptions.paginatedUserPosts(page, size),
  });
};

export const useCreatePost = (
  props?: UseMutationOptions<void, Error, CreatePostRequest, unknown>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all });
    },
    ...props,
  });
};

export const useUpdatePost = (
  props?: UseMutationOptions<void, Error, UpdatePostRequest, unknown>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all });
    },
    ...props,
  });
};

export const useDeletePost = (
  props?: UseMutationOptions<void, Error, DeletePostRequest, unknown>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all });
    },
    ...props,
  });
};

export const useToggleLikePost = (
  props?: UseMutationOptions<void, Error, ToggleLikeRequest, unknown>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleLikePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all });
    },
    ...props,
  });
};
