import MissionCard from '@/entities/mission/ui/mission-card';
import { MissionCard as MissionCardType } from '@/types/mission';

interface MissionListProps {
  missions: MissionCardType[];
}

const MissionList = ({ missions }: MissionListProps) => {
  return (
    <section className="flex flex-col gap-2">
      {missions.map((mission) => (
        <MissionCard key={mission.id} mission={mission} />
      ))}
    </section>
  );
};

export default MissionList;
