'use client';

import { MockSignIn } from '@/entities/auth/api/auth-action';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useState } from 'react';

const MockSignInButton = () => {
  const [authorization, setAuthorization] = useState('');
  const [session, setSession] = useState('');

  const handleMockSignIn = async () => {
    await MockSignIn({
      authorization,
      session,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <Input
        placeholder="Authorization"
        onChange={(e) => setAuthorization(e.target.value)}
      />
      <Input
        placeholder="Session"
        onChange={(e) => setSession(e.target.value)}
      />
      <Button
        onClick={handleMockSignIn}
        variant="outline"
        className="group gap-2"
      >
        테스트 로그인
      </Button>
    </div>
  );
};

export default MockSignInButton;
