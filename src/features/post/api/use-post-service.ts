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
  InfiniteData,
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
  props?: UseMutationOptions<
    void,
    Error,
    ToggleLikeRequest,
    {
      previousPosts: InfiniteData<GetPaginatedPostsResponse>[];
    }
  >,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleLikePost,
    onMutate: async ({ postId }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.all });

      // 현재 캐시된 데이터 백업
      const previousPosts = queryClient
        .getQueriesData<InfiniteData<GetPaginatedPostsResponse>>({
          queryKey: queryKeys.all,
        })
        .map(([, data]) => data)
        .filter(
          (data): data is InfiniteData<GetPaginatedPostsResponse> =>
            data != null,
        );

      // 포스트 목록에 대해 좋아요 토글 optimistic update
      const updatedPosts = previousPosts.map((posts) => ({
        ...posts,
        pages: posts.pages.map((page) => ({
          ...page,
          data: page.data.map((post) => {
            if (post.id === postId) {
              return {
                ...post,
                liked: !post.liked,
                likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1,
              };
            }
            return post;
          }),
        })),
      }));

      // 업데이트된 데이터를 캐시에 적용
      updatedPosts.forEach((posts, index) => {
        const queryKey = queryClient
          .getQueriesData<
            InfiniteData<GetPaginatedPostsResponse>
          >({ queryKey: queryKeys.all })
          .find(([, data]) => data === previousPosts[index])?.[0];

        if (queryKey) {
          queryClient.setQueryData(queryKey, posts);
        }
      });

      return { previousPosts };
    },
    onError: (err, variables, context) => {
      if (context?.previousPosts) {
        // 에러 발생 시 이전 상태로 복원
        context.previousPosts.forEach((posts) => {
          const queryKey = queryClient
            .getQueriesData<
              InfiniteData<GetPaginatedPostsResponse>
            >({ queryKey: queryKeys.all })
            .find(([, data]) => data === posts)?.[0];

          if (queryKey) {
            queryClient.setQueryData(queryKey, posts);
          }
        });
      }
    },
    ...props,
  });
};
