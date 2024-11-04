'use client';

import { MissionCard as MissionCardType } from '@/entities/mission/model/type';
import MissionCard from '@/features/mission/ui/mission-card';
import { Page } from '@/shared/model/type';
import { useRouter } from 'next/navigation';

interface MissionListProps {
  missionPages?: Page<MissionCardType>[];
}

const MissionList = ({ missionPages }: MissionListProps) => {
  const router = useRouter();

  const clickCardHandler = (id: number) => {
    router.push(`/mission/${id}`);
  };

  return (
    <section className="flex flex-col gap-2">
      {missionPages?.map((page) =>
        page.data?.map((mission) => (
          <MissionCard
            key={mission.id}
            mission={mission}
            onClick={() => clickCardHandler(mission.id)}
          />
        )),
      )}
    </section>
  );
};

export default MissionList;
