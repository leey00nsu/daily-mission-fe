import { useJoinMission } from '@/features/mission/api/use-mission-service';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { JoinMissionRequest } from '@/types/mission';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LuLoader2 } from 'react-icons/lu';

interface MissionJoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: JoinMissionRequest;
}

const MissionJoinModal = ({
  isOpen,
  onClose,
  formData,
}: MissionJoinModalProps) => {
  const router = useRouter();

  const { data: joinMissionResult, mutate: joinMission } = useJoinMission();

  useEffect(() => {
    joinMission(formData);
  }, [formData]);

  const closeHandler = () => {
    onClose();

    if (joinMissionResult) {
      router.push('/');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeHandler}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>미션 참여</DialogTitle>
        </DialogHeader>
        {!joinMissionResult && (
          <div className="flex items-center justify-center">
            <LuLoader2 className="h-8 w-8 animate-spin" />
          </div>
        )}
        {joinMissionResult && (
          <div className="flex flex-col gap-2">
            <p>미션 참여가 완료되었습니다.</p>

            <DialogClose asChild>
              <Button type="button">확인</Button>
            </DialogClose>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MissionJoinModal;
