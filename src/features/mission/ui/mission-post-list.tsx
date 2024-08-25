import { Post } from '@/entities/post/model/type';
import MissionPostCard from '@/features/mission/ui/mission-post-card';

interface MissionPostListProps {
  posts: Post[] | undefined;
}

const MissionPostList = ({ posts }: MissionPostListProps) => {
  return (
    <section className="flex flex-col gap-2">
      {posts?.map((post) => <MissionPostCard key={post.id} post={post} />)}
      {!posts?.length && (
        <div className="flex h-40 items-center justify-center">
          <p>등록된 포스트가 없습니다.</p>
        </div>
      )}
    </section>
  );
};

export default MissionPostList;
