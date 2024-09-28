'use client';

import { useGetUserPosts } from '@/features/post/api/use-post-service';
import PostList from '@/features/post/ui/post-list';
import PostListSkeleton from '@/features/post/ui/post-list-skeleton';

const UserPostList = () => {
  const { data: posts, isFetching: isPostsFetching } = useGetUserPosts();

  if (isPostsFetching) return <PostListSkeleton />;

  return <PostList showMissionTitle posts={posts} />;
};

export default UserPostList;
