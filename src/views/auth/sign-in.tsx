import PageContainer from '@/shared/ui/page-container';
import Landing from '@/widgets/auth/ui/landing';

export default function SignIn() {
  return (
    <PageContainer
      navigationOption={{
        visible: false,
      }}
      className="justify-center"
    >
      <Landing />
    </PageContainer>
  );
}
