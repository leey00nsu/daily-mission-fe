import Logo from '@/shared/ui/logo';
import PageContainer from '@/shared/ui/page-container';
import ParticipatedMissionListTab from '@/widgets/mission/ui/participated-mission-list-tab';

const ParticipatedMissions = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        fixed: false,
        title: <Logo />,
      }}
      navigationShown
    >
      <ParticipatedMissionListTab />
    </PageContainer>
  );
};

export default ParticipatedMissions;
