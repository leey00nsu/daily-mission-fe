import GoogleSignInButton from '@/features/auth/ui/google-sign-in-button';
import NaverSignInButton from '@/features/auth/ui/naver-sign-in-button';

const SocialLoginGroup = () => {
  return (
    <section className="flex flex-col gap-4">
      <GoogleSignInButton />
      <NaverSignInButton />
    </section>
  );
};

export default SocialLoginGroup;
