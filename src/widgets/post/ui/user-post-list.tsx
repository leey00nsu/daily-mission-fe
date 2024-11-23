'use client';

import { useUserStore } from '@/entities/user/model/store';
import { useGetUserPosts } from '@/features/post/api/use-post-service';
import PostList from '@/features/post/ui/post-list';
import PostListSkeleton from '@/features/post/ui/post-list-skeleton';

const UserPostList = () => {
  const user = useUserStore((state) => state.user);
  const { data: posts, isFetching: isPostsFetching } = useGetUserPosts();

  if (isPostsFetching) return <PostListSkeleton />;

  const userMapppedPosts = posts?.map((post) => ({
    ...post,
    nickname: user.nickname,
  }));

  return (
    <PostList
      viewMode="compact"
      showMissionTitle
      posts={userMapppedPosts}
      username={user.nickname}
    />
  );
};

export default UserPostList;
