import { Participant } from '@/entities/user/model/type';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { LuUser2 } from 'react-icons/lu';

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
            <Avatar className="border-2 border-white">
              <AvatarImage src={avatar.imageUrl} />
              <AvatarFallback>
                <LuUser2 className="h-1/2 w-1/2" />
              </AvatarFallback>
            </Avatar>
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
