import cn from '@/shared/lib/cn';
import Image, { ImageProps } from 'next/image';
import { forwardRef, ReactNode, useEffect, useState } from 'react';

type FadeInImageProps = ImageProps &
  React.ComponentPropsWithRef<'img'> & {
    fallbackComponent?: ReactNode;
    fallbackMs?: number;
  };

const DefaultFallbackComponent = <div className="h-full w-full bg-gray-200" />;

const FadeInImage = forwardRef<HTMLImageElement, FadeInImageProps>(
  (
    {
      src,
      alt,
      className,
      fallbackComponent = DefaultFallbackComponent,
      fallbackMs = 1000,
      ...props
    },
    ref,
  ) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showFallback, setShowFallback] = useState(!src);

    useEffect(() => {
      setIsLoaded(false);
      setShowFallback(!src);
    }, [src]);

    useEffect(() => {
      if (!src) return;

      const timer = setTimeout(() => {
        if (!isLoaded) {
          setShowFallback(true);
        }
      }, fallbackMs);

      return () => clearTimeout(timer);
    }, [fallbackMs, src, isLoaded]);

    if (showFallback) {
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

FadeInImage.displayName = 'FadeInImage';

export default FadeInImage;
