import { Post } from '@/entities/post/model/type';
import { formatDate } from '@/shared/lib/format';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import Link from 'next/link';

import PostDeleteModal from '@/features/post/ui/post-delete-modal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { ImageViewer } from '@/shared/ui/image-viewer';
import { overlay } from 'overlay-kit';
import { LuArrowRightLeft, LuMoreHorizontal, LuUser2 } from 'react-icons/lu';

interface PostCardProps {
  post: Post;
  showMissionTitle?: boolean;
  username?: string;
}

const PostCard = ({
  post,
  showMissionTitle = false,
  username,
}: PostCardProps) => {
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

  const isOwner = username === nickname;

  const openDeleteModal = () => {
    overlay.open(({ isOpen, close }) => {
      return (
        <PostDeleteModal
          formData={{
            id: post.id,
          }}
          isOpen={isOpen}
          onClose={close}
        />
      );
    });
  };

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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 overflow-hidden">
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

          <div className="min-w-6">
            {isOwner && (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <LuMoreHorizontal className="h-6 w-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href={`/post/edit/${post.id}`}>
                    <DropdownMenuItem>수정</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem
                    onClick={openDeleteModal}
                    className="text-red-600"
                  >
                    삭제
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <ImageViewer
          containerClassName="relative aspect-square max-h-60 min-h-10 w-full grow overflow-hidden rounded-2xl"
          images={[imageUrl]}
        />

        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default PostCard;
