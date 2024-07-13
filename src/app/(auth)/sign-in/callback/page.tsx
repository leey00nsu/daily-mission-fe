'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Header from '@/components/ui/header';
import { Input } from '@/components/ui/input';
import { SignUpForm, SignUpSchema } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuUser2 } from 'react-icons/lu';
import { MdAddPhotoAlternate } from 'react-icons/md';

export default function Profile() {
  const [image, setImage] = useState('');

  const form = useForm<SignUpForm>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      nickname: '',
    },
  });

  const onSubmit = (data: SignUpForm) => {
    console.log(data);
  };

  const setImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex min-h-screen justify-center">
      <div className="relative flex max-w-2xl grow flex-col p-4">
        <Header leftIcon="leftArrow" title="프로필" />
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
                  <FormLabel htmlFor="profile-image" className="relative">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src={image} />
                      <AvatarFallback>
                        <LuUser2 className="h-1/2 w-1/2" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-3 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                      <MdAddPhotoAlternate />
                    </div>
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

            <Button className="w-full">회원가입</Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
