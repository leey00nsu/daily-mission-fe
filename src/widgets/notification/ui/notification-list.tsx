'use client';

import { useGetUserNotifications } from '@/features/notification/api/use-notification-service';
import NotificationCard from '@/features/notification/ui/notification-card';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const NotificationList = () => {
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

  const notificationCount = notificationPages?.pages?.reduce(
    (acc, page) => acc + page.data.length,
    0,
  );

  return (
    <section className="flex flex-col gap-2">
      {notificationPages?.pages?.map((page) =>
        page.data?.map((notification) => (
          <NotificationCard key={notification.id} {...notification} />
        )),
      )}
      {notificationCount === 0 && (
        <div className="flex h-24 items-center justify-center">
          알림이 없습니다.
        </div>
      )}

      <div ref={ref} className="h-1" />
    </section>
  );
};

export default NotificationList;
