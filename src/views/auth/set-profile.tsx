import Header from '@/widgets/header/ui/header';
import ProfileForm from '@/widgets/user/ui/profile-form';

const SetProfile = () => {
  return (
    <main className="flex min-h-screen justify-center">
      <Header leftIcon="leftArrow" title="프로필" />
      <div className="relative mt-16 flex max-w-2xl grow flex-col p-4">
        <ProfileForm />
      </div>
    </main>
  );
};

export default SetProfile;
