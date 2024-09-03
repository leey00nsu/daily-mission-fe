'use client';

import { useUserStore } from '@/entities/user/model/store';
import { Spinner } from '@/shared/ui/spinner';
import { usePathname, useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

const ProtectedPageProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useUserStore((state) => state.user);

  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (!user.nickname || !user.email) {
      router.replace('/sign-in/callback?redirect=' + pathname);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-dvh w-dvw items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedPageProvider;
