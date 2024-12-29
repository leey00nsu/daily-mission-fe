import {
  GetPaginationNotificationsRequest,
  GetPaginationNotificationsResponse,
  Notification,
  ReadNotificationRequest,
} from '@/entities/notification/model/type';
import { GlobalResponse } from '@/shared/model/type';

export const createEventSource = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return new EventSource(
    `${process.env.NEXT_PUBLIC_API_HOST}/notify/subscribe`,
    {
      withCredentials: true,
    },
  );
};

export const readNotification = async (request: ReadNotificationRequest) => {
  const { id } = request;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/notify/${id}`,
    {
      method: 'PUT',
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to read notification');
  }

  const data: GlobalResponse<boolean> = await response.json();

  return data.data;
};

export const getPaginationNotifications = async (
  request: GetPaginationNotificationsRequest,
): Promise<GetPaginationNotificationsResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/notify/user?page=${request.page}&size=${request.size}`,
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
