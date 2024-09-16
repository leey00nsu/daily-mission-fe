import {
  createMission,
  deleteMission,
  getMission,
  getPaginationMissions,
  getParticipatedMissions,
  joinMission,
} from '@/entities/mission/api/mission-service';
import {
  CreateMissionRequest,
  CreateMissionResponse,
  DeleteMissionRequest,
  GetMissionRequest,
  GetMissionResponse,
  GetMissionsResponse,
  GetPaginationMissionsRequest,
  JoinMissionRequest,
  MissionSort,
  MissionType,
} from '@/entities/mission/model/type';

import {
  UseMutationOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from '@tanstack/react-query';

export const queryKeys = {
  mission: (id: number) => ['mission', id],
  participatedMissions: ['participatedMissions'],
  paginationMissions: (
    type: MissionType,
    page: number,
    size: number,
    sort: MissionSort,
  ) => ['missions', type, page, size, sort],
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
    queryKey: queryKeys.paginationMissions(type, page, size, sort),
    queryFn: () => getPaginationMissions({ type, page, size, sort }),
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
  return useMutation({
    mutationFn: createMission,
    ...props,
  });
};

export const useGetMission = (
  { id }: GetMissionRequest,
  props?: UseQueryOptions<unknown, unknown, GetMissionResponse>,
) => {
  return useQuery({
    queryKey: queryKeys.mission(id),
    queryFn: queryOptions.mission(id).queryFn,
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
    initialPageParam: page,
    queryKey: queryKeys.paginationMissions(type, page, size, sort),
    queryFn: ({ pageParam }) =>
      queryOptions
        .paginationMissions(type, pageParam as number, size, sort)
        .queryFn(),
    getNextPageParam: (lastPage, allPages, pageParam) => {
      return lastPage.meta.isNext ? (pageParam as number) + 1 : undefined;
    },
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
  props?: UseMutationOptions<void, unknown, DeleteMissionRequest, unknown>,
) => {
  return useMutation({
    mutationFn: deleteMission,
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
