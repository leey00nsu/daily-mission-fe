'use client';

import { AutosizeTextarea } from '@/shared/ui/autosize-textarea';
import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';

import MissionImage from '@/features/mission/ui/mission-image';
import WeekCheckboxGroup from '@/features/mission/ui/week-checkbox-group';
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
import {
  NewMissionSchema,
  NewMissionForm as NewMissonFormType,
} from '@/types/mission';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuChevronRight } from 'react-icons/lu';

const NewMissionForm = () => {
  const [imageSrc, setImageSrc] = useState('');

  const form = useForm<NewMissonFormType>({
    resolver: zodResolver(NewMissionSchema),
    defaultValues: {
      date: {
        from: undefined,
        to: undefined,
      },
      title: '',
      description: '',
      rules: {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
      },
    },
  });

  const onSubmit = (data: NewMissonFormType) => {
    console.log(data);
  };

  const setImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4"
      >
        <FormField
          control={form.control}
          name="image"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem className="flex w-full flex-col items-center justify-center">
              <FormLabel htmlFor="mission-image">
                <MissionImage imageSrc={imageSrc} />
              </FormLabel>
              <FormControl>
                <Input
                  onChange={(e) => {
                    onChange(e.target.files && e.target.files[0]);
                    setImageHandler(e);
                  }}
                  accept="image/*"
                  id="mission-image"
                  type="file"
                  className="hidden"
                  {...fieldProps}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>미션 제목</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="title"
                  placeholder="미션 제목을 입력해주세요."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>미션 설명</FormLabel>
              <FormControl>
                <AutosizeTextarea
                  id="description"
                  placeholder="미션 설명을 입력해주세요."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field: { value, onChange } }) => (
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
                    from: value.from!,
                    to: value.to!,
                  }}
                  onSelect={onChange}
                  className="justify-center rounded-md border"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field: { value } }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="flex items-center gap-2">
                  <Input
                    readOnly
                    type="date"
                    value={
                      value && value.from
                        ? format(value.from, 'yyyy-MM-dd')
                        : ''
                    }
                  />
                  <LuChevronRight className="h-8 w-8" />
                  <Input
                    readOnly
                    type="date"
                    value={
                      value && value.to ? format(value.to, 'yyyy-MM-dd') : ''
                    }
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rules"
          render={({ field: { value, onChange } }) => (
            <FormItem className="w-full">
              <FormLabel>미션 규칙</FormLabel>
              <FormDescription>
                미션을 수행할 요일을 선택해주세요.
              </FormDescription>
              <FormControl>
                <WeekCheckboxGroup value={value} onChange={onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full">미션 생성</Button>
      </form>
    </Form>
  );
};

export default NewMissionForm;
