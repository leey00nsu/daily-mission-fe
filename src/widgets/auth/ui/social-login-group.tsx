import NaverSignInButton from '@/features/auth/ui/naver-sign-in-button';

const SocialLoginGroup = () => {
  return (
    <section className="flex w-full max-w-96 flex-col gap-4">
      {/* <GoogleSignInButton /> */}
      <NaverSignInButton />
    </section>
  );
};

export default SocialLoginGroup;
