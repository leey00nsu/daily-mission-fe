import PageContainer from '@/shared/ui/page-container';
import MissionListTab from '@/widgets/mission/ui/mission-list-tab';

const Home = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        fixed: false,
        title: '미션',
      }}
      navigationShown
    >
      <MissionListTab />
    </PageContainer>
  );
};

export default Home;
