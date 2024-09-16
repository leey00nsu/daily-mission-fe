import { getProfile, updateProfile } from '@/entities/user/api/user-service';
import {
  UpdateProfileRequest,
  UpdateProfileResponse,
} from '@/entities/user/model/type';

import {
  UseMutationOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';

export const queryKeys = {
  user: () => ['user'],
};

export const queryOptions = {
  user: () => ({
    queryKey: queryKeys.user(),
    queryFn: () => getProfile(),
    retry: 0,
  }),
};

export const useUpdateProfile = (
  props?: UseMutationOptions<
    UpdateProfileResponse,
    unknown,
    UpdateProfileRequest,
    unknown
  >,
) => {
  return useMutation({
    mutationFn: updateProfile,
    ...props,
  });
};

export const useGetProfile = () => {
  return useQuery({
    ...queryOptions.user(),
  });
};
