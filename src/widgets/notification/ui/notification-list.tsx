'use client';

import { useNotification } from '@/features/notification/api/use-notification-service';
import NotificationCard from '@/features/notification/ui/notification-card';

const NotificationList = () => {
  const notifications = useNotification();

  return (
    <section className="flex flex-col gap-2">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.title}
          title={notification.title}
          body={notification.body}
        />
      ))}
    </section>
  );
};

export default NotificationList;
