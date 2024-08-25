import { z } from 'zod';

export interface User {
  name: string;
  email: string;
  imageUrl: string;
}

export interface Participant {
  id: number;
  userName: string;
  imageUrl: string;
  banned: boolean;
}

export const UpdateProfileSchema = z.object({
  email: z.string().email({
    message: '이메일 형식이 올바르지 않습니다.',
  }),
  name: z
    .string()
    .min(2, {
      message: '닉네임은 2글자 이상 20글자 이하여야 합니다.',
    })
    .max(20, {
      message: '닉네임은 2글자 이상 20글자 이하여야 합니다.',
    }),
  image: z.instanceof(File).optional(),
});

export type UpdateProfileRequest = z.infer<typeof UpdateProfileSchema>;
export interface UpdateProfileResponse extends User {}
