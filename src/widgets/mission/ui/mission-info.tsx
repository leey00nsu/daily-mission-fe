'use client';

import { Mission } from '@/entities/mission/model/type';
import { useUserStore } from '@/entities/user/model/store';
import { useGetMission } from '@/features/mission/api/use-mission-service';
import WeekCheckboxGroup from '@/features/mission/ui/week-checkbox-group';
import { useGetMissionPosts } from '@/features/post/api/use-post-service';
import PostList from '@/features/post/ui/post-list';
import AvatarGroup from '@/shared/ui/avatar-group';
import { Button } from '@/shared/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { ImageViewer } from '@/shared/ui/image-viewer';
import { Input } from '@/shared/ui/input';
import MissionInfoSkeleton from '@/widgets/mission/ui/mission-info-skeleton';
import { differenceInDays } from 'date-fns';
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

  // start mock data
  // const {
  //   nickname,
  //   imageUrl,
  //   title,
  //   content,
  //   hint,
  //   startDate,
  //   endDate,
  //   participantDto,
  //   missionRuleResponseDto,
  // } = MOCK_ALL_MISSON_LIST_1[0];

  // const user = MOCK_USER;

  // const participantAvatars = participantDto.map((participant) => ({
  //   imageUrl: participant.imageUrl,
  //   nickname: participant.nickname,
  // }));
  // const participantCount = participantDto.length;

  // const isOwner = true;
  // const isParticipant = true;

  // const posts = MOCK_POSTS;

  // end mock data

  // 플로팅 버튼 높이 계산

  const defaultButtonCount = 1;
  const floatingButtonConditions = [isOwner, isParticipant];
  const floatingButtonCount = Math.max(
    defaultButtonCount,
    floatingButtonConditions.reduce(
      (acc, condition) => acc + (condition ? 1 : 0),
      0,
    ),
  );

  const ruleCount = Object.values(missionRuleResponseDto.week).reduce(
    (acc, rule) => acc + (rule ? 1 : 0),
    0,
  );
  const leftDays = Math.min(0, differenceInDays(new Date(), endDate));

  const getParticipantText = (name: string, count: number) => {
    if (count <= 1) return `${name} 님이 미션을 시작했습니다.`;

    return `${name} 님 외 ${count - 1} 명이 참여하고 있습니다.`;
  };

  const participantText = getParticipantText(nickname, participantCount);
  const postsCount = posts?.length ?? 0;

  return (
    <section
      style={{ marginBottom: floatingButtonCount * 56 }}
      className="flex w-full flex-col items-center justify-center gap-4"
    >
      <ImageViewer
        containerClassName="relative h-64 w-full overflow-hidden rounded-2xl"
        images={[imageUrl]}
      />

      <div className="w-full">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-lg">{content}</p>
      </div>

      <div className="w-full">
        <Card>
          <CardHeader>
            <CardDescription>참여코드 힌트</CardDescription>
            <CardTitle>{hint ?? '힌트가 없습니다.'}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">인증 빈도</h3>
          <span className="text-sm text-muted-foreground">
            주 {ruleCount}회
          </span>
        </div>

        <WeekCheckboxGroup week={missionRuleResponseDto.week} readOnly />
      </div>

      <div className="w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">미션 기간</h3>
          <span className="text-sm text-red-600">D-{leftDays}</span>
        </div>
        <div className="flex w-full items-center gap-2">
          <Input readOnly type="date" value={startDate} />
          <LuChevronRight className="h-8 w-8" />
          <Input readOnly type="date" value={endDate} />
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">참여자</h3>
          <span className="text-sm text-muted-foreground">
            {participantCount}명
          </span>
        </div>
        <div className="flex items-center gap-2">
          <AvatarGroup avatars={participantAvatars} />
          <p>{participantText}</p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">인증 포스트</h3>
          <span className="text-sm text-muted-foreground">{postsCount}개</span>
        </div>
        <PostList posts={posts} username={user.nickname} />
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
