import PageContainer from '@/shared/ui/page-container';
import UserPostList from '@/widgets/post/ui/user-post-list';

const UserPosts = () => {
  return (
    <PageContainer
      headerOption={{
        leftIcon: 'leftArrow',
        title: '내 포스트',
      }}
      navigationOption={{
        visible: false,
      }}
      showScrollButton
    >
      <UserPostList />
    </PageContainer>
  );
};

export default UserPosts;
