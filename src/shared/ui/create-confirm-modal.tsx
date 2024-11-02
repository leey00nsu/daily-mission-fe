import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';

interface CreateConfirmModalProps {
  isOpen: boolean;
  onClose: (param: boolean) => void;
}

const CreateConfirmModal = ({ isOpen, onClose }: CreateConfirmModalProps) => {
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
          <DialogTitle>작성</DialogTitle>
        </DialogHeader>
        <div>
          <p>정말 작성하시겠습니까?</p>
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={cancleHandler} variant="outline">
            취소
          </Button>
          <Button onClick={agreeHandler} variant="default">
            작성
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateConfirmModal;
