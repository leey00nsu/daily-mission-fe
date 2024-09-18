import PageContainer from '@/shared/ui/page-container';
import UpdateMissionForm from '@/widgets/mission/ui/update-mission-form';

const UpdateMission = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        title: '미션 수정',
        leftIcon: 'leftArrow',
      }}
    >
      <UpdateMissionForm />
    </PageContainer>
  );
};

export default UpdateMission;
