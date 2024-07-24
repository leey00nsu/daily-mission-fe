import { Participant } from '@/types/user';
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
  userName: string;
  id: number;
  title: string;
  content: string;
  imgUrl: string;
  startDate: string;
  endDate: string;
  week: Week;
  participants: Participant[];
}

export interface MissionCard
  extends Pick<Mission, 'id' | 'title' | 'content' | 'endDate' | 'imgUrl'> {}

export const CreateMissionSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: '미션 제목은 2글자 이상 20글자 이하여야 합니다.',
    })
    .max(20, {
      message: '미션 제목은 2글자 이상 20글자 이하여야 합니다.',
    }),
  content: z.string().min(2, {
    message: '미션 설명은 2글자 이상이여야 합니다.',
  }),
  image: z.instanceof(File, {
    message: '미션 이미지 파일을 업로드해주세요.',
  }),
  date: z
    .object(
      {
        startDate: z.date().optional(),
        endDate: z.date().optional(),
      },
      {
        message: '시작일과 종료일을 모두 입력해주세요',
      },
    )
    .refine((data) => data.startDate && data.endDate, {
      message: '시작일과 종료일을 모두 입력해주세요',
    }),
  week: z
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

export type CreateMissionRequest = z.infer<typeof CreateMissionSchema>;

export interface CreateMissionResponse {
  credential: string;
}

export interface GetMissionRequest {
  id: number;
}
export interface GetMissionResponse extends Mission {}
