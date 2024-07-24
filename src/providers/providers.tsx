import OverlayProvider from '@/providers/overlay-provider';
import QueryProvider from '@/providers/query-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </QueryProvider>
  );
};

export default Providers;
