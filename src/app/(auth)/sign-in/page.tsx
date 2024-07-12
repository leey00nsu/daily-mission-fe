import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import GoogleIcon from '@public/google_icon.svg';
import NaverIcon from '@public/naver_icon.svg';

export default function SignIn() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="flex max-w-2xl grow flex-col justify-center p-4">
        <Logo />
        <section className="flex flex-col gap-4">
          <Button variant="outline" className="gap-2">
            <GoogleIcon />
            구글로 시작하기
          </Button>
          <Button
            variant="outline"
            className="group gap-2 bg-[#03C75A] text-white hover:bg-[#03C75A]/90 hover:text-white"
          >
            <NaverIcon />
            네이버로 시작하기
          </Button>
        </section>
      </div>
    </main>
  );
}
