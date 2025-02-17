import cn from '@/shared/lib/cn';
import FadeInImage from '@/shared/ui/fade-in-image';
import { LuImagePlus } from 'react-icons/lu';

interface MissionImageProps {
  imageSrc: string;
  className?: string;
}

const MissionImage = ({ imageSrc, className }: MissionImageProps) => {
  return (
    <div className={cn('relative h-80 w-full shrink-0', className)}>
      <FadeInImage
        fallbackComponent={<LuImagePlus className="h-1/2 w-1/2" />}
        src={imageSrc}
        alt="Mission Image"
        fill
        unoptimized
        className={cn(
          'flex h-80 items-center justify-center rounded-2xl object-cover',
          className,
        )}
      />
    </div>
  );
};

export default MissionImage;
