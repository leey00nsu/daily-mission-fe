import PageContainer from '@/shared/ui/page-container';
import ProfileForm from '@/widgets/user/ui/profile-form';

const UpdateProfile = () => {
  return (
    <PageContainer
      headerOption={{
        leftIcon: 'leftArrow',
        title: '프로필 수정',
      }}
      navigationOption={{
        visible: false,
      }}
    >
      <ProfileForm />
    </PageContainer>
  );
};

export default UpdateProfile;
