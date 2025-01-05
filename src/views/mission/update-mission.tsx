import PageContainer from '@/shared/ui/page-container';
import UpdateMissionForm from '@/widgets/mission/ui/update-mission-form';

const UpdateMission = () => {
  return (
    <PageContainer
      headerOption={{
        title: '미션 수정',
        leftIcon: 'leftArrow',
      }}
      navigationOption={{
        visible: false,
      }}
    >
      <UpdateMissionForm />
    </PageContainer>
  );
};

export default UpdateMission;
