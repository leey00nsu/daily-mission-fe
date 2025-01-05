import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: (param: boolean) => void;
}

const DeleteConfirmModal = ({ isOpen, onClose }: DeleteConfirmModalProps) => {
  const agreeHandler = () => {
    onClose(true);
  };

  const cancleHandler = () => {
    onClose(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={cancleHandler}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>삭제</DialogTitle>
        </DialogHeader>
        <div>
          <p>정말 삭제하시겠습니까?</p>
          <p className="text-muted-foreground">
            삭제 후에는 복구할 수 없습니다.
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={cancleHandler} variant="outline">
            취소
          </Button>
          <Button onClick={agreeHandler} variant="destructive">
            삭제
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmModal;
