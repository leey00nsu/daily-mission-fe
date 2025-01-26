import MockSignInButton from '@/features/auth/ui/mock-sign-in-button';
import NaverSignInButton from '@/features/auth/ui/naver-sign-in-button';

const SocialLoginGroup = () => {
  return (
    <section className="flex flex-col gap-4">
      {/* <GoogleSignInButton /> */}
      <NaverSignInButton />
      {process.env.NODE_ENV === 'development' && <MockSignInButton />}
    </section>
  );
};

export default SocialLoginGroup;
