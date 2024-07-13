import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import GoogleIcon from '@public/google_icon.svg';
import NaverIcon from '@public/naver_icon.svg';
import Link from 'next/link';

export default function SignIn() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="flex max-w-2xl grow flex-col justify-center p-4">
        <Logo />
        <section className="flex flex-col gap-4">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/sign-in/callback?code=google-authorization-code">
              <GoogleIcon />
              구글로 시작하기
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="group gap-2 bg-[#03C75A] text-white hover:bg-[#03C75A]/90 hover:text-white"
          >
            <Link href="/sign-in/callback?code=naver-authorization-code">
              <NaverIcon />
              네이버로 시작하기
            </Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
