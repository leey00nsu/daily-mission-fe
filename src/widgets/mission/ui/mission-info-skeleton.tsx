import { Skeleton } from '@/shared/ui/skeleton';

const MissionInfoSkeleton = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4">
      <Skeleton className="relative h-64 w-full" />

      <div className="w-full">
        <Skeleton className="h-[28px]" />
        <Skeleton className="h-[24px]" />
      </div>

      <div className="w-full">
        <Skeleton className="h-[28px]" />
        <Skeleton className="h-[24px]" />
      </div>

      <div className="w-full">
        <Skeleton className="h-[28px]" />
        <Skeleton className="h-[24px]" />
      </div>

      <div className="w-full">
        <Skeleton className="h-[28px]" />
        <Skeleton className="h-[24px]" />
      </div>
      <div className="w-full">
        <Skeleton className="h-[28px]" />
        <Skeleton className="h-[24px]" />
      </div>
    </section>
  );
};

export default MissionInfoSkeleton;
