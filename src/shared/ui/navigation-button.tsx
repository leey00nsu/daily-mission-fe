import cn from '@/shared/lib/cn';
import Link from 'next/link';
import React from 'react';
import { LuChevronRight } from 'react-icons/lu';

interface NavigationButtonProps {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  title: string;
  href: string;
}

const Icon = (icon: React.ReactElement) => {
  return React.cloneElement(icon, {
    className: 'h-full w-full',
  });
};

const NavigationButton = ({
  leftIcon,
  rightIcon = <LuChevronRight />,
  title,
  href,
}: NavigationButtonProps) => (
  <Link href={href} className="flex items-center justify-between gap-2">
    <div className={cn('h-10 w-10 p-2', !leftIcon && 'invisible')}>
      {leftIcon && Icon(leftIcon)}
    </div>
    <h3 className="grow text-start text-lg">{title}</h3>
    <div className={cn('h-10 w-10 p-2', !rightIcon && 'invisible')}>
      {rightIcon && Icon(rightIcon)}
    </div>
  </Link>
);

export default NavigationButton;
