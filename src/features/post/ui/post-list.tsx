import { Post } from '@/entities/post/model/type';
import PostCard from '@/features/post/ui/post-card';

interface PostListProps {
  posts?: Post[];
  showMissionTitle?: boolean;
}

const PostList = ({ posts, showMissionTitle = false }: PostListProps) => {
  return (
    <section className="flex flex-col gap-2">
      {posts?.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          showMissionTitle={showMissionTitle}
        />
      ))}
      {!posts?.length && (
        <div className="flex h-40 items-center justify-center">
          <p>등록된 포스트가 없습니다.</p>
        </div>
      )}
    </section>
  );
};

export default PostList;
