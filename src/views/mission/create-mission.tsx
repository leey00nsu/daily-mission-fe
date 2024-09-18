import PageContainer from '@/shared/ui/page-container';
import CreateMissionForm from '@/widgets/mission/ui/create-mission-form';

const CreateMission = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        title: '미션 생성',
        leftIcon: 'leftArrow',
      }}
    >
      <CreateMissionForm />
    </PageContainer>
  );
};

export default CreateMission;
