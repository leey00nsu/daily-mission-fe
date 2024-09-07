import NavigationButton from '@/shared/ui/navigation-button';
import { Separator } from '@/shared/ui/separator';
import {
  LuBookCopy,
  LuBookOpen,
  LuLogOut,
  LuMessageSquare,
  LuUserCog2,
} from 'react-icons/lu';

const ProfileMenu = () => {
  return (
    <div className="flex flex-col gap-2">
      <NavigationButton
        leftIcon={<LuUserCog2 />}
        title="프로필 수정"
        href="/profile/edit"
      />
      <Separator />
      <NavigationButton
        leftIcon={<LuBookOpen />}
        title="참여중인 미션"
        href="/mission/active"
      />
      <Separator />
      <NavigationButton
        leftIcon={<LuBookCopy />}
        title="참여한 모든 미션"
        href="/mission/all"
      />
      <Separator />
      <NavigationButton
        leftIcon={<LuMessageSquare />}
        title="내 포스트"
        href="/mission/post"
      />
      <Separator />
      <NavigationButton
        leftIcon={<LuLogOut />}
        title="로그아웃"
        href="/sign-out"
      />
    </div>
  );
};

export default ProfileMenu;
