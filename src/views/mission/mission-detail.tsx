import { ALL_MISSIONS } from '@/entities/mission/constants/mock-mission';
import PageContainer from '@/shared/ui/page-container';
import MissionInfo from '@/widgets/mission/ui/mission-info';

const MissionDetail = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        title: '미션 정보',
        leftIcon: 'leftArrow',
      }}
    >
      <MissionInfo mission={ALL_MISSIONS[0]} />
    </PageContainer>
  );
};

export default MissionDetail;
