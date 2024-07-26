import PageContainer from '@/shared/ui/page-container';
import ProfileMenu from '@/widgets/user/ui/profile-menu';
import UserProfile from '@/widgets/user/ui/user-profile';

const Profile = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        title: '프로필',
      }}
      navigationShown
    >
      <UserProfile />
      <ProfileMenu />
    </PageContainer>
  );
};

export default Profile;
