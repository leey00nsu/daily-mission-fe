import PageContainer from '@/shared/ui/page-container';

import ProfileDashboard from '@/widgets/user/ui/profile-dashboard';

const Profile = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        title: '프로필',
      }}
      navigationShown
    >
      <ProfileDashboard />
    </PageContainer>
  );
};

export default Profile;
