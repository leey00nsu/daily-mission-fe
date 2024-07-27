'use client';

import ProfileImage from '@/entities/user/ui/profile-image';
import { useUpdateProfile } from '@/features/user/api/use-user-service';
import Badge from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { UpdateProfileRequest, UpdateProfileSchema } from '@/types/user';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuLoader2 } from 'react-icons/lu';
import { MdAddPhotoAlternate } from 'react-icons/md';

const ProfileForm = () => {
  const [imageSrc, setImageSrc] = useState('');

  const { mutate: updateProfile, isPending } = useUpdateProfile();

  const form = useForm<UpdateProfileRequest>({
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      email: '',
      nickname: '',
    },
  });

  const onSubmit = (data: UpdateProfileRequest) => {
    updateProfile(data);
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
            <FormItem>
              <FormLabel htmlFor="profile-image">
                <Badge
                  variant="outline"
                  content={<MdAddPhotoAlternate />}
                  position="bottomRight"
                >
                  <ProfileImage imageSrc={imageSrc} />
                </Badge>
              </FormLabel>
              <FormControl>
                <Input
                  onChange={(e) => {
                    onChange(e.target.files && e.target.files[0]);
                    setImageHandler(e);
                  }}
                  accept="image/*"
                  id="profile-image"
                  type="file"
                  className="hidden"
                  {...fieldProps}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email@mail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>닉네임</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="nickname"
                  placeholder="닉네임을 입력해주세요."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full">
          {isPending ? <LuLoader2 className="animate-spin" /> : '회원가입'}
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
