import cn from '@/shared/lib/cn';
import FadeInImage from '@/shared/ui/fade-in-image';
import { LuImagePlus } from 'react-icons/lu';

interface PostImageProps {
  imageSrc: string;
  className?: string;
}

const PostImage = ({ imageSrc, className }: PostImageProps) => {
  return (
    <div className={cn('relative h-80 w-full shrink-0', className)}>
      <FadeInImage
        fallbackComponent={<LuImagePlus className="h-1/2 w-1/2" />}
        src={imageSrc}
        alt="Post Image"
        fill
        unoptimized
        className={cn(
          'flex items-center justify-center rounded-2xl object-cover',
          className,
        )}
      />
    </div>
  );
};

export default PostImage;
