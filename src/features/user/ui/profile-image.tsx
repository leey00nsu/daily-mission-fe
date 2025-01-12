import { Avatar } from '@/shared/ui/avatar';

interface ProfileImageProps {
  imageSrc: string;
}

const ProfileImage = ({ imageSrc }: ProfileImageProps) => {
  return <Avatar className="h-32 w-32" imageUrl={imageSrc} nickname="User" />;
};

export default ProfileImage;
