'use client';

import { useUserStore } from '@/entities/user/model/store';
import { useGetUserPosts } from '@/features/post/api/use-post-service';
import PostList from '@/features/post/ui/post-list';
import PostListSkeleton from '@/features/post/ui/post-list-skeleton';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const UserPostList = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const user = useUserStore((state) => state.user);
  const {
    data: postPages,
    isFetching: isPostsFetching,
    hasNextPage: postHasNextPage,
    fetchNextPage: fetchPostNextPage,
  } = useGetUserPosts({
    page: 0,
    size: 5,
  });

  useEffect(() => {
    if (inView && !isPostsFetching && postHasNextPage) {
      fetchPostNextPage();
    }
  }, [inView]);

  const postsCount = postPages?.pages.reduce(
    (acc, page) => acc + page.data.length,
    0,
  );

  return (
    <>
      <PostList
        viewMode="compact"
        showMissionTitle
        postPages={postPages?.pages}
        username={user?.nickname}
      />
      {!isPostsFetching && !postsCount && (
        <div className="flex h-40 items-center justify-center">
          <p>등록된 포스트가 없습니다.</p>
        </div>
      )}
      {isPostsFetching && <PostListSkeleton />}

      <div ref={ref} className="h-1" />
    </>
  );
};

export default UserPostList;
