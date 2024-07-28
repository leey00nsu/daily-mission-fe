import { GetMissionResponse } from '@/entities/mission/model/type';
import { POSTS } from '@/entities/post/model/mock-post';
import MissionPostList from '@/features/mission/ui/mission-post-list';
import WeekCheckboxGroup from '@/features/mission/ui/week-checkbox-group';
import AvatarGroup from '@/shared/ui/avatar-group';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';

interface MissionInfoProps {
  mission: GetMissionResponse;
}

const MissionInfo = ({ mission }: MissionInfoProps) => {
  const { id, imgUrl, title, content, startDate, endDate, week } = mission;

  return (
    <section className="mb-20 flex w-full flex-col items-center justify-center gap-4">
      <div className="relative h-64 w-full">
        <Image
          fill
          alt="mission image"
          src={imgUrl}
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
        <p>{content}</p>
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium">미션 규칙</h3>
        <WeekCheckboxGroup week={week} readonly />
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium">미션 날짜</h3>
        <div className="flex w-full items-center gap-2">
          <Input readOnly type="date" value={startDate} />
          <LuChevronRight className="h-8 w-8" />
          <Input readOnly type="date" value={endDate} />
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

      <div className="fixed bottom-0 w-full max-w-2xl p-4">
        <Button asChild className="w-full">
          <Link href={`/mission/join?id=${id}`}>미션 참여하기</Link>
        </Button>
      </div>
    </section>
  );
};

export default MissionInfo;
