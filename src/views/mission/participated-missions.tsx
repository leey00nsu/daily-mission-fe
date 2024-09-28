import PageContainer from '@/shared/ui/page-container';
import ParticipatedMissionList from '@/widgets/mission/ui/participated-mission-list';

const ParticipatedMissions = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        leftIcon: 'leftArrow',
        title: '참여한 미션',
      }}
      showScrollButton
    >
      <ParticipatedMissionList />
    </PageContainer>
  );
};

export default ParticipatedMissions;
