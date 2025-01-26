import { Post } from '@/entities/post/model/type';
import { formatDate } from '@/shared/lib/format';
import { Avatar } from '@/shared/ui/avatar';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import Link from 'next/link';

import { useToggleLikePost } from '@/features/post/api/use-post-service';
import PostDeleteModal from '@/features/post/ui/post-delete-modal';
import { Button } from '@/shared/ui/button';
import DeleteConfirmModal from '@/shared/ui/delete-confirm-modal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { ImageViewer } from '@/shared/ui/image-viewer';
import { overlay } from 'overlay-kit';
import { LuArrowRightLeft, LuEllipsis, LuThumbsUp } from 'react-icons/lu';

interface PostCardProps {
  post: Post;
  showMissionTitle?: boolean;
  viewMode?: 'default' | 'compact';
  username?: string;
}

const PostCard = ({
  post,
  showMissionTitle = false,
  viewMode = 'default',
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
    likes,
    liked,
  } = post;

  const isOwner = !nickname || nickname === username;

  const { mutate: toggleLikePost } = useToggleLikePost();

  const openDeleteModal = async () => {
    const result = await overlay.openAsync<boolean>(({ isOpen, close }) => {
      return <DeleteConfirmModal isOpen={isOpen} onClose={close} />;
    });

    if (!result) return;

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

  const handleToggleLike = () => {
    toggleLikePost({ postId: post.id });
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
            {viewMode === 'default' && (
              <Avatar
                className="h-16 w-16"
                imageUrl={userImageUrl}
                nickname={nickname}
              />
            )}

            <div className="w-full overflow-hidden">
              <h3 className="text-2xl font-semibold">{title}</h3>
              {viewMode === 'default' && <h3>{nickname}</h3>}
              <p>{formatDate(createdDate)}</p>
            </div>
          </div>

          <div className="min-w-6">
            {isOwner && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <LuEllipsis className="h-6 w-6" />
                  </Button>
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

        <div className="flex gap-2">
          {/* <Button variant="ghost" className="p-2">
            <div className="flex items-center justify-center gap-1">
              <LuHeart />
              <span>0</span>
            </div>
          </Button> */}

          <Button
            onClick={handleToggleLike}
            variant={liked ? 'default' : 'ghost'}
            className="p-2"
          >
            <div className="flex items-center justify-center gap-1">
              <LuThumbsUp />
              <span>{likes}</span>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
