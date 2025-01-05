import {
  GetPresignedUrlRequest,
  GetPresignedUrlResponse,
  GlobalResponse,
  UploadImageRequest,
} from '@/shared/model/type';

export const getPresignedUrl = async (
  request: GetPresignedUrlRequest,
): Promise<GetPresignedUrlResponse> => {
  const { fileName, title } = request;

  const serializedFileName = fileName.replace(/[^a-zA-Z0-9]/g, '').slice(0, 10);
  const serializedTitle = title.replace(/[^a-zA-Z0-9]/g, '').slice(0, 10);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/image/presigned-url?fileName=${serializedFileName}&title=${serializedTitle}`,
    {
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to get presigned url');
  }

  const data: GlobalResponse<GetPresignedUrlResponse> = await response.json();

  return {
    url: data.data.url,
    path: data.data.path,
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
