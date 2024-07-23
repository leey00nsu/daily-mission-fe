'use client';

import { OverlayProvider as PrimitiveOverlayProvider } from 'overlay-kit';

const OverlayProvider = ({ children }: { children: React.ReactNode }) => {
  return <PrimitiveOverlayProvider>{children}</PrimitiveOverlayProvider>;
};

export default OverlayProvider;
