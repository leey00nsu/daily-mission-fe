import Logo from '@/shared/ui/logo';
import PageContainer from '@/shared/ui/page-container';
import MissionListTab from '@/widgets/mission/ui/mission-list-tab';

const Missions = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        fixed: false,
        title: <Logo />,
      }}
      navigationShown
      showScrollButton
    >
      <MissionListTab />
    </PageContainer>
  );
};

export default Missions;
