import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { LuUser } from 'react-icons/lu';

interface ProfileImageProps {
  imageSrc: string;
}

const ProfileImage = ({ imageSrc }: ProfileImageProps) => {
  return (
    <Avatar className="h-32 w-32">
      <AvatarImage src={imageSrc} />
      <AvatarFallback>
        <LuUser className="h-1/2 w-1/2" />
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileImage;
