import PageContainer from '@/shared/ui/page-container';
import MissionInfoSkeleton from '@/widgets/mission/ui/mission-info-skeleton';

export default function Loading() {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        title: '미션 정보',
        leftIcon: 'leftArrow',
      }}
    >
      <MissionInfoSkeleton />
    </PageContainer>
  );
}
