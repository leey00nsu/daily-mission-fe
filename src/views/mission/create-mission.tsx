import PageContainer from '@/shared/ui/page-container';
import CreateMissionForm from '@/widgets/mission/ui/create-mission-form';

const CreateMission = () => {
  return (
    <PageContainer
      headerOption={{
        title: '미션 작성',
        leftIcon: 'leftArrow',
      }}
      navigationOption={{
        visible: false,
      }}
    >
      <CreateMissionForm />
    </PageContainer>
  );
};

export default CreateMission;
