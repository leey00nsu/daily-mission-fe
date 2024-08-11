'use client';

import { SignIn } from '@/entities/auth/api/auth-action';
import { useGetProfile } from '@/features/user/api/use-user-service';
import { useRouter } from 'next/navigation';

const AuthCallback = () => {
  const router = useRouter();
  const { data: user } = useGetProfile();

  if (user) {
    SignIn(user);

    router.push('/');
  }

  return null;
};

export default AuthCallback;
