import { DeletePostRequest } from '@/entities/post/model/type';
import { useDeletePost } from '@/features/post/api/use-post-service';
import CommonModal from '@/shared/ui/common-modal';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface PostDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: DeletePostRequest;
}

const PostDeleteModal = ({
  isOpen,
  onClose,
  formData,
}: PostDeleteModalProps) => {
  const router = useRouter();

  const {
    isPending,
    mutate: deletePost,
    error,
    isSuccess,
    isError,
  } = useDeletePost();

  useEffect(() => {
    deletePost(formData);
  }, []);

  const closeHandler = () => {
    onClose();

    if (isSuccess || isError) {
      router.refresh();
    }
  };

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={closeHandler}
      modalOption={{
        title: '포스트 삭제',
        successMessage: '포스트 삭제가 완료되었습니다.',
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

export default PostDeleteModal;
