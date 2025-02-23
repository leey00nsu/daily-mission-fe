import { CreatePostRequest } from '@/entities/post/model/type';
import { useCreatePost } from '@/features/post/api/use-post-service';
import CommonModal from '@/shared/ui/common-modal';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface PostCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: CreatePostRequest;
}

const PostCreateModal = ({
  isOpen,
  onClose,
  formData,
}: PostCreateModalProps) => {
  const router = useRouter();

  const {
    isPending,
    mutate: createPost,
    error,
    isSuccess,
    isError,
  } = useCreatePost();

  useEffect(() => {
    createPost(formData);
  }, []);

  const closeHandler = () => {
    onClose();

    if (isSuccess || isError) {
      router.replace(`/mission/${formData.missionId}`);
    }
  };

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={closeHandler}
      modalOption={{
        title: '포스트 작성',
        successMessage: '포스트 작성이 완료되었습니다.',
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

export default PostCreateModal;
