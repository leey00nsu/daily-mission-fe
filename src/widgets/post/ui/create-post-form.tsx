'use client';

import { AutosizeTextarea } from '@/shared/ui/autosize-textarea';
import { Button } from '@/shared/ui/button';

import {
  CreatePostRequest,
  CreatePostSchema,
} from '@/entities/post/model/type';
import PostImage from '@/features/mission/ui/mission-image';
import PostCreateModal from '@/features/post/ui/post-create-modal';
import Badge from '@/shared/ui/badge';
import FloatingButtonGroup from '@/shared/ui/floating-button-group';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { overlay } from 'overlay-kit';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdAddPhotoAlternate } from 'react-icons/md';

const CreatePostForm = () => {
  const { id: missionId } = useParams<{ id: string }>();
  const [imageSrc, setImageSrc] = useState('');

  const form = useForm<CreatePostRequest>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = (data: CreatePostRequest) => {
    const formData = {
      ...data,
      missionId: Number(missionId),
    };

    overlay.open(({ isOpen, close }) => {
      return (
        <PostCreateModal formData={formData} isOpen={isOpen} onClose={close} />
      );
    });
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
              <FormLabel htmlFor="mission-image" className="w-full">
                <Badge
                  variant="outline"
                  content={<MdAddPhotoAlternate />}
                  position="bottomRight"
                  className="bottom-1 right-3"
                >
                  <PostImage imageSrc={imageSrc} />
                </Badge>
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
              <FormLabel>포스트 제목</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="title"
                  placeholder="포스트 제목을 입력해주세요."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>포스트 내용</FormLabel>
              <FormControl>
                <AutosizeTextarea
                  id="content"
                  placeholder="포스트 내용을 입력해주세요."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FloatingButtonGroup>
          <Button className="w-full">포스트 작성</Button>
        </FloatingButtonGroup>
      </form>
    </Form>
  );
};

export default CreatePostForm;
