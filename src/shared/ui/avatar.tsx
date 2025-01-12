import cn from '@/shared/lib/cn';
import FadeInImage from '@/shared/ui/fade-in-image';
import { LuUser } from 'react-icons/lu';

interface AvatarProps {
  imageUrl: string;
  nickname: string;
  className?: string;
}

export const Avatar = ({ imageUrl, nickname, className }: AvatarProps) => {
  return (
    <div
      className={cn(
        'relative shrink-0 overflow-hidden rounded-full',
        className,
      )}
    >
      <FadeInImage
        fallbackComponent={<LuUser className="h-1/2 w-1/2" />}
        src={imageUrl}
        alt={nickname}
        fill
        unoptimized
        className={cn(
          'flex items-center justify-center object-cover',
          className,
        )}
      />
    </div>
  );
};
