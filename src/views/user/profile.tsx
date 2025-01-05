import PageContainer from '@/shared/ui/page-container';

import ProfileDashboard from '@/widgets/user/ui/profile-dashboard';

const Profile = () => {
  return (
    <PageContainer
      headerOption={{
        title: '프로필',
      }}
    >
      <ProfileDashboard />
    </PageContainer>
  );
};

export default Profile;
