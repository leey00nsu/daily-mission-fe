import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { Skeleton } from '@/shared/ui/skeleton';

const MissionCardSkeleton = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <Skeleton className="h-[20px]" />
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <div className="aspect-square min-h-10 w-1/2 grow overflow-hidden rounded-2xl">
            <Skeleton className="h-full w-full" />
          </div>
          <div className="flex aspect-square min-h-10 w-1/2 grow flex-col gap-2 overflow-hidden">
            <Skeleton className="h-[20px] w-full" />
            <Skeleton className="h-[20px] w-full" />
            <Skeleton className="h-[20px] w-full" />
            <Skeleton className="h-[20px] w-full" />
            <Skeleton className="h-[20px] w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MissionCardSkeleton;
