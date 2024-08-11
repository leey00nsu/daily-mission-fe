'use client';

import { Button } from '@/shared/ui/button';
import NaverIcon from '@public/naver_icon.svg';
import { useRouter } from 'next/navigation';

const NaverSignInButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() =>
        router.replace(`${process.env.NEXT_PUBLIC_AUTH_HOST}/naver`)
      }
      variant="outline"
      className="group gap-2 bg-[#03C75A] text-white hover:bg-[#03C75A]/90 hover:text-white"
    >
      <NaverIcon />
      네이버로 시작하기
    </Button>
  );
};

export default NaverSignInButton;
