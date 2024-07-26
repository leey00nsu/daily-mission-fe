import PageContainer from '@/shared/ui/page-container';
import ProfileForm from '@/widgets/user/ui/profile-form';

const UpdateProfile = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        leftIcon: 'leftArrow',
        title: '프로필 수정',
      }}
    >
      <ProfileForm />
    </PageContainer>
  );
};

export default UpdateProfile;
