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
  GetMissionsResponse,
  JoinMissionRequest,
  JoinMissionResponse,
  MissionSort,
  MissionType,
} from '@/entities/mission/model/type';

import {
  UseMutationOptions,
  UseQueryOptions,
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

export const useGetMissions = (
  { type, page, size, sort }: GetMissionsRequest,
  props?: UseQueryOptions<unknown, unknown, GetMissionsResponse>,
) => {
  return useQuery({
    queryKey: queryKeys.missions(type, page, size, sort),
    queryFn: queryOptions.missions(type, page, size, sort).queryFn,
    ...props,
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
