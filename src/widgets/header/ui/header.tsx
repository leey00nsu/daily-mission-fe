'use client';

import cn from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { useRouter } from 'next/navigation';
import { LuArrowLeft } from 'react-icons/lu';

export type HeaderIcon = 'leftArrow';

export interface HeaderProps {
  leftIcon?: HeaderIcon;
  title: string | React.ReactNode;
  rightIcon?: HeaderIcon;
  fixed?: boolean;
}

const Icon = (icon?: HeaderIcon) => {
  switch (icon) {
    case 'leftArrow':
      return <LuArrowLeft className="h-full w-full" />;

    default:
      return null;
  }
};

const Properties = (icon?: HeaderIcon) => {
  const router = useRouter();

  switch (icon) {
    case 'leftArrow':
      return {
        'aria-label': '뒤로가기',
        onClick: () => router.back(),
      };

    default:
      return {};
  }
};

const Title = (title: string | React.ReactNode) => {
  switch (typeof title) {
    case 'string':
      return <h1 className="text-2xl font-bold">{title}</h1>;

    default:
      return title;
  }
};

const Header = ({ leftIcon, title, rightIcon, fixed = true }: HeaderProps) => {
  return (
    <header
      className={cn(
        'z-10 flex h-16 w-full max-w-2xl items-center justify-between bg-background p-4',
        fixed && 'fixed top-0',
      )}
    >
      <Button
        variant="ghost"
        type="button"
        {...Properties(leftIcon)}
        className={cn('h-10 w-10 p-2', !leftIcon && 'invisible')}
      >
        {Icon(leftIcon)}
      </Button>
      <div>{Title(title)}</div>
      <Button
        variant="ghost"
        type="button"
        className={cn('h-10 w-10 p-2', !rightIcon && 'invisible')}
      >
        {Icon(rightIcon)}
      </Button>
    </header>
  );
};

export default Header;
