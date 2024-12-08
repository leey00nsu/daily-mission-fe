import { createEventSource } from '@/entities/notification/api/notification-service';
import { useEffect, useState } from 'react';

export const useNotification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const eventSource = createEventSource();

    eventSource.addEventListener('notify', (event) => {
      setNotifications((prev) => [...prev, event.data]);
    });

    return () => {
      eventSource.close();
    };
  }, []);

  return notifications;
};
