import Logo from '@/shared/ui/logo';
import PageContainer from '@/shared/ui/page-container';
import MissionListTab from '@/widgets/mission/ui/mission-list-tab';

const Missions = () => {
  return (
    <PageContainer
      headerOption={{
        fixed: false,
        title: <Logo />,
        rightIcon: 'notification',
      }}
      showScrollButton
    >
      <MissionListTab />
    </PageContainer>
  );
};

export default Missions;
