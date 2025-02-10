'use client';

import { usePathname } from 'next/navigation';
import {
  overlay,
  OverlayProvider as PrimitiveOverlayProvider,
} from 'overlay-kit';
import { useEffect } from 'react';

const OverlayProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    overlay.closeAll();
  }, [pathname]);
  return <PrimitiveOverlayProvider>{children}</PrimitiveOverlayProvider>;
};

export default OverlayProvider;
