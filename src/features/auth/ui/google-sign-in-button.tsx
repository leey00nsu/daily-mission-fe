'use client';

import { useSignUp } from '@/features/auth/api/use-auth-service';
import { Button } from '@/shared/ui/button';
import GoogleIcon from '@public/google_icon.svg';
import { useRouter } from 'next/navigation';

const GoogleSignInButton = () => {
  const router = useRouter();

  const { mutate: signUp } = useSignUp({
    onSuccess: () => {
      router.replace('/');
    },
  });

  return (
    <Button onClick={() => signUp()} variant="outline" className="gap-2">
      <GoogleIcon />
      구글로 시작하기
    </Button>
  );
};

export default GoogleSignInButton;
