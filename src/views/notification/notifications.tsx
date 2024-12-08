import PageContainer from '@/shared/ui/page-container';
import NotificationList from '@/widgets/notification/ui/notification-list';

const Nofitications = () => {
  return (
    <PageContainer
      headerOption={{
        title: '알림',
        leftIcon: 'leftArrow',
      }}
      showScrollButton
    >
      <NotificationList />
    </PageContainer>
  );
};

export default Nofitications;
