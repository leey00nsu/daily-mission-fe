import { DeleteMissionRequest } from '@/entities/mission/model/type';
import { useDeleteMission } from '@/features/mission/api/use-mission-service';
import CommonModal from '@/shared/ui/common-modal';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
    mutate: deleteMission,
    isPending,
    isSuccess,
    isError,
    error,
  } = useDeleteMission();

  useEffect(() => {
    deleteMission(formData);
  }, []);

  const closeHandler = () => {
    onClose();

    if (isSuccess) {
      router.replace(`/`);
    }
  };

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={closeHandler}
      modalOption={{
        title: '미션 삭제',
        successMessage: '미션 삭제가 완료되었습니다.',
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

export default MissionDeleteModal;
