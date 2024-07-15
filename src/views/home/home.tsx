import MissionListTab from '@/widgets/mission/ui/mission-list-tab';
import Navigation from '@/widgets/navigation/ui/navigation';

const Home = () => {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="relative mb-16 flex h-full max-w-2xl grow flex-col p-4">
        <MissionListTab />
      </div>
      <Navigation />
    </main>
  );
};

export default Home;
