import { useUserStore } from '@/entities/user/model/store';
import { UpdateProfileRequest } from '@/entities/user/model/type';
import { useUpdateProfile } from '@/features/user/api/use-user-service';
import CommonModal from '@/shared/ui/common-modal';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
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

    if (isSuccess) {
      router.refresh();
    }
  };

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={closeHandler}
      modalOption={{
        title: '프로필 업데이트',
        successMessage: '프로필 업데이트가 완료되었습니다.',
      }}
      apiStatus={{
        isPending,
        isSuccess,
        isError,
        error,
      }}
    />
  );
};

export default ProfileUpdateModal;
