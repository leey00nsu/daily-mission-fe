import { DeletePostRequest } from '@/entities/post/model/type';
import { useDeletePost } from '@/features/post/api/use-post-service';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LuLoader2 } from 'react-icons/lu';

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
    <Dialog open={isOpen} onOpenChange={closeHandler}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>포스트 삭제</DialogTitle>
        </DialogHeader>
        {isPending && (
          <div className="flex items-center justify-center">
            <LuLoader2 className="h-8 w-8 animate-spin" />
          </div>
        )}
        {isSuccess && (
          <div className="flex flex-col gap-2">
            <p>포스트 삭제가 완료되었습니다.</p>

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

export default PostDeleteModal;
