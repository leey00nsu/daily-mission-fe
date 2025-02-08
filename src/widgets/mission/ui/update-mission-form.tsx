'use client';

import { AutosizeTextarea } from '@/shared/ui/autosize-textarea';
import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';

import {
  UpdateMissionRequest,
  UpdateMissionSchema,
} from '@/entities/mission/model/type';
import { useGetMission } from '@/features/mission/api/use-mission-service';
import MissionDeleteModal from '@/features/mission/ui/mission-delete-modal';
import MissionImage from '@/features/mission/ui/mission-image';
import MissionUpdateModal from '@/features/mission/ui/mission-update-modal';
import WeekCheckboxGroup from '@/features/mission/ui/week-checkbox-group';
import DeleteConfirmModal from '@/shared/ui/delete-confirm-modal';
import FloatingButtonGroup from '@/shared/ui/floating-button-group';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import UpdateConfirmModal from '@/shared/ui/update-confirm-modal';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { overlay } from 'overlay-kit';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LuChevronRight } from 'react-icons/lu';

const UpdateMissionForm = () => {
  const { id: missionId } = useParams<{ id: string }>();
  const { data: mission } = useGetMission({
    id: Number(missionId),
  });

  const form = useForm<UpdateMissionRequest>({
    resolver: zodResolver(UpdateMissionSchema),
    defaultValues: {
      id: Number(missionId),
      hint: mission?.hint ?? '',
      credential: mission?.credential ?? '',
    },
  });

  const isFormDirty =
    form.formState.dirtyFields.hint || form.formState.dirtyFields.credential;

  useEffect(() => {
    form.setValue('hint', mission?.hint ?? '');
    form.setValue('credential', mission?.credential ?? '');
  }, [mission]);

  const onSubmit = async (data: UpdateMissionRequest) => {
    const result = await overlay.openAsync<boolean>(({ isOpen, close }) => {
      return <UpdateConfirmModal isOpen={isOpen} onClose={close} />;
    });

    if (!result) return;

    const formData = {
      ...data,
      id: Number(missionId),
    };

    overlay.open(({ isOpen, close }) => {
      return (
        <MissionUpdateModal
          formData={formData}
          isOpen={isOpen}
          onClose={close}
        />
      );
    });
  };

  const deleteMissionHandler = async () => {
    const result = await overlay.openAsync<boolean>(({ isOpen, close }) => {
      return <DeleteConfirmModal isOpen={isOpen} onClose={close} />;
    });

    if (!result) return;

    overlay.open(({ isOpen, close }) => {
      return (
        <MissionDeleteModal
          formData={{
            id: Number(missionId),
          }}
          isOpen={isOpen}
          onClose={close}
        />
      );
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4"
      >
        <FormItem className="flex w-full flex-col items-center justify-center">
          <FormLabel htmlFor="mission-image" className="w-full">
            <MissionImage
              className="h-80 w-full object-cover"
              imageSrc={mission?.imageUrl ?? ''}
            />
          </FormLabel>
        </FormItem>

        <FormItem className="w-full">
          <FormLabel>미션 제목</FormLabel>
          <Input
            readOnly
            disabled
            type="text"
            id="title"
            value={mission?.title}
            placeholder="미션 제목을 입력해주세요."
          />
          <FormMessage />
        </FormItem>

        <FormItem className="w-full">
          <FormLabel>미션 설명</FormLabel>
          <AutosizeTextarea
            readOnly
            disabled
            id="content"
            value={mission?.content}
            placeholder="미션 설명을 입력해주세요."
            className="resize-none"
          />
          <FormMessage />
        </FormItem>

        <FormField
          control={form.control}
          name="credential"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>미션 참여코드</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="title"
                  placeholder="미션 참여코드를 입력해주세요."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hint"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>미션 참여코드 힌트</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="title"
                  placeholder="미션 참여코드 힌트를 입력해주세요."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem className="w-full">
          <FormLabel>미션 기간</FormLabel>
          <FormControl>
            <Calendar
              mode="range"
              defaultMonth={new Date()}
              disabled={{
                before: new Date(),
              }}
              selected={{
                from: new Date(mission?.startDate ?? ''),
                to: new Date(mission?.endDate ?? ''),
              }}
              className="justify-center rounded-md border"
            />
          </FormControl>
        </FormItem>

        <div className="w-full">
          <div className="flex items-center gap-2">
            <Input disabled readOnly type="date" value={mission?.startDate} />
            <LuChevronRight className="h-8 w-8" />
            <Input disabled readOnly type="date" value={mission?.endDate} />
          </div>
        </div>

        <FormItem className="w-full">
          <FormLabel>미션 인증 빈도</FormLabel>
          <FormDescription>미션을 인증할 요일을 선택해주세요.</FormDescription>
          <WeekCheckboxGroup
            readOnly
            week={
              mission?.missionRuleResponseDto.week ?? {
                mon: false,
                tue: false,
                wed: false,
                thu: false,
                fri: false,
                sat: false,
                sun: false,
              }
            }
          />
        </FormItem>

        <FloatingButtonGroup>
          <Button className="w-full" disabled={!isFormDirty}>
            미션 수정
          </Button>
          <Button
            type="button"
            onClick={deleteMissionHandler}
            variant="destructive"
            className="w-full"
          >
            미션 삭제
          </Button>
        </FloatingButtonGroup>
      </form>
    </Form>
  );
};

export default UpdateMissionForm;
