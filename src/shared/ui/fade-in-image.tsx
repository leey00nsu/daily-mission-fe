import cn from '@/shared/lib/cn';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type FadeInImageProps = ImageProps & React.ComponentPropsWithRef<'img'>;

import { forwardRef } from 'react';

const FadeInImage = forwardRef<HTMLImageElement, FadeInImageProps>(
  ({ src, alt, className, ...props }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);

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
        ref={ref}
        {...props}
      />
    );
  },
);

export default FadeInImage;
