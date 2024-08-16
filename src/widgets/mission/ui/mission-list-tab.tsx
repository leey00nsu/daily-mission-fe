'use client';

import { useGetMissions } from '@/features/mission/api/use-mission-service';
import MissionList from '@/features/mission/ui/mission-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';

const MissionListTab = () => {
  const { data: missions } = useGetMissions({
    type: 'all',
    page: 0,
    size: 10,
    sort: 'asc',
  });

  return (
    <Tabs defaultValue="all" className="relative h-full w-full">
      <div className="sticky top-0 z-10 flex h-14 items-center justify-center bg-background">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">전체</TabsTrigger>
          <TabsTrigger value="hot">인기 미션</TabsTrigger>
          <TabsTrigger value="new">새로운 미션</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="all">
        <MissionList missions={missions} />
      </TabsContent>
      <TabsContent value="hot">
        <MissionList missions={missions} />
      </TabsContent>
      <TabsContent value="new">
        <MissionList missions={missions} />
      </TabsContent>
    </Tabs>
  );
};

export default MissionListTab;
