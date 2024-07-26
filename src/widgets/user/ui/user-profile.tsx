import ProfileImage from '@/entities/user/ui/profile-image';

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center">
      <ProfileImage imageSrc="" />
      <p>email</p>
      <p>username</p>
    </div>
  );
};

export default UserProfile;
