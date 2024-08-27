'use client';

import { SignOut } from '@/entities/auth/api/auth-action';
import { useUserStore } from '@/entities/user/model/store';
import { useGetProfile } from '@/features/user/api/use-user-service';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLayoutEffect } from 'react';

const AuthCallback = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: user, isFetched } = useGetProfile();
  const setUser = useUserStore((state) => state.setUser);

  const redirect = searchParams.get('redirect');

  const signOut = async () => {
    await SignOut();
    router.replace('/sign-in');
  };

  useLayoutEffect(() => {
    if (isFetched) {
      if (user) {
        setUser(user);
        router.replace(redirect || '/');
      } else {
        signOut();
      }
    }
  }, [isFetched]);

  return null;
};

export default AuthCallback;
