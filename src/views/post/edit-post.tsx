import PageContainer from '@/shared/ui/page-container';
import UpdatePostForm from '@/widgets/post/ui/update-post-form';

const EditPost = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        title: '포스트 수정',
        leftIcon: 'leftArrow',
      }}
    >
      <UpdatePostForm />
    </PageContainer>
  );
};

export default EditPost;
