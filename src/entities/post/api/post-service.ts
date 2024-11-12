import { SignOut } from '@/entities/auth/api/auth-action';
import {
  CreatePostRequest,
  DeletePostRequest,
  GetPostRequest,
  GetPostResponse,
  GetPostsRequest,
  GetPostsResponse,
  UpdatePostRequest,
} from '@/entities/post/model/type';
import { getPresignedUrl, uploadImage } from '@/shared/api/shared-service';
import { GlobalResponse } from '@/shared/model/type';

export const createPost = async (request: CreatePostRequest): Promise<void> => {
  const { title, content, image, missionId } = request;

  const { url } = await getPresignedUrl({
    fileName: image.name,
    title,
  });

  await uploadImage({ image, url });

  const postSaveReqDto = {
    missionId,
    title,
    content,
    imageUrl: `${title}/${image.name}`,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/save`,
    {
      method: 'POST',
      body: JSON.stringify(postSaveReqDto),
      credentials: 'include',
    },
  );

  const data: GlobalResponse<void> = await response.json();

  if (!response.ok) {
    throw new Error(data.errors.message);
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
    SignOut();

    throw new Error('Failed to get post');
  }

  const data: GlobalResponse<GetPostResponse> = await response.json();

  return data.data;
};

export const getMissionPosts = async (
  request: GetPostsRequest,
): Promise<GetPostsResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/mission/${request.missionId}`,
    {
      credentials: 'include',
    },
  );

  if (!response.ok) {
    SignOut();

    throw new Error('Failed to get mission posts');
  }

  const data: GlobalResponse<GetPostsResponse> = await response.json();

  return data.data;
};

export const getUserPosts = async (): Promise<GetPostsResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/user`,
    {
      credentials: 'include',
    },
  );

  if (!response.ok) {
    SignOut();

    throw new Error('Failed to get posts');
  }

  const data: GlobalResponse<GetPostsResponse> = await response.json();

  return data.data;
};

export const updatePost = async (request: UpdatePostRequest): Promise<void> => {
  const { title, content, image, id } = request;

  if (image) {
    const { url } = await getPresignedUrl({
      fileName: image.name,
      title,
    });

    await uploadImage({ image, url });
  }

  const postSaveReqDto = {
    title,
    content,
    imageUrl: image ? `${title}/${image.name}` : undefined,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(postSaveReqDto),
      credentials: 'include',
    },
  );

  if (!response.ok) {
    SignOut();

    throw new Error('Failed to update post');
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
    SignOut();

    throw new Error('Failed to delete post');
  }

  const data: GlobalResponse<void> = await response.json();

  return data.data;
};
