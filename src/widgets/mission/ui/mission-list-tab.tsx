import MissionList from '@/features/mission/ui/mission-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';

const MissionListTab = () => {
  const allMissions = [
    {
      id: '1',
      date: '2024-09-01',
      imageUrl: 'https://placehold.co/600?text=Mission1',
      title: '미션 1 제목',
      description: '미션1 설명',
    },
    {
      id: '2',
      date: '2024-09-02',
      imageUrl: 'https://placehold.co/600?text=Mission2',
      title: '미션 2 제목',
      description: '미션2 설명',
    },
    {
      id: '3',
      date: '2024-09-03',
      imageUrl: 'https://placehold.co/600?text=Mission3',
      title: '미션 3 제목',
      description: '미션3 설명',
    },
    {
      id: '4',
      date: '2024-09-04',
      imageUrl: 'https://placehold.co/600?text=Mission4',
      title: '미션 4 제목',
      description: '미션4 설명',
    },
  ];

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
        <MissionList missions={allMissions} />
      </TabsContent>
      <TabsContent value="hot">
        <MissionList missions={allMissions} />
      </TabsContent>
      <TabsContent value="new">
        <MissionList missions={allMissions} />
      </TabsContent>
    </Tabs>
  );
};

export default MissionListTab;
