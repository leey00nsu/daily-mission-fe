import PageContainer from '@/shared/ui/page-container';
import MissionCredentialForm from '@/widgets/mission/ui/mission-credential-form';

const JoinMission = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        title: '미션 참여',
        leftIcon: 'leftArrow',
      }}
    >
      <MissionCredentialForm />
    </PageContainer>
  );
};

export default JoinMission;
