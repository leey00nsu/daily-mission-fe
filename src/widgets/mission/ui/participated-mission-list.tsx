'use client';

import { useGetParticipatedMissions } from '@/features/mission/api/use-mission-service';
import MissionList from '@/features/mission/ui/mission-list';
import MissionListSkeleton from '@/features/mission/ui/mission-list-skeleton';
import { formatPaginatedData } from '@/shared/lib/format';

const ParticipatedMissionList = () => {
  const { data: missions, isLoading: isMissionsLoading } =
    useGetParticipatedMissions();

  return (
    <>
      <MissionList missionPages={formatPaginatedData(missions ?? [])} />
      {!isMissionsLoading && !missions?.length && (
        <div className="flex h-40 items-center justify-center">
          <p>참여한 미션이 없습니다.</p>
        </div>
      )}
      {isMissionsLoading && <MissionListSkeleton />}
    </>
  );
};

export default ParticipatedMissionList;
