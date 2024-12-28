import {
  createEventSource,
  getPaginationNotifications,
} from '@/entities/notification/api/notification-service';
import {
  GetPaginationNotificationsRequest,
  GetPaginationNotificationsResponse,
} from '@/entities/notification/model/type';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'sonner';

export const queryKeys = {
  paginationNotifications: (page: number, size: number) => [
    'mission',
    'paginationNotifications',
    page,
    size,
  ],
};

export const queryOptions = {
  paginationNotifications: (page: number, size: number) => ({
    initialPageParam: page,
    queryKey: queryKeys.paginationNotifications(page, size),
    queryFn: ({ pageParam = page }) =>
      getPaginationNotifications({
        page: pageParam,
        size,
      }),
    getNextPageParam: (
      lastPage: GetPaginationNotificationsResponse,
      allPages: GetPaginationNotificationsResponse[],
      pageParam: number,
    ) => {
      return lastPage.meta.isNext ? (pageParam as number) + 1 : undefined;
    },
  }),
};

export const useNotification = () => {
  const queryClient = useQueryClient();
  const eventSourceInstance = createEventSource();

  useEffect(() => {
    eventSourceInstance?.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);

      toast(data.content, {
        description: data.content,
        position: 'bottom-center',
        action: {
          label: '확인',
          onClick: () => {},
        },
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.paginationNotifications(0, 5),
      });
    });

    return () => {
      eventSourceInstance?.close();
    };
  }, []);
};

export const useGetUserNotifications = ({
  page,
  size,
}: GetPaginationNotificationsRequest) => {
  return useInfiniteQuery({
    ...queryOptions.paginationNotifications(page, size),
  });
};
