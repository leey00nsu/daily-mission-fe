'use client';

import cn from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { useRouter } from 'next/navigation';
import { LuArrowLeft } from 'react-icons/lu';

type HeaderIcon = 'leftArrow';

interface HeaderProps {
  leftIcon?: HeaderIcon;
  title: string;
  rightIcon?: HeaderIcon;
}

const Icon = (icon: HeaderIcon) => {
  const router = useRouter();

  switch (icon) {
    case 'leftArrow':
      return (
        <button
          type="button"
          aria-label="뒤로가기"
          onClick={() => router.back()}
        >
          <LuArrowLeft className="h-full w-full" />
        </button>
      );
    default:
      return null;
  }
};

const Header = ({ leftIcon, title, rightIcon }: HeaderProps) => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between bg-background">
      <Button
        asChild
        variant="ghost"
        className={cn('h-10 w-10 p-2', !leftIcon && 'invisible')}
      >
        {leftIcon && Icon(leftIcon)}
      </Button>
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <Button
        variant="ghost"
        className={cn('h-10 w-10 p-2', !rightIcon && 'invisible')}
      >
        {rightIcon && Icon(rightIcon)}
      </Button>
    </header>
  );
};

export default Header;
