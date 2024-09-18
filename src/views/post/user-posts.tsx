import PageContainer from '@/shared/ui/page-container';
import UserPostList from '@/widgets/post/ui/user-post-list';

const UserPosts = () => {
  return (
    <PageContainer
      headerShown
      headerOptions={{
        leftIcon: 'leftArrow',
        title: '내 포스트',
      }}
    >
      <UserPostList />
    </PageContainer>
  );
};

export default UserPosts;
