'use client';

import cn from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { NavigationProps } from '@/widgets/navigation/ui/navigation';
import { LuChevronUp } from 'react-icons/lu';

interface ScrollTopButtonProps {
  navigationOption: NavigationProps;
}

const ScrollTopButton = ({ navigationOption }: ScrollTopButtonProps) => {
  const scrollTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={cn(
        navigationOption.visible ? 'bottom-20' : 'bottom-8',
        'fixed z-20 flex w-full max-w-2xl justify-end p-2',
      )}
    >
      <Button
        variant="outline"
        type="button"
        className="h-12 w-12 rounded-full p-3"
        onClick={scrollTopHandler}
      >
        <LuChevronUp className="h-full w-full" />
      </Button>
    </div>
  );
};

export default ScrollTopButton;
