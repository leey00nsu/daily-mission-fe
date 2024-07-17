import MissionPostCard from '@/entities/mission/ui/mission-post-card';
import { Post } from '@/types/post';

interface MissionPostListProps {
  posts: Post[];
}

const MissionPostList = ({ posts }: MissionPostListProps) => {
  return (
    <section className="flex flex-col gap-2">
      {posts.map((post) => (
        <MissionPostCard key={post.postId} post={post} />
      ))}
    </section>
  );
};

export default MissionPostList;
