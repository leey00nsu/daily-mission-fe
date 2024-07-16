import PageContainer from '@/shared/ui/page-container';
import NewMissionForm from '@/widgets/mission/ui/new-mission-form';

const NewMission = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        title: '미션 생성',
        leftIcon: 'leftArrow',
      }}
    >
      <NewMissionForm />
    </PageContainer>
  );
};

export default NewMission;
