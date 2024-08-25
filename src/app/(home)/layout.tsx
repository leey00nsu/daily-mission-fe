import ProtectedPageProvider from '@/providers/protected-page-provider';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProtectedPageProvider>{children}</ProtectedPageProvider>;
}
