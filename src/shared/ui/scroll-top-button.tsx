'use client';

import cn from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { LuChevronUp } from 'react-icons/lu';

interface ScrollTopButtonProps {
  navigationShown: boolean;
}

const ScrollTopButton = ({ navigationShown }: ScrollTopButtonProps) => {
  const scrollTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={cn(
        navigationShown ? 'bottom-16' : 'bottom-8',
        'fixed z-20 flex w-full max-w-2xl justify-end',
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
