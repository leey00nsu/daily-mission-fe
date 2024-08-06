import {
  createMission,
  getMission,
  joinMission,
} from '@/entities/mission/api/mission-service';
import {
  CreateMissionRequest,
  CreateMissionResponse,
  GetMissionRequest,
  GetMissionResponse,
  JoinMissionRequest,
  JoinMissionResponse,
} from '@/entities/mission/model/type';

import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';

export const queryKeys = {
  mission: (id: number) => ['mission', id],
};

export const queryOptions = {
  mission: (id: number) => ({
    queryKey: queryKeys.mission(id),
    queryFn: () => getMission(id),
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
  props?: UseQueryOptions<GetMissionRequest, unknown, GetMissionResponse>,
) => {
  return useQuery({
    queryKey: queryKeys.mission(id),
    queryFn: () => getMission(id),
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
