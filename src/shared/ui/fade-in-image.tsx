import cn from '@/shared/lib/cn';
import Image, { ImageProps } from 'next/image';
import { forwardRef, ReactNode, useEffect, useState } from 'react';

type FadeInImageProps = ImageProps &
  React.ComponentPropsWithRef<'img'> & {
    fallbackComponent?: ReactNode;
    fallbackMs?: number;
  };

const FadeInImage = forwardRef<HTMLImageElement, FadeInImageProps>(
  (
    { src, alt, className, fallbackComponent, fallbackMs = 1000, ...props },
    ref,
  ) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showFallback, setShowFallback] = useState(false);

    useEffect(() => {
      setIsLoaded(false);
      setShowFallback(false);
    }, [src]);

    useEffect(() => {
      if (!fallbackComponent) return;

      const timer = setTimeout(() => {
        if (!isLoaded) {
          setShowFallback(true);
        }
      }, fallbackMs);

      return () => clearTimeout(timer);
    }, [fallbackMs, fallbackComponent, isLoaded]);

    if (showFallback && fallbackComponent) {
      return (
        <div
          className={cn(
            'opacity-0 transition-opacity duration-500 ease-in-out',
            showFallback && 'opacity-100',
            className,
          )}
        >
          {fallbackComponent}
        </div>
      );
    }

    return (
      <Image
        src={src}
        alt={alt}
        className={cn(
          isLoaded ? 'opacity-100' : 'opacity-0',
          'transition-opacity duration-500 ease-in-out',
          className,
        )}
        onLoadingComplete={() => setIsLoaded(true)}
        onError={() => setShowFallback(true)}
        ref={ref}
        {...props}
      />
    );
  },
);

export default FadeInImage;
