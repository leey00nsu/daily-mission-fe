import { User } from '@/entities/user/model/type';
import ProfileImage from '@/features/user/ui/profile-image';

interface UserProfileProps {
  user: User;
}

const UserProfile = ({ user }: UserProfileProps) => {
  const { email, imgUrl } = user;

  return (
    <div className="flex flex-col items-center">
      <ProfileImage imageSrc={imgUrl} />
      <p>{email}</p>
    </div>
  );
};

export default UserProfile;
