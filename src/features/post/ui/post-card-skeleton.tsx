import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { Skeleton } from '@/shared/ui/skeleton';

const PostCardSkeleton = () => {
  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader className="px-0 py-2">
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-full" />

          <div className="w-full gap-2 overflow-hidden">
            <Skeleton className="h-[20px] w-full" />
            <Skeleton className="h-[20px] w-full" />
            <Skeleton className="h-[20px] w-full" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Skeleton className="h-60 w-full" />
        <Skeleton className="h-[20px] w-full" />
      </CardContent>
    </Card>
  );
};

export default PostCardSkeleton;
