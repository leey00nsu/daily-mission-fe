'use client';

import { Button } from '@/shared/ui/button';
import GoogleIcon from '@public/google_icon.svg';
import { useRouter } from 'next/navigation';

const GoogleSignInButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() =>
        router.replace(`${process.env.NEXT_PUBLIC_AUTH_HOST}/google`)
      }
      variant="outline"
      className="gap-2"
    >
      <GoogleIcon />
      구글로 시작하기
    </Button>
  );
};

export default GoogleSignInButton;
