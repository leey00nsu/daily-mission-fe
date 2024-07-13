import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { LuUser2 } from 'react-icons/lu';
import { MdAddPhotoAlternate } from 'react-icons/md';

interface ProfileImageProps {
  imageSrc: string;
}

const ProfileImage = ({ imageSrc }: ProfileImageProps) => {
  return (
    <div className="relative">
      <Avatar className="h-32 w-32">
        <AvatarImage src={imageSrc} />
        <AvatarFallback>
          <LuUser2 className="h-1/2 w-1/2" />
        </AvatarFallback>
      </Avatar>
      <div className="absolute bottom-3 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
        <MdAddPhotoAlternate />
      </div>
    </div>
  );
};

export default ProfileImage;
