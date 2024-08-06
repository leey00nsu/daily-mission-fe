'use client';

import { useGetProfile } from '@/features/user/api/use-user-service';
import ProfileMenu from '@/features/user/ui/profile-menu';
import UserProfile from '@/features/user/ui/user-profile';

const ProfileDashboard = () => {
  const { data: user } = useGetProfile();

  if (!user) {
    return null;
  }

  return (
    <>
      <UserProfile user={user} />
      <ProfileMenu />
    </>
  );
};

export default ProfileDashboard;
