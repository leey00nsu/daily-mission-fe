'use client';

import { useUserStore } from '@/entities/user/model/store';
import { usePathname, useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

const ProtectedPageProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useUserStore((state) => state.user);

  useLayoutEffect(() => {
    if (!user.name || !user.email) {
      router.replace('/sign-in/callback?redirect=' + pathname);
    }
  }, [user]);

  return <>{children}</>;
};

export default ProtectedPageProvider;
