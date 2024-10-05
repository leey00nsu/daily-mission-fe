import { CreateMissionRequest } from '@/entities/mission/model/type';
import { useCreateMission } from '@/features/mission/api/use-mission-service';
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

interface MissionCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: CreateMissionRequest;
}

const MissionCreateModal = ({
  isOpen,
  onClose,
  formData,
}: MissionCreateModalProps) => {
  const router = useRouter();

  const { data: createMissionResult, mutate: createMission } =
    useCreateMission();

  useEffect(() => {
    createMission(formData);
  }, []);

  const closeHandler = () => {
    onClose();

    if (createMissionResult) {
      router.push('/');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeHandler}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>미션 생성</DialogTitle>
        </DialogHeader>
        {!createMissionResult && (
          <div className="flex items-center justify-center">
            <LuLoader2 className="h-8 w-8 animate-spin" />
          </div>
        )}
        {createMissionResult && (
          <div className="flex flex-col gap-2">
            <p>미션 생성이 완료되었습니다.</p>
            <Card>
              <CardHeader>
                <CardDescription>미션 참여 코드</CardDescription>
                <CardTitle>{createMissionResult.credential}</CardTitle>
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

export default MissionCreateModal;
