import MissionCard from '@/entities/mission/ui/mission-card';
import { Mission } from '@/types/mission';

interface MissionListProps {
  missions: Mission[];
}

const MissionList = ({ missions }: MissionListProps) => {
  return (
    <section className="flex flex-col gap-2">
      {missions.map((mission) => (
        <MissionCard
          key={mission.id}
          date={mission.date}
          imageUrl={mission.imageUrl}
          title={mission.title}
          description={mission.description}
        />
      ))}
    </section>
  );
};

export default MissionList;
