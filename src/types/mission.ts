import { z } from 'zod';

export interface Week {
  [key: string]: boolean;
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
  sun: boolean;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: {
    from: string;
    to: string;
  };
  rules: Week;
}

export const NewMissionSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: '미션 제목은 2글자 이상 20글자 이하여야 합니다.',
    })
    .max(20, {
      message: '미션 제목은 2글자 이상 20글자 이하여야 합니다.',
    }),
  description: z.string().min(2, {
    message: '미션 설명은 2글자 이상이여야 합니다.',
  }),
  image: z.instanceof(File, {
    message: '미션 이미지 파일을 업로드해주세요.',
  }),
  date: z
    .object(
      {
        from: z.date().optional(),
        to: z.date().optional(),
      },
      {
        message: '시작일과 종료일을 모두 입력해주세요',
      },
    )
    .refine((data) => data.from && data.to, {
      message: '시작일과 종료일을 모두 입력해주세요',
    }),
  rules: z
    .object({
      mon: z.boolean(),
      tue: z.boolean(),
      wed: z.boolean(),
      thu: z.boolean(),
      fri: z.boolean(),
      sat: z.boolean(),
      sun: z.boolean(),
    })
    .refine(
      (data) => {
        return Object.values(data).some((value) => value);
      },
      {
        message: '요일을 하나 이상 선택해주세요',
      },
    ),
});

export type NewMissionForm = z.infer<typeof NewMissionSchema>;
