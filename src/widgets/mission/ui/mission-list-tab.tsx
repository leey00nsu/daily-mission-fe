import { ALL_MISSIONS } from '@/entities/mission/constants/mock-mission';
import MissionList from '@/features/mission/ui/mission-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';

const MissionListTab = () => {
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
        <MissionList missions={ALL_MISSIONS} />
      </TabsContent>
      <TabsContent value="hot">
        <MissionList missions={ALL_MISSIONS} />
      </TabsContent>
      <TabsContent value="new">
        <MissionList missions={ALL_MISSIONS} />
      </TabsContent>
    </Tabs>
  );
};

export default MissionListTab;
