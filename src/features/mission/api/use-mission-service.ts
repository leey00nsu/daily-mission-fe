import {
  createMission,
  deleteMission,
  getMission,
  getMissions,
  joinMission,
} from '@/entities/mission/api/mission-service';
import {
  CreateMissionRequest,
  CreateMissionResponse,
  DeleteMissionRequest,
  GetMissionRequest,
  GetMissionResponse,
  GetMissionsRequest,
  JoinMissionRequest,
  JoinMissionResponse,
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
  missions: (
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
  missions: (
    type: MissionType,
    page: number,
    size: number,
    sort: MissionSort,
  ) => ({
    queryKey: queryKeys.missions(type, page, size, sort),
    queryFn: () => getMissions({ type, page, size, sort }),
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
}: GetMissionsRequest) => {
  return useInfiniteQuery({
    initialPageParam: page,
    queryKey: queryKeys.missions(type, page, size, sort),
    queryFn: ({ pageParam }) =>
      queryOptions.missions(type, pageParam as number, size, sort).queryFn(),
    getNextPageParam: (lastPage, allPages, pageParam) => {
      return lastPage.meta.isNext ? (pageParam as number) + 1 : undefined;
    },
  });
};

export const useJoinMission = (
  props?: UseMutationOptions<
    JoinMissionResponse,
    unknown,
    JoinMissionRequest,
    unknown
  >,
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
