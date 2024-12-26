'use client';

import { useGetUserNotifications } from '@/features/notification/api/use-notification-service';
import NotificationCard from '@/features/notification/ui/notification-card';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const NotificationList = () => {
  // const notifications = [
  //   {
  //     title: '새로운 메시지가 도착했습니다',
  //     body: '당신의 메시지함에 새로운 메시지가 있습니다.',
  //     date: '2024-12-15',
  //     isRead: true,
  //   },
  //   {
  //     title: '업데이트가 있습니다',
  //     body: '앱이 최신 버전으로 업데이트되었습니다.',
  //     date: '2024-12-16',
  //     isRead: true,
  //   },
  //   {
  //     title: '친구 요청',
  //     body: '새로운 친구 요청이 도착했습니다.',
  //     date: '2024-12-17',
  //   },
  //   {
  //     title: '이벤트 알림',
  //     body: '곧 시작될 이벤트에 대한 알림입니다.',
  //     date: '2024-12-18',
  //   },
  //   {
  //     title: '시스템 점검',
  //     body: '시스템 점검이 예정되어 있습니다.',
  //     date: '2024-12-19',
  //   },
  //   {
  //     title: '보안 경고',
  //     body: '보안 경고가 발생했습니다.',
  //     date: '2024-12-20',
  //   },
  //   {
  //     title: '새로운 기능',
  //     body: '새로운 기능이 추가되었습니다.',
  //     date: '2024-12-21',
  //   },
  //   {
  //     title: '할인 이벤트',
  //     body: '할인 이벤트가 시작되었습니다.',
  //     date: '2024-12-22',
  //   },
  //   {
  //     title: '서비스 장애',
  //     body: '일시적인 서비스 장애가 발생했습니다.',
  //     date: '2024-12-23',
  //   },
  //   {
  //     title: '계정 활동',
  //     body: '계정 활동이 감지되었습니다.',
  //     date: '2024-12-24',
  //   },
  //   {
  //     title: '결제 알림',
  //     body: '결제가 완료되었습니다.',
  //     date: '2024-12-25',
  //   },
  // ];

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const {
    data: notificationPages,
    isFetching: isNotificationsFetching,
    fetchNextPage,
    hasNextPage,
  } = useGetUserNotifications({
    page: 0,
    size: 5,
  });

  useEffect(() => {
    if (inView && !isNotificationsFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isNotificationsFetching, hasNextPage]);

  return (
    <section className="flex flex-col gap-2">
      {notificationPages?.pages?.map((page) =>
        page.data?.map((notification) => (
          <NotificationCard key={notification.id} {...notification} />
        )),
      )}

      <div ref={ref} className="h-1" />
    </section>
  );
};

export default NotificationList;
