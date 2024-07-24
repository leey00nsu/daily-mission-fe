import MissionDetail from '@/views/mission/mission-detail';

export default function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const pageId = Number(params.id);

  return <MissionDetail pageId={pageId} />;
}
