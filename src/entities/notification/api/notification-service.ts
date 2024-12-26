import {
  GetPaginationNotificationsRequest,
  GetPaginationNotificationsResponse,
  Notification,
  ReadNotificationRequest,
} from '@/entities/notification/model/type';
import { GlobalResponse } from '@/shared/model/type';

export const createEventSource = () => {
  return new EventSource(
    `${process.env.NEXT_PUBLIC_API_HOST2}/notify/subscribe`,
    {
      withCredentials: true,
    },
  );
};

export const readNotification = async (request: ReadNotificationRequest) => {
  const { id } = request;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST2}/notify/${id}`,
    {
      method: 'PATCH',
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to read notification');
  }
};

export const getPaginationNotifications = async (
  request: GetPaginationNotificationsRequest,
): Promise<GetPaginationNotificationsResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST2}/notify/user?page=${request.page}&size=${request.size}`,
    {
      credentials: 'include',
    },
  );

  const data: GlobalResponse<Notification[]> = await response.json();

  return {
    data: data.data,
    meta: {
      isNext: data.meta.isNext,
    },
  };
};
