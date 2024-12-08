import PageContainer from '@/shared/ui/page-container';
import UpdatePostForm from '@/widgets/post/ui/update-post-form';

const EditPost = () => {
  return (
    <PageContainer
      headerOption={{
        title: '포스트 수정',
        leftIcon: 'leftArrow',
      }}
      navigationOption={{
        visible: false,
      }}
    >
      <UpdatePostForm />
    </PageContainer>
  );
};

export default EditPost;
