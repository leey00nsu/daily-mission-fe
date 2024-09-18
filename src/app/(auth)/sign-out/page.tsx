'use client';

import { SignOut } from '@/entities/auth/api/auth-action';
import { Spinner } from '@/shared/ui/spinner';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Page() {
  const router = useRouter();

  const signOut = async () => {
    await SignOut();
    router.replace('/sign-in');
  };

  useLayoutEffect(() => {
    signOut();
  }, []);

  return (
    <div className="flex h-dvh w-dvw items-center justify-center">
      <Spinner />
    </div>
  );
}
