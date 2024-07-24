import { queryOptions } from '@/features/mission/api/use-mission-service';
import PageContainer from '@/shared/ui/page-container';
import MissionInfo from '@/widgets/mission/ui/mission-info';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { notFound } from 'next/navigation';

interface MissionDetailProps {
  pageId: number;
}

const MissionDetail = async ({ pageId }: MissionDetailProps) => {
  const queryClient = new QueryClient();

  try {
    const mission = await queryClient.fetchQuery(queryOptions.mission(pageId));

    if (!mission) {
      notFound();
    }

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PageContainer
          headerShown
          headerOptions={{
            title: '미션 정보',
            leftIcon: 'leftArrow',
          }}
        >
          <MissionInfo mission={mission} />
        </PageContainer>
      </HydrationBoundary>
    );
  } catch (error) {
    return notFound();
  }
};

export default MissionDetail;
