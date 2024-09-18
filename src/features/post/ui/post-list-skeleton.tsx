import PostCardSkeleton from '@/features/post/ui/post-card-skeleton';

interface PostListSkeletonProps {
  count?: number;
}

const PostListSkeleton = ({ count = 1 }: PostListSkeletonProps) => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-2">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <PostCardSkeleton key={`${index + _}`} />
        ))}
    </section>
  );
};

export default PostListSkeleton;
