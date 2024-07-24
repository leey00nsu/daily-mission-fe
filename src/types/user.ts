import { z } from 'zod';

export interface Participant {
  id: number;
  userName: string;
  imgUrl: string;
  banned: boolean;
}

export const SignUpSchema = z.object({
  email: z.string().email({
    message: '이메일 형식이 올바르지 않습니다.',
  }),
  nickname: z
    .string()
    .min(2, {
      message: '닉네임은 2글자 이상 20글자 이하여야 합니다.',
    })
    .max(20, {
      message: '닉네임은 2글자 이상 20글자 이하여야 합니다.',
    }),
  image: z.instanceof(File).optional(),
});

export type SignUpForm = z.infer<typeof SignUpSchema>;
