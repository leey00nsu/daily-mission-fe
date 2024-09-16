'use client';

import { AutosizeTextarea } from '@/shared/ui/autosize-textarea';
import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';

import {
  UpdateMissionRequest,
  UpdateMissionSchema,
} from '@/entities/mission/model/type';
import { useGetMission } from '@/features/mission/api/use-mission-service';
import MissionImage from '@/features/mission/ui/mission-image';
import MissionUpdateModal from '@/features/mission/ui/mission-update-modal';
import WeekCheckboxGroup from '@/features/mission/ui/week-checkbox-group';
import Badge from '@/shared/ui/badge';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { overlay } from 'overlay-kit';
import { useForm } from 'react-hook-form';
import { LuChevronRight } from 'react-icons/lu';
import { MdAddPhotoAlternate } from 'react-icons/md';

const UpdateMissionForm = () => {
  const { id: missionId } = useParams<{ id: string }>();
  const { data: mission } = useGetMission({
    id: Number(missionId),
  });

  const form = useForm<UpdateMissionRequest>({
    resolver: zodResolver(UpdateMissionSchema),
    values: {
      id: Number(missionId),
      hint: mission?.hint ?? '',
      credential: mission?.credential ?? '',
    },
  });

  const onSubmit = (data: UpdateMissionRequest) => {
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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4"
      >
        <FormItem className="flex w-full flex-col items-center justify-center">
          <FormLabel htmlFor="mission-image" className="w-full">
            <Badge
              variant="outline"
              content={<MdAddPhotoAlternate />}
              position="bottomRight"
              className="bottom-1 right-3"
            >
              <MissionImage imageSrc={mission?.imageUrl ?? ''} />
            </Badge>
          </FormLabel>
        </FormItem>

        <FormItem className="w-full">
          <FormLabel>미션 제목</FormLabel>
          <Input
            readOnly
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
            <Input readOnly type="date" value={mission?.startDate} />
            <LuChevronRight className="h-8 w-8" />
            <Input readOnly type="date" value={mission?.endDate} />
          </div>
        </div>

        <FormItem className="w-full">
          <FormLabel>미션 규칙</FormLabel>
          <FormDescription>미션을 수행할 요일을 선택해주세요.</FormDescription>
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

        <Button className="w-full">미션 수정</Button>
      </form>
    </Form>
  );
};

export default UpdateMissionForm;
