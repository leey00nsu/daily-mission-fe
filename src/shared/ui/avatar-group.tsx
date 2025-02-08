import { Participant } from '@/entities/user/model/type';
import { Avatar } from '@/shared/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';

interface AvatarGroupProps {
  avatars: Pick<Participant, 'imageUrl' | 'nickname'>[];
  maxAvatars?: number;
}

const AvatarGroup = ({ avatars, maxAvatars = 3 }: AvatarGroupProps) => {
  return (
    <div className="flex -space-x-4">
      {avatars.slice(0, maxAvatars).map((avatar, index) => (
        <Popover key={index}>
          <PopoverTrigger>
            <Avatar
              className="h-10 w-10"
              imageUrl={avatar.imageUrl}
              nickname={avatar.nickname}
            />
          </PopoverTrigger>
          <PopoverContent>
            <p>{avatar.nickname}</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
};

export default AvatarGroup;
