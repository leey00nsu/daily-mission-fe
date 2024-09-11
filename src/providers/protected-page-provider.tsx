'use client';

import { useUserStore } from '@/entities/user/model/store';
import { Spinner } from '@/shared/ui/spinner';
import { usePathname, useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

interface ProtectedPageProviderProps {
  children: React.ReactNode;
  needAuthorized?: boolean;
}

const ProtectedPageProvider = ({
  children,
  needAuthorized = true,
}: ProtectedPageProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useUserStore((state) => state.user);

  const [isLoading, setIsLoading] = useState(true);

  const isAuthorized = Boolean(user.email);

  useLayoutEffect(() => {
    if (isAuthorized !== needAuthorized) {
      if (needAuthorized) {
        router.replace(
          '/sign-in/callback?redirect=' + encodeURIComponent(pathname),
        );
      } else {
        router.replace('/');
      }
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
