import MissionCardSkeleton from '@/features/mission/ui/mission-card-skeleton';

interface MissionListSkeletonProps {
  count?: number;
}

const MissionListSkeleton = ({ count = 1 }: MissionListSkeletonProps) => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-2">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <MissionCardSkeleton key={`${index + _}`} />
        ))}
    </section>
  );
};

export default MissionListSkeleton;
