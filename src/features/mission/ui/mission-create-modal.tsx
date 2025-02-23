import { CreateMissionRequest } from '@/entities/mission/model/type';
import { useCreateMission } from '@/features/mission/api/use-mission-service';
import { Card, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import CommonModal from '@/shared/ui/common-modal';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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

  const {
    data: createMissionResult,
    mutate: createMission,
    isPending,
    isSuccess,
    isError,
    error,
  } = useCreateMission();

  useEffect(() => {
    createMission(formData);
  }, []);

  const closeHandler = () => {
    onClose();

    if (isSuccess) {
      router.replace('/');
    }
  };

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={closeHandler}
      modalOption={{
        title: '미션 생성',
        successMessage: '미션 생성이 완료되었습니다.',
        successComponent: (
          <Card>
            <CardHeader>
              <CardDescription>미션 참여 코드</CardDescription>
              <CardTitle>{createMissionResult?.credential}</CardTitle>
            </CardHeader>
          </Card>
        ),
      }}
      apiStatus={{
        isPending,
        isSuccess,
        isError,
        error,
      }}
    />
  );
};

export default MissionCreateModal;
