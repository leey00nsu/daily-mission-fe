'use client';

import { useNotification } from '@/features/notification/api/use-notification-service';

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  useNotification();

  return <>{children}</>;
};

export default NotificationProvider;
