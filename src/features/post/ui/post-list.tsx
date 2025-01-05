import { Post } from '@/entities/post/model/type';
import PostCard from '@/features/post/ui/post-card';
import { Page } from '@/shared/model/type';

interface PostListProps {
  postPages?: Page<Post>[];
  showMissionTitle?: boolean;
  viewMode?: 'default' | 'compact';
  username?: string;
}

const PostList = ({
  postPages,
  showMissionTitle = false,
  viewMode = 'default',
  username,
}: PostListProps) => {
  return (
    <section className="flex flex-col gap-2">
      {postPages?.map((page) =>
        page.data?.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            showMissionTitle={showMissionTitle}
            viewMode={viewMode}
            username={username}
          />
        )),
      )}
    </section>
  );
};

export default PostList;
