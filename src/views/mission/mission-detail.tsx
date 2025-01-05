import PageContainer from '@/shared/ui/page-container';
import MissionInfo from '@/widgets/mission/ui/mission-info';

interface MissionDetailProps {
  pageId: number;
}

const MissionDetail = ({ pageId }: MissionDetailProps) => {
  return (
    <PageContainer
      headerOption={{
        title: '미션 정보',
        leftIcon: 'leftArrow',
      }}
      navigationOption={{
        visible: false,
      }}
    >
      <MissionInfo pageId={pageId} />
    </PageContainer>
  );
};

export default MissionDetail;
