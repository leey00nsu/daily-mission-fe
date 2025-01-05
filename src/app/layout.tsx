import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Providers from '@/providers/providers';
import './globals.css';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Daily Mission',
  description: 'Daily Mission',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={pretendard.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
