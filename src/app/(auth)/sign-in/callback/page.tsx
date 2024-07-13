'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { LuUser2 } from 'react-icons/lu';
import { MdAddPhotoAlternate } from 'react-icons/md';

export default function Profile() {
  const [image, setImage] = useState('');

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
        <section className="flex flex-col items-center gap-4">
          <Label htmlFor="profile-image" className="relative">
            <Avatar className="h-32 w-32">
              <AvatarImage src={image} />
              <AvatarFallback>
                <LuUser2 className="h-1/2 w-1/2" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-3 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
              <MdAddPhotoAlternate />
            </div>
          </Label>
          <Input
            onChange={setImageHandler}
            accept="image/*"
            id="profile-image"
            type="file"
            className="hidden"
          />

          <div className="flex w-full flex-col gap-1.5">
            <Label htmlFor="email">이메일</Label>
            <Input type="email" id="email" placeholder="Email@mail.com" />
          </div>

          <div className="flex w-full flex-col gap-1.5">
            <Label htmlFor="email">닉네임</Label>
            <Input
              type="text"
              id="nickname"
              placeholder="닉네임을 입력해주세요."
            />
          </div>

          <Button className="w-full">회원가입</Button>
        </section>
      </div>
    </main>
  );
}
