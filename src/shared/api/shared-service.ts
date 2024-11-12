import {
  GetPresignedUrlRequest,
  GetPresignedUrlResponse,
  UploadImageRequest,
} from '@/shared/model/type';

export const getPresignedUrl = async (
  request: GetPresignedUrlRequest,
): Promise<GetPresignedUrlResponse> => {
  const { fileName, title } = request;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_TEMP}/presigned-url/put?fileName=${fileName}&title=${title}`,
    {
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to get presigned url');
  }

  const data = await response.text();

  return {
    url: data,
  };
};

export const uploadImage = async (
  request: UploadImageRequest,
): Promise<void> => {
  const { image, url } = request;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': image.type,
    },
    body: image,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }
};
