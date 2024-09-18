import PageContainer from '@/shared/ui/page-container';
import CreatePostForm from '@/widgets/post/ui/create-post-form';

const CreatePost = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        title: '포스트 작성',
        leftIcon: 'leftArrow',
      }}
    >
      <CreatePostForm />
    </PageContainer>
  );
};

export default CreatePost;
