import { Post } from '@/entities/post/model/type';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';

import { LuUser2 } from 'react-icons/lu';

interface MissionPostCardProps {
  post: Post;
}

const MissionPostCard = ({ post }: MissionPostCardProps) => {
  const { userImgUrl, userName, createdDate, content } = post;
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="px-0 py-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={userImgUrl} />
            <AvatarFallback>
              <LuUser2 className="h-1/2 w-1/2" />
            </AvatarFallback>
          </Avatar>

          <div className="w-full">
            <h3 className="text-2xl font-semibold">{userName}</h3>
            <p>{createdDate}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default MissionPostCard;
