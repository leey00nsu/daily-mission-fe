'use client';

import { useGetParticipatedMissions } from '@/features/mission/api/use-mission-service';
import MissionList from '@/features/mission/ui/mission-list';
import MissionListSkeleton from '@/features/mission/ui/mission-list-skeleton';
import { formatPaginatedData } from '@/shared/lib/format';

const ParticipatedMissionList = () => {
  const { data: missions, isFetching: isMissionsFetching } =
    useGetParticipatedMissions();

  return (
    <>
      <MissionList missionPages={formatPaginatedData(missions ?? [])} />

      {isMissionsFetching && <MissionListSkeleton />}
    </>
  );
};

export default ParticipatedMissionList;
