import Header from '@/widgets/header/ui/header';
import ProfileForm from '@/widgets/user/ui/profile-form';

const SetProfile = () => {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="relative flex max-w-2xl grow flex-col p-4">
        <Header leftIcon="leftArrow" title="프로필" />
        <ProfileForm />
      </div>
    </main>
  );
};

export default SetProfile;
