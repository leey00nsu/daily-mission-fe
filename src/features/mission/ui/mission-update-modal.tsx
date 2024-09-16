import { UpdateMissionRequest } from '@/entities/mission/model/type';
import { useUpdateMission } from '@/features/mission/api/use-mission-service';
import { Button } from '@/shared/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
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

interface MissionUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: UpdateMissionRequest;
}

const MissionUpdateModal = ({
  isOpen,
  onClose,
  formData,
}: MissionUpdateModalProps) => {
  const router = useRouter();

  const { data: updateMissionResult, mutate: updateMission } =
    useUpdateMission();

  useEffect(() => {
    updateMission(formData);
  }, [formData]);

  const closeHandler = () => {
    onClose();

    if (updateMissionResult) {
      router.push('/');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeHandler}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>미션 수정</DialogTitle>
        </DialogHeader>
        {!updateMissionResult && (
          <div className="flex items-center justify-center">
            <LuLoader2 className="h-8 w-8 animate-spin" />
          </div>
        )}
        {updateMissionResult && (
          <div className="flex flex-col gap-2">
            <p>미션 수정이 완료되었습니다.</p>
            <Card>
              <CardHeader>
                <CardDescription>미션 참여 코드</CardDescription>
                <CardTitle>{updateMissionResult.credential}</CardTitle>
              </CardHeader>
            </Card>

            <DialogClose asChild>
              <Button type="button">확인</Button>
            </DialogClose>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MissionUpdateModal;
