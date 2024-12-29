import { CreatePostRequest } from '@/entities/post/model/type';
import { useCreatePost } from '@/features/post/api/use-post-service';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { Spinner } from '@/shared/ui/spinner';
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
      router.push(`/mission/${formData.missionId}`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeHandler}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>포스트 작성</DialogTitle>
        </DialogHeader>
        {isPending && (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        )}
        {isSuccess && (
          <div className="flex flex-col gap-2">
            <p>포스트 작성이 완료되었습니다.</p>

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

export default PostCreateModal;
