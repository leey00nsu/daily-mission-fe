import { DeleteMissionRequest } from '@/entities/mission/model/type';
import { useDeleteMission } from '@/features/mission/api/use-mission-service';
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

interface MissionDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: DeleteMissionRequest;
}

const MissionDeleteModal = ({
  isOpen,
  onClose,
  formData,
}: MissionDeleteModalProps) => {
  const router = useRouter();

  const {
    isPending,
    mutate: deleteMission,
    error,
    isSuccess,
    isError,
  } = useDeleteMission();

  useEffect(() => {
    deleteMission(formData);
  }, []);

  const closeHandler = () => {
    onClose();

    if (isSuccess) {
      router.back();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeHandler}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>미션 삭제</DialogTitle>
        </DialogHeader>
        {isPending && (
          <div className="flex items-center justify-center">
            <LuLoader2 className="h-8 w-8 animate-spin" />
          </div>
        )}
        {isSuccess && (
          <div className="flex flex-col gap-2">
            <p>미션 삭제가 완료되었습니다.</p>

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

export default MissionDeleteModal;
