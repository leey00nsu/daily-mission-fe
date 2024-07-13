import Logo from '@/shared/ui/logo';
import SocialLoginGroup from '@/widgets/auth/ui/social-login-group';

export default function SignIn() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="flex max-w-2xl grow flex-col justify-center p-4">
        <Logo />
        <SocialLoginGroup />
      </div>
    </main>
  );
}
