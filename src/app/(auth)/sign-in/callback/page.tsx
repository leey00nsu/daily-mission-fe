import AuthCallback from '@/features/auth/ui/auth-callback';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <AuthCallback />;
    </Suspense>
  );
}
