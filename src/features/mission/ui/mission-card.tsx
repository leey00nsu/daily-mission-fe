import { MissionCard as MissionCardType } from '@/entities/mission/model/type';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/shared/ui/card';
import Image from 'next/image';

interface MissionCardProps {
  mission: MissionCardType;
  onClick?: () => void;
}

const MissionCard = ({ mission, onClick }: MissionCardProps) => {
  const { title, content, startDate, endDate, imageUrl } = mission;

  return (
    <Card onClick={onClick}>
      <CardHeader>
        <CardDescription>
          {startDate} ~ {endDate}
        </CardDescription>
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
            <p className="truncate">{content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
