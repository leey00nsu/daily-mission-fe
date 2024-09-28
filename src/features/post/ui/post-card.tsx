import { Post } from '@/entities/post/model/type';
import { formatDate } from '@/shared/lib/format';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import Image from 'next/image';
import Link from 'next/link';

import { LuArrowRightLeft, LuUser2 } from 'react-icons/lu';

interface PostCardProps {
  post: Post;
  showMissionTitle?: boolean;
}

const PostCard = ({ post, showMissionTitle = false }: PostCardProps) => {
  const {
    userImageUrl,
    missionId,
    missionTitle,
    nickname,
    createdDate,
    title,
    content,
    imageUrl,
  } = post;

  return (
    <Card className="border-0 shadow-none">
        {showMissionTitle && (
          <Link
            href={`/mission/${missionId}`}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground"
          >
            <LuArrowRightLeft />
            <span>{missionTitle}</span>
          </Link>
        )}
        <CardHeader className="px-0 py-2">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={userImageUrl} />
              <AvatarFallback>
                <LuUser2 className="h-1/2 w-1/2" />
              </AvatarFallback>
            </Avatar>

            <div className="w-full overflow-hidden">
              <h3 className="truncate text-2xl font-semibold">{title}</h3>
              <h3 className="truncate">{nickname}</h3>
              <p>{formatDate(createdDate)}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="relative aspect-square max-h-60 min-h-10 w-full grow overflow-hidden rounded-2xl">
            <Image
              fill
              alt="mission image"
              src={imageUrl || ''}
              className="object-cover"
              unoptimized
            />
          </div>

          <p>{content}</p>
        </CardContent>
      </Card>
  );
};

export default PostCard;
