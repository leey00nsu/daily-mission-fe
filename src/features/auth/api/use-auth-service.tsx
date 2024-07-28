import { signUp } from '@/entities/auth/api/auth-service';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const useSignUp = (
  props?: UseMutationOptions<object, unknown, void, unknown>,
) => {
  return useMutation({
    mutationFn: () => signUp(),
    ...props,
  });
};
