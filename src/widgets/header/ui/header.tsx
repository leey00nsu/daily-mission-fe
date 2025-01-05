'use client';

import cn from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { useRouter } from 'next/navigation';
import { LuArrowLeft, LuBell } from 'react-icons/lu';

export type HeaderIcon = 'leftArrow' | 'notification';

export interface HeaderProps {
  visible?: boolean;
  leftIcon?: HeaderIcon;
  title?: string | React.ReactNode;
  rightIcon?: HeaderIcon;
  fixed?: boolean;
}

const Icon = (icon?: HeaderIcon) => {
  switch (icon) {
    case 'leftArrow':
      return <LuArrowLeft className="h-full w-full" />;
    case 'notification':
      return <LuBell className="h-full w-full" />;

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

    case 'notification':
      return {
        'aria-label': '알림',
        onClick: () => router.push('/notification'),
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

const Header = ({ headerOption }: { headerOption: HeaderProps }) => {
  const {
    visible = true,
    leftIcon,
    title,
    rightIcon,
    fixed = true,
  } = headerOption;

  if (!visible) {
    return null;
  }

  return (
    <header
      className={cn(
        'z-10 flex h-16 w-full items-center justify-between bg-background p-4',
        fixed && 'sticky top-0',
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
        {...Properties(rightIcon)}
        className={cn('h-10 w-10 p-2', !rightIcon && 'invisible')}
      >
        {Icon(rightIcon)}
      </Button>
    </header>
  );
};

export default Header;
