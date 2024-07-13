import { Button } from '@/shared/ui/button';
import GoogleIcon from '@public/google_icon.svg';
import Link from 'next/link';

const GoogleSignInButton = () => {
  return (
    <Button asChild variant="outline" className="gap-2">
      <Link href="/sign-in/callback?code=google-authorization-code">
        <GoogleIcon />
        구글로 시작하기
      </Link>
    </Button>
  );
};

export default GoogleSignInButton;
