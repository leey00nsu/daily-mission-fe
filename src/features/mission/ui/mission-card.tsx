import { MissionCard as MissionCardType } from '@/entities/mission/model/type';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/shared/ui/card';
import Image from 'next/image';
import { LuFlag, LuPenTool } from 'react-icons/lu';

interface MissionCardProps {
  mission: MissionCardType;
  onClick?: () => void;
  role?: 'owner' | 'participant' | null;
}

const MissionCard = ({ mission, onClick, role }: MissionCardProps) => {
  const { nickname, title, content, startDate, endDate, imageUrl, ended } =
    mission;

  return (
    <Card onClick={onClick} className="relative">
      {ended && (
        <div className="absolute z-[1] flex h-full w-full items-center justify-center bg-gray-100/50 backdrop-blur-sm">
          <p className="font-semibold">종료된 미션입니다.</p>
        </div>
      )}
      <CardHeader>
        <CardDescription>
          {startDate} ~ {endDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative flex gap-4">
          <div className="relative aspect-square min-h-10 w-1/2 grow overflow-hidden rounded-2xl">
            <Image
              fill
              alt="mission image"
              src={imageUrl || ''}
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="w-1/2">
            <h3 className="truncate font-semibold">{nickname}</h3>
            <h3 className="truncate text-2xl font-semibold">{title}</h3>
            <p className="">{content}</p>
          </div>

          <div className="absolute bottom-0 right-0 z-[2]">
            {role === 'owner' && (
              <div className="flex flex-col items-center justify-center">
                <span className="text-xs text-muted-foreground">작성자</span>
                <LuPenTool className="h-6 w-6 text-muted-foreground" />
              </div>
            )}
            {role === 'participant' && (
              <div className="flex flex-col items-center justify-center">
                <span className="text-xs text-muted-foreground">참여자</span>
                <LuFlag className="h-6 w-6 text-muted-foreground" />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
