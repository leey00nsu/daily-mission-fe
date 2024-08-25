'use client';

import { useUserStore } from '@/entities/user/model/store';
import { useGetProfile } from '@/features/user/api/use-user-service';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLayoutEffect } from 'react';

const AuthCallback = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: user } = useGetProfile();
  const setUser = useUserStore((state) => state.setUser);

  const redirect = searchParams.get('redirect');

  useLayoutEffect(() => {
    if (user) {
      setUser(user);
      router.replace(redirect || '/');
    }
  }, [user]);

  return null;
};

export default AuthCallback;
