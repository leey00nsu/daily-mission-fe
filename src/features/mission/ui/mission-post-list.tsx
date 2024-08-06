import { Post } from '@/entities/post/model/type';
import MissionPostCard from '@/features/mission/ui/mission-post-card';

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
