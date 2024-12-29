import { useUserStore } from '@/entities/user/model/store';
import { UpdateProfileRequest } from '@/entities/user/model/type';
import { useUpdateProfile } from '@/features/user/api/use-user-service';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { Spinner } from '@/shared/ui/spinner';
import { useEffect } from 'react';

interface ProfileUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: UpdateProfileRequest;
}

const ProfileUpdateModal = ({
  isOpen,
  onClose,
  formData,
}: ProfileUpdateModalProps) => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const {
    isPending,
    mutate: updateProfile,
    error,
    isSuccess,
    isError,
  } = useUpdateProfile({
    onSuccess: (data) => {
      setUser({
        ...user,
        nickname: data.nickname || user?.nickname,
        imageUrl: data.imageUrl || user?.imageUrl,
      });
    },
  });

  useEffect(() => {
    updateProfile(formData);
  }, []);

  const closeHandler = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeHandler}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>프로필 업데이트</DialogTitle>
        </DialogHeader>
        {isPending && (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        )}
        {isSuccess && (
          <div className="flex flex-col gap-2">
            <p>프로필 업데이트가 완료되었습니다.</p>

            <DialogClose asChild>
              <Button type="button">확인</Button>
            </DialogClose>
          </div>
        )}
        {isError && (
          <div className="flex flex-col gap-2">
            <p>{error.message}</p>

            <DialogClose asChild>
              <Button type="button">확인</Button>
            </DialogClose>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProfileUpdateModal;
