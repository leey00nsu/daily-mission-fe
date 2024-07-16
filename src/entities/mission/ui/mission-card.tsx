import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/shared/ui/card';
import { Mission } from '@/types/mission';
import Image from 'next/image';

interface MissionCardProps {
  mission: Mission;
}

const MissionCard = ({ mission }: MissionCardProps) => {
  const { title, description, date, imageUrl } = mission;

  return (
    <Card>
      <CardHeader>
        <CardDescription>{date.from}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <div className="relative aspect-square min-h-10 w-1/2 grow overflow-hidden rounded-2xl">
            <Image
              fill
              alt="mission image"
              src={imageUrl}
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="truncate">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
