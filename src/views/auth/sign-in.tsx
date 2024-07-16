import Logo from '@/shared/ui/logo';
import PageContainer from '@/shared/ui/page-container';
import SocialLoginGroup from '@/widgets/auth/ui/social-login-group';

export default function SignIn() {
  return (
    <PageContainer className="justify-center">
      <Logo size="large" className="mb-6" />
      <SocialLoginGroup />
    </PageContainer>
  );
}
