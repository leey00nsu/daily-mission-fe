import { UpdatePostRequest } from '@/entities/post/model/type';
import { useUpdatePost } from '@/features/post/api/use-post-service';
import CommonModal from '@/shared/ui/common-modal';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface PostUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: UpdatePostRequest;
}

const PostUpdateModal = ({
  isOpen,
  onClose,
  formData,
}: PostUpdateModalProps) => {
  const router = useRouter();

  const {
    isPending,
    mutate: updatePost,
    error,
    isSuccess,
    isError,
  } = useUpdatePost();

  useEffect(() => {
    updatePost(formData);
  }, []);

  const closeHandler = () => {
    onClose();

    if (isSuccess || isError) {
      router.back();
    }
  };

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={closeHandler}
      modalOption={{
        title: '포스트 수정',
        successMessage: '포스트 수정이 완료되었습니다.',
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

export default PostUpdateModal;
