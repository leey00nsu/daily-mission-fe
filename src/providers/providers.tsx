import QueryProvider from '@/providers/query-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Providers;
