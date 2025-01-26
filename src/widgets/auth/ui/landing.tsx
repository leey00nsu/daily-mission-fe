import Logo from '@/shared/ui/logo';
import SocialLoginGroup from '@/widgets/auth/ui/social-login-group';

const Landing = () => {
  return (
    <section className="flex h-full w-full grow flex-col items-center justify-evenly">
      <div className="flex flex-col items-center gap-2">
        <Logo size="xlarge" />
        <p className="text-center text-sm text-gray-800">
          미션을 만들고, 함께 목표를 향해 나아가세요.
        </p>
      </div>

      <div className="w-full">
        <SocialLoginGroup />
      </div>
    </section>
  );
};

export default Landing;
