import { JoinMissionRequest } from '@/entities/mission/model/type';
import { useJoinMission } from '@/features/mission/api/use-mission-service';
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

interface JoinMissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: JoinMissionRequest;
}

const JoinMissionModal = ({
  isOpen,
  onClose,
  formData,
}: JoinMissionModalProps) => {
  const router = useRouter();

  const {
    mutate: joinMission,
    isSuccess,
    isError,
    isPending,
    error,
  } = useJoinMission();

  useEffect(() => {
    joinMission(formData);
  }, []);

  const closeHandler = () => {
    onClose();

    if (isSuccess) {
      router.push('/');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeHandler}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>미션 참여</DialogTitle>
        </DialogHeader>
        {isPending && (
          <div className="flex items-center justify-center">
            <LuLoader2 className="h-8 w-8 animate-spin" />
          </div>
        )}
        {isSuccess && (
          <div className="flex flex-col gap-2">
            <p>미션 참여가 완료되었습니다.</p>

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

export default JoinMissionModal;
