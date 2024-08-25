import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { LuImagePlus } from 'react-icons/lu';

interface MissionImageProps {
  imageSrc: string;
}

const MissionImage = ({ imageSrc }: MissionImageProps) => {
  return (
    <div className="h-64 w-full overflow-hidden rounded-2xl">
      <Avatar className="h-full w-full rounded-none">
        <AvatarImage src={imageSrc} className="w-full" />
        <AvatarFallback className="rounded-none">
          <LuImagePlus className="h-1/2 w-1/2" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default MissionImage;
