import Badge from '@/shared/ui/badge';
import Image from 'next/image';
import { useRef } from 'react';
import { LuZoomIn } from 'react-icons/lu';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';

interface ImageViewerProps {
  images: string[];
  containerClassName?: string;
}

export function ImageViewer({ images, containerClassName }: ImageViewerProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  // badge를 클릭하면 이미지를 클릭하는 것과 동일한 효과를 주기 위함
  const handleBadgeClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  return (
    <Badge
      variant="outline"
      content={<LuZoomIn />}
      position="bottomRight"
      className="bottom-1 right-3"
      onClick={handleBadgeClick}
    >
      <div className={containerClassName}>
        <PhotoProvider pullClosable maskClosable>
          {images.map((item, index) => (
            <PhotoView key={index} src={item}>
              <Image
                fill
                ref={imageRef}
                alt={`image ${index}`}
                src={item || ''}
                className="object-cover"
                unoptimized
              />
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>
    </Badge>
  );
}
