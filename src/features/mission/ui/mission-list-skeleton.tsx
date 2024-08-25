import MissionCardSkeleton from '@/features/mission/ui/mission-card-skeleton';

const MissionListSkeleton = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-2">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <MissionCardSkeleton key={`${index + _}`} />
        ))}
    </section>
  );
};

export default MissionListSkeleton;
