import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';

interface ImageViewerProps {
  images: string[];
}

export function ImageViewer({ images }: ImageViewerProps) {
  return (
    <PhotoProvider pullClosable maskClosable>
      <div>
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <Image
              fill
              alt={`image ${index}`}
              src={item || ''}
              className="object-cover"
              unoptimized
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}
