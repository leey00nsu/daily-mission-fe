'use client';

import { useGetParticipatedMissions } from '@/features/mission/api/use-mission-service';
import MissionList from '@/features/mission/ui/mission-list';
import MissionListSkeleton from '@/features/mission/ui/mission-list-skeleton';
import { formatPaginatedData } from '@/shared/lib/format';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';

const ParticipatedMissionListTab = () => {
  const { data: missions, isFetching: isMissionsFetching } =
    useGetParticipatedMissions();

  return (
    <Tabs defaultValue="participated" className="relative h-full w-full">
      <div className="sticky top-0 z-10 flex h-14 items-center justify-center bg-background">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="participated">참여한 미션</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="participated">
        <MissionList missionPages={formatPaginatedData(missions ?? [])} />
      </TabsContent>

      {isMissionsFetching && <MissionListSkeleton />}
    </Tabs>
  );
};

export default ParticipatedMissionListTab;
