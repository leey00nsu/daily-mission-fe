import ProfileImage from '@/entities/user/ui/profile-image';
import { User } from '@/types/user';

interface UserProfileProps {
  user: User;
}

const UserProfile = ({ user }: UserProfileProps) => {
  const { name, imageUrl } = user;
  return (
    <div className="flex flex-col items-center">
      <ProfileImage imageSrc={imageUrl} />
      <p>{name}</p>
    </div>
  );
};

export default UserProfile;
