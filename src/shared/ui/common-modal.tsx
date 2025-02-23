import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { Spinner } from '@/shared/ui/spinner';

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalOption: {
    title: string;
    successMessage: string;
    successComponent?: React.ReactNode;
    errorMessage?: string;
    errorComponent?: React.ReactNode;
    confirmButtonText?: string;
  };
  apiStatus: {
    isPending?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
    error?: Error | null;
  };
}

const CommonModal = ({
  isOpen,
  onClose,
  modalOption,
  apiStatus,
}: CommonModalProps) => {
  modalOption.confirmButtonText = modalOption.confirmButtonText || '확인';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{modalOption?.title}</DialogTitle>
        </DialogHeader>
        {apiStatus.isPending && (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        )}
        {apiStatus.isSuccess && (
          <div className="flex flex-col gap-2">
            <p>{modalOption?.successMessage}</p>
            {modalOption.successComponent}

            <DialogClose asChild>
              <Button type="button">{modalOption.confirmButtonText}</Button>
            </DialogClose>
          </div>
        )}
        {apiStatus.isError && (
          <div className="flex flex-col gap-2">
            <p>{modalOption?.errorMessage || apiStatus.error?.message}</p>
            {modalOption.errorComponent}

            <DialogClose asChild>
              <Button type="button">{modalOption.confirmButtonText}</Button>
            </DialogClose>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CommonModal;
