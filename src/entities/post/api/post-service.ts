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
import { GlobalResponse } from '@/shared/model/type';

export const createPost = async (request: CreatePostRequest): Promise<void> => {
  const formData = new FormData();

  const postSaveReqDto = {
    missionId: request.missionId,
    title: request.title,
    content: request.content,
  };

  const postSaveReqDtoBlob = new Blob([JSON.stringify(postSaveReqDto)], {
    type: 'application/json',
  });

  formData.append('postSaveReqDto', postSaveReqDtoBlob);
  formData.append('file', request.image);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/save`,
    {
      method: 'POST',
      body: formData,
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
  const formData = new FormData();

  const postUpdateRequestDto = {
    title: request.title,
    content: request.content,
  };

  const postUpdateRequestDtoBlob = new Blob(
    [JSON.stringify(postUpdateRequestDto)],
    {
      type: 'application/json',
    },
  );

  formData.append('postUpdateRequestDto', postUpdateRequestDtoBlob);
  formData.append('file', request.image);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/${request.id}`,
    {
      method: 'PUT',
      body: formData,
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
