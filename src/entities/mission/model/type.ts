import { Participant } from '@/entities/user/model/type';
import { Page } from '@/shared/model/type';
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
  id: number;
  username: string;
  title: string;
  content: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  ended: boolean;
  missionRuleResponseDto: {
    week: Week;
    deleted: boolean;
  };
  participantDto: Participant[];
  credential: string;
}

export interface MissionCard
  extends Pick<
    Mission,
    | 'id'
    | 'username'
    | 'title'
    | 'content'
    | 'startDate'
    | 'endDate'
    | 'imageUrl'
    | 'ended'
  > {}

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
  id: Mission['id'];
}
export type GetMissionResponse = Mission;

export type MissionType = 'all' | 'hot' | 'new';
export type MissionSort = 'asc' | 'desc';

export interface GetMissionsRequest {
  type: MissionType;
  page: number;
  size: number;
  sort: MissionSort;
}
export type GetMissionsResponse = Page<Mission>;

export const JoinMissionSchema = z.object({
  credential: z.string({
    message: '참여 코드를 입력해주세요',
  }),
});

export type JoinMissionRequest = z.infer<typeof JoinMissionSchema>;

export interface JoinMissionResponse {
  ok: boolean;
}

export interface DeleteMissionRequest {
  id: Mission['id'];
}
