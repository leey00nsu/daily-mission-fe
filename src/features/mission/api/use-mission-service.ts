import {
  createMission,
  deleteMission,
  getMission,
  getPaginationMissions,
  getParticipatedMissions,
  joinMission,
  updateMission,
} from '@/entities/mission/api/mission-service';
import {
  CreateMissionRequest,
  CreateMissionResponse,
  DeleteMissionRequest,
  GetMissionRequest,
  GetMissionResponse,
  GetMissionsResponse,
  GetPaginationMissionsRequest,
  GetPaginationMissionsResponse,
  JoinMissionRequest,
  MissionSort,
  MissionType,
  UpdateMissionRequest,
  UpdateMissionResponse,
} from '@/entities/mission/model/type';

import {
  UseMutationOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export const queryKeys = {
  all: ['mission'],
  mission: (id: number) => ['mission', id],
  participatedMissions: ['mission', 'participatedMissions'],
  paginationMissions: (
    type: MissionType,
    page: number,
    size: number,
    sort: MissionSort,
  ) => ['mission', 'paginationMissions', type, page, size, sort],
};

export const queryOptions = {
  mission: (id: number) => ({
    queryKey: queryKeys.mission(id),
    queryFn: () => getMission({ id }),
  }),
  participatedMissions: () => ({
    queryKey: queryKeys.participatedMissions,
    queryFn: getParticipatedMissions,
  }),
  paginationMissions: (
    type: MissionType,
    page: number,
    size: number,
    sort: MissionSort,
  ) => ({
    initialPageParam: page,
    queryKey: queryKeys.paginationMissions(type, page, size, sort),
    queryFn: ({ pageParam = page }) =>
      getPaginationMissions({
        type,
        page: pageParam,
        size,
        sort,
      }),
    getNextPageParam: (
      lastPage: GetPaginationMissionsResponse,
      allPages: GetPaginationMissionsResponse[],
      pageParam: number,
    ) => {
      return lastPage.meta.isNext ? (pageParam as number) + 1 : undefined;
    },
  }),
};

export const useCreateMission = (
  props?: UseMutationOptions<
    CreateMissionResponse,
    unknown,
    CreateMissionRequest,
    unknown
  >,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createMission,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all,
      });
    },
    ...props,
  });
};

export const useUpdateMission = (
  props?: UseMutationOptions<
    UpdateMissionResponse,
    unknown,
    UpdateMissionRequest,
    unknown
  >,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMission,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all,
      });
    },
    ...props,
  });
};

export const useGetMission = (
  { id }: GetMissionRequest,
  props?: UseQueryOptions<unknown, unknown, GetMissionResponse>,
) => {
  return useQuery({
    ...queryOptions.mission(id),
    ...props,
  });
};

export const useGetMissions = ({
  type,
  page,
  size,
  sort,
}: GetPaginationMissionsRequest) => {
  return useInfiniteQuery({
    ...queryOptions.paginationMissions(type, page, size, sort),
  });
};

export const useJoinMission = (
  props?: UseMutationOptions<void, Error, JoinMissionRequest, unknown>,
) => {
  return useMutation({
    mutationFn: joinMission,
    ...props,
  });
};

export const useDeleteMission = (
  props?: UseMutationOptions<void, Error, DeleteMissionRequest, unknown>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMission,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all,
      });
    },
    ...props,
  });
};

export const useGetParticipatedMissions = (
  props?: UseQueryOptions<unknown, unknown, GetMissionsResponse>,
) => {
  return useQuery({
    ...queryOptions.participatedMissions(),

    ...props,
  });
};
