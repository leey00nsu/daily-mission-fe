import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { LuUser2 } from 'react-icons/lu';

interface AvatarGroupProps {
  avatars: string[];
  maxAvatars?: number;
}

const AvatarGroup = ({ avatars, maxAvatars = 3 }: AvatarGroupProps) => {
  return (
    <div className="flex -space-x-4">
      {avatars.slice(0, maxAvatars).map((avatar, index) => (
        <Avatar key={index} className="border-2 border-white">
          <AvatarImage src={avatar} />
          <AvatarFallback>
            <LuUser2 className="h-1/2 w-1/2" />
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
};

export default AvatarGroup;
