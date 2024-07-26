'use client';

import { useSignUp } from '@/features/auth/api/use-auth-service';
import { Button } from '@/shared/ui/button';
import NaverIcon from '@public/naver_icon.svg';
import { useRouter } from 'next/navigation';

const NaverSignInButton = () => {
  const router = useRouter();

  const { mutate: signUp } = useSignUp({
    onSuccess: () => {
      router.replace('/');
    },
  });

  return (
    <Button
      onClick={() => signUp()}
      variant="outline"
      className="group gap-2 bg-[#03C75A] text-white hover:bg-[#03C75A]/90 hover:text-white"
    >
      <NaverIcon />
      네이버로 시작하기
    </Button>
  );
};

export default NaverSignInButton;
