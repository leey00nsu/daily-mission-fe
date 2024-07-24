'use client';

import MissionCard from '@/entities/mission/ui/mission-card';
import { MissionCard as MissionCardType } from '@/types/mission';
import { useRouter } from 'next/navigation';

interface MissionListProps {
  missions: MissionCardType[];
}

const MissionList = ({ missions }: MissionListProps) => {
  const router = useRouter();

  const clickCardHandler = (id: number) => {
    router.push(`/mission/${id}`);
  };

  return (
    <section className="flex flex-col gap-2">
      {missions.map((mission) => (
        <MissionCard
          key={mission.id}
          mission={mission}
          onClick={() => clickCardHandler(mission.id)}
        />
      ))}
    </section>
  );
};

export default MissionList;
