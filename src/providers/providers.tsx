import NotificationProvider from '@/providers/notification-provider';
import OverlayProvider from '@/providers/overlay-provider';
import QueryProvider from '@/providers/query-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <NotificationProvider>
        <OverlayProvider>{children}</OverlayProvider>
      </NotificationProvider>
    </QueryProvider>
  );
};

export default Providers;
