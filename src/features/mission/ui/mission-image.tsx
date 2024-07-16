import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { LuScrollText } from 'react-icons/lu';
import { MdAddPhotoAlternate } from 'react-icons/md';

interface MissionImageProps {
  imageSrc: string;
}

const MissionImage = ({ imageSrc }: MissionImageProps) => {
  return (
    <div className="relative h-32 w-32">
      <Avatar className="h-full w-full">
        <AvatarImage src={imageSrc} />
        <AvatarFallback>
          <LuScrollText className="h-1/2 w-1/2" />
        </AvatarFallback>
      </Avatar>
      <div className="absolute bottom-3 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
        <MdAddPhotoAlternate />
      </div>
    </div>
  );
};

export default MissionImage;
