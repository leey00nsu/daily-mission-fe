import {
  CreatePostRequest,
  DeletePostRequest,
  GetPaginatedPostsResponse,
  GetPostRequest,
  GetPostResponse,
  GetPostsRequest,
  Post,
  UpdatePostRequest,
} from '@/entities/post/model/type';
import { getPresignedUrl, uploadImage } from '@/shared/api/shared-service';
import { GlobalResponse } from '@/shared/model/type';

export const createPost = async (request: CreatePostRequest): Promise<void> => {
  const { title, content, image, missionId } = request;

  const { url, path } = await getPresignedUrl({
    fileName: image.name,
    title,
  });

  await uploadImage({ image, url });

  const postSaveReqDto = {
    missionId,
    title,
    content,
    imageUrl: path,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/save`,
    {
      method: 'POST',
      body: JSON.stringify(postSaveReqDto),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
  );

  const data: GlobalResponse<void> = await response.json();

  if (!response.ok) {
    throw new Error(data.errors.message || '포스트를 생성하는데 실패했습니다.');
  }

  return data.data;
};

export const getPost = async (
  request: GetPostRequest,
): Promise<GetPostResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/${request.id}`,
    {
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('포스트를 불러오는데 실패했습니다.');
  }

  const data: GlobalResponse<GetPostResponse> = await response.json();

  return data.data;
};

export const getPaginatedMissionPosts = async (
  request: GetPostsRequest,
): Promise<GetPaginatedPostsResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/mission/${request.missionId}?page=${request.page}&size=${request.size}`,
    {
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('포스트 목록을 불러오는데 실패했습니다.');
  }

  const data: GlobalResponse<Post[]> = await response.json();

  return {
    data: data.data,
    meta: {
      isNext: data.meta.isNext,
    },
  };
};

export const getPaginatedUserPosts = async (
  request: Pick<GetPostsRequest, 'page' | 'size'>,
): Promise<GetPaginatedPostsResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/user?page=${request.page}&size=${request.size}`,
    {
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to get posts');
  }

  const data: GlobalResponse<Post[]> = await response.json();

  return {
    data: data.data,
    meta: {
      isNext: data.meta.isNext,
    },
  };
};

export const updatePost = async (request: UpdatePostRequest): Promise<void> => {
  const { title, content, image, id } = request;

  const postSaveReqDto: {
    title: string;
    content: string;
    imageUrl?: string;
  } = {
    title,
    content,
  };

  if (image) {
    const { url, path } = await getPresignedUrl({
      fileName: image.name,
      title,
    });

    await uploadImage({ image, url });

    postSaveReqDto.imageUrl = path;
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(postSaveReqDto),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('포스트를 수정하는데 실패했습니다.');
  }

  const data: GlobalResponse<void> = await response.json();

  return data.data;
};

export const deletePost = async (request: DeletePostRequest): Promise<void> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/${request.id}`,
    {
      method: 'DELETE',
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('포스트를 삭제하는데 실패했습니다.');
  }

  const data: GlobalResponse<void> = await response.json();

  return data.data;
};
