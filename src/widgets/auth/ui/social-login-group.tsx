import NaverSignInButton from '@/features/auth/ui/naver-sign-in-button';

const SocialLoginGroup = () => {
  return (
    <section className="flex w-full flex-col gap-4">
      {/* <GoogleSignInButton /> */}
      <NaverSignInButton />
    </section>
  );
};

export default SocialLoginGroup;
