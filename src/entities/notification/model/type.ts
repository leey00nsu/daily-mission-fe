import { Page } from '@/shared/model/type';

export interface Notification {
  id?: string;
  content: string;
  notificationType: 'POST' | 'PARTICIPATE';
  createdAt?: string;
  read?: boolean;
}

export interface ReadNotificationRequest {
  id: string;
}

export interface GetPaginationNotificationsRequest {
  page: number;
  size: number;
}
export type GetPaginationNotificationsResponse = Page<Notification>;
