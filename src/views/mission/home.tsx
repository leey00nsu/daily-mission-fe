import PageContainer from '@/shared/ui/page-container';
import MissionListTab from '@/widgets/mission/ui/mission-list-tab';

const Home = () => {
  return (
    <PageContainer navigationShown>
      <MissionListTab />
    </PageContainer>
  );
};

export default Home;
