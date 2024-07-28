import { queryOptions } from '@/features/user/api/use-user-service';
import PageContainer from '@/shared/ui/page-container';

import ProfileDashboard from '@/widgets/user/ui/profile-dashboard';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { notFound } from 'next/navigation';

const Profile = async () => {
  const queryClient = new QueryClient();

  try {
    const user = await queryClient.fetchQuery(queryOptions.user());

    if (!user) {
      notFound();
    }

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PageContainer
          headerShown
          headerOptions={{
            title: '프로필',
          }}
          navigationShown
        >
          <ProfileDashboard />
        </PageContainer>
      </HydrationBoundary>
    );
  } catch (error) {
    return notFound();
  }
};

export default Profile;
