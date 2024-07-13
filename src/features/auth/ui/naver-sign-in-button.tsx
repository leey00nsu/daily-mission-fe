import { Button } from '@/shared/ui/button';
import NaverIcon from '@public/naver_icon.svg';
import Link from 'next/link';

const NaverSignInButton = () => {
  return (
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
  );
};

export default NaverSignInButton;
