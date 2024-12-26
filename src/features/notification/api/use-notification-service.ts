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

let eventSourceInstance: EventSource | null = null;

export const useNotification = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!eventSourceInstance) {
      eventSourceInstance = createEventSource();
    }

    eventSourceInstance.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);

      console.log(data);

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
      if (eventSourceInstance) {
        eventSourceInstance.close();
        eventSourceInstance = null;
      }
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
