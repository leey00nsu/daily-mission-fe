import PageContainer from '@/shared/ui/page-container';
import ProfileForm from '@/widgets/user/ui/profile-form';

const SetProfile = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        leftIcon: 'leftArrow',
        title: '프로필',
      }}
    >
      <ProfileForm />
    </PageContainer>
  );
};

export default SetProfile;
