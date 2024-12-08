import PageContainer from '@/shared/ui/page-container';
import JoinMissionForm from '@/widgets/mission/ui/join-mission-form';

const JoinMission = () => {
  return (
    <PageContainer
      headerOption={{
        title: '미션 참여',
        leftIcon: 'leftArrow',
      }}
      navigationOption={{
        visible: false,
      }}
    >
      <JoinMissionForm />
    </PageContainer>
  );
};

export default JoinMission;
