'use client';

import { useUserStore } from '@/entities/user/model/store';
import ProfileMenu from '@/features/user/ui/profile-menu';
import UserProfile from '@/features/user/ui/user-profile';

const ProfileDashboard = () => {
  const user = useUserStore((state) => state.user);

  return (
    <>
      <UserProfile user={user} />
      <ProfileMenu />
    </>
  );
};

export default ProfileDashboard;
