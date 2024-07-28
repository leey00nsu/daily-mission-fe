import { User } from '@/entities/user/model/type';
import ProfileImage from '@/features/user/ui/profile-image';

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
