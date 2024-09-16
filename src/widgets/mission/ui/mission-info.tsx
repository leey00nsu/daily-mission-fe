'use client';

import { Mission } from '@/entities/mission/model/type';
import { useUserStore } from '@/entities/user/model/store';
import { useGetMission } from '@/features/mission/api/use-mission-service';
import WeekCheckboxGroup from '@/features/mission/ui/week-checkbox-group';
import { useGetMissionPosts } from '@/features/post/api/use-post-service';
import PostList from '@/features/post/ui/post-list';
import AvatarGroup from '@/shared/ui/avatar-group';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import MissionInfoSkeleton from '@/widgets/mission/ui/mission-info-skeleton';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LuChevronRight } from 'react-icons/lu';

interface MissionInfoProps {
  pageId: Mission['id'];
}

const MissionInfo = ({ pageId }: MissionInfoProps) => {
  const router = useRouter();
  const {
    data: mission,
    isLoading: isMissonLoading,
    error: isMissionError,
  } = useGetMission({ id: pageId });
  const { data: posts, isLoading: isPostsLoading } = useGetMissionPosts({
    missionId: pageId,
  });
  const user = useUserStore((state) => state.user);

  if (isMissonLoading || isPostsLoading) return <MissionInfoSkeleton />;

  if (isMissionError || !mission) {
    router.push('/');

    return null;
  }

  const {
    nickname,
    imageUrl,
    title,
    content,
    hint,
    startDate,
    endDate,
    participantDto,
    missionRuleResponseDto,
  } = mission;

  const participantAvatars = participantDto.map((participant) => ({
    imageUrl: participant.imageUrl,
    nickname: participant.nickname,
  }));
  const participantCount = participantDto.length;

  const isOwner = user.nickname === mission.nickname;
  const isParticipant = participantDto.some(
    (participant) => participant.nickname === user.nickname,
  );

  return (
    <section className="mb-40 flex w-full flex-col items-center justify-center gap-4">
      <div className="relative h-64 w-full overflow-hidden rounded-2xl">
        <Image
          fill
          alt="mission image"
          src={imageUrl || ''}
          className="object-contain"
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
        <h3 className="text-lg font-medium">미션 참여코드 힌트</h3>
        <p>{hint ?? '힌트가 없습니다.'}</p>
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium">미션 규칙</h3>
        <WeekCheckboxGroup week={missionRuleResponseDto.week} readOnly />
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
        <div className="flex items-center gap-2">
          <AvatarGroup avatars={participantAvatars} />
          <p>
            {nickname}님 외 {participantCount - 1} 명이 참여하고 있습니다.
          </p>
        </div>
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium">미션 포스트</h3>
        <PostList posts={posts} />
      </div>

      <div className="fixed bottom-0 flex w-full max-w-2xl flex-col gap-2 p-4">
        {!isOwner && !isParticipant && (
          <div className="w-full">
            <Button asChild className="w-full">
              <Link href={`/mission/join/${pageId}`}>미션 참여하기</Link>
            </Button>
          </div>
        )}
        {isParticipant && (
          <div className="w-full">
            <Button asChild className="w-full">
              <Link href={`/post/new/${pageId}`}>포스트 작성하기</Link>
            </Button>
          </div>
        )}
        {isOwner && (
          <div className="w-full">
            <Button asChild className="w-full">
              <Link href={`/mission/edit/${pageId}`}>미션 수정하기</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MissionInfo;
