import PageContainer from '@/shared/ui/page-container';
import JoinMissionForm from '@/widgets/mission/ui/join-mission-form';

const JoinMission = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        title: '미션 참여',
        leftIcon: 'leftArrow',
      }}
    >
      <JoinMissionForm />
    </PageContainer>
  );
};

export default JoinMission;
