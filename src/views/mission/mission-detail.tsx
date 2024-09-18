import PageContainer from '@/shared/ui/page-container';
import MissionInfo from '@/widgets/mission/ui/mission-info';

interface MissionDetailProps {
  pageId: number;
}

const MissionDetail = ({ pageId }: MissionDetailProps) => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        title: '미션 정보',
        leftIcon: 'leftArrow',
      }}
    >
      <MissionInfo pageId={pageId} />
    </PageContainer>
  );
};

export default MissionDetail;
