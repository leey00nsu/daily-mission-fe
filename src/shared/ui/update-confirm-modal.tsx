import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';

interface UpdateConfirmModalProps {
  isOpen: boolean;
  onClose: (param: boolean) => void;
}

const UpdateConfirmModal = ({ isOpen, onClose }: UpdateConfirmModalProps) => {
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
          <DialogTitle>수정</DialogTitle>
        </DialogHeader>
        <div>
          <p>정말 수정하시겠습니까?</p>
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={cancleHandler} variant="outline">
            취소
          </Button>
          <Button onClick={agreeHandler} variant="default">
            수정
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateConfirmModal;
