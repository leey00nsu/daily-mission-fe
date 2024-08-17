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

  if (!response.ok) {
    SignOut();

    throw new Error('Failed to create post');
  }

  const data: GlobalResponse<void> = await response.json();

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

export const getPosts = async (
  request: GetPostsRequest,
): Promise<GetPostsResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/post/${request.missionId}`,
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

  const postUpdateReqDto = {
    title: request.title,
    content: request.content,
  };

  const postUpdateReqDtoBlob = new Blob([JSON.stringify(postUpdateReqDto)], {
    type: 'application/json',
  });

  formData.append('postUpdateReqDto', postUpdateReqDtoBlob);
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
