'use client';

import { useGetProfile } from '@/features/user/api/use-user-service';

const AuthCallback = () => {
  const { data: user } = useGetProfile();

  console.log(user);

  return <div>AuthCallback</div>;
};

export default AuthCallback;
