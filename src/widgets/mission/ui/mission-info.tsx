import { POSTS } from '@/entities/mission/constants/mock-post';
import MissionPostList from '@/features/mission/ui/mission-post-list';
import WeekCheckboxGroup from '@/features/mission/ui/week-checkbox-group';
import AvatarGroup from '@/shared/ui/avatar-group';
import { Input } from '@/shared/ui/input';
import { Mission } from '@/types/mission';
import Image from 'next/image';
import { LuChevronRight } from 'react-icons/lu';

interface MissionInfoProps {
  mission: Mission;
}

const MissionInfo = ({ mission }: MissionInfoProps) => {
  const { imageUrl, title, description, date, rules } = mission;

  return (
    <section className="flex w-full flex-col items-center justify-center gap-4">
      <div className="relative h-64 w-full">
        <Image
          fill
          alt="mission image"
          src={imageUrl}
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium">미션 제목</h3>
        <p>{title}</p>
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium">미션 설명</h3>
        <p>{description}</p>
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium">미션 규칙</h3>
        <WeekCheckboxGroup week={rules} readonly />
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium">미션 날짜</h3>
        <div className="flex w-full items-center gap-2">
          <Input readOnly type="date" value={date.from} />
          <LuChevronRight className="h-8 w-8" />
          <Input readOnly type="date" value={date.to} />
        </div>
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium">미션 참여자</h3>
        <AvatarGroup avatars={['a', 'b', 'c']} />
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium">미션 포스트</h3>
        <MissionPostList posts={POSTS} />
      </div>
    </section>
  );
};

export default MissionInfo;
