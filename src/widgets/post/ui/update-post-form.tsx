'use client';

import { AutosizeTextarea } from '@/shared/ui/autosize-textarea';
import { Button } from '@/shared/ui/button';

import {
  CreatePostSchema,
  UpdatePostRequest,
} from '@/entities/post/model/type';
import PostImage from '@/features/mission/ui/mission-image';
import { useGetPost } from '@/features/post/api/use-post-service';
import PostUpdateModal from '@/features/post/ui/post-update-modal';
import Badge from '@/shared/ui/badge';
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

const UpdatePostForm = () => {
  const { id: postId } = useParams<{ id: string }>();

  const { data: post } = useGetPost({
    id: Number(postId),
  });

  const [imageSrc, setImageSrc] = useState(post?.imageUrl ?? '');

  const form = useForm<UpdatePostRequest>({
    resolver: zodResolver(CreatePostSchema),
    values: {
      id: Number(postId),
      title: post?.title ?? '',
      content: post?.content ?? '',
      image: new File([], post?.imageUrl ?? ''),
    },
  });

  const onSubmit = (data: UpdatePostRequest) => {
    const formData = {
      ...data,
      id: Number(postId),
    };

    overlay.open(({ isOpen, close }) => {
      return (
        <PostUpdateModal formData={formData} isOpen={isOpen} onClose={close} />
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
                  <PostImage imageSrc={post?.imageUrl ?? imageSrc} />
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

        <Button className="w-full">포스트 수정</Button>
      </form>
    </Form>
  );
};

export default UpdatePostForm;
