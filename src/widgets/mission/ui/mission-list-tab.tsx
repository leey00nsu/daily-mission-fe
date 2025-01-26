'use client';

import { MissionType } from '@/entities/mission/model/type';
import { useGetMissions } from '@/features/mission/api/use-mission-service';
import MissionList from '@/features/mission/ui/mission-list';
import MissionListSkeleton from '@/features/mission/ui/mission-list-skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const MissionListTab = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [tab, setTab] = useState<MissionType>('all');
  const {
    data: missionPages,
    isFetching: isMissionsFetching,
    fetchNextPage,
    hasNextPage,
  } = useGetMissions({
    type: tab,
    page: 0,
    size: 10,
    sort: 'asc',
  });

  useEffect(() => {
    if (inView && !isMissionsFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const handleTabChange = (value: string) => {
    setTab(value as MissionType);
    window.scrollTo(0, 0);
  };

  return (
    <Tabs
      onValueChange={handleTabChange}
      defaultValue="all"
      className="relative h-full w-full"
    >
      <div className="sticky top-0 z-10 flex h-14 items-center justify-center bg-background">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">전체</TabsTrigger>
          <TabsTrigger value="hot">인기 미션</TabsTrigger>
          <TabsTrigger value="new">새로운 미션</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="all">
        <MissionList missionPages={missionPages?.pages} />
      </TabsContent>
      <TabsContent value="hot">
        <MissionList missionPages={missionPages?.pages} />
      </TabsContent>
      <TabsContent value="new">
        <MissionList missionPages={missionPages?.pages} />
      </TabsContent>

      {isMissionsFetching && <MissionListSkeleton />}
      <div ref={ref} className="h-1" />
    </Tabs>
  );
};

export default MissionListTab;
