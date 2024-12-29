'use client';

import { Notification } from '@/entities/notification/model/type';
import { useReadNotification } from '@/features/notification/api/use-notification-service';
import cn from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { Card, CardHeader } from '@/shared/ui/card';
import { LuMessageCircle } from 'react-icons/lu';

interface NotificationCardProps extends Notification {}

const NotificationCard = (props: NotificationCardProps) => {
  const { content, checked, id } = props;
  const { mutate: readNotification } = useReadNotification();

  const readHandler = () => {
    readNotification({
      id,
    });
  };

  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader className="px-0 py-2">
        <div className="flex items-center justify-between">
          <div
            className={cn(
              'flex items-center gap-4 overflow-hidden',
              checked ? 'text-muted-foreground' : 'text-primary',
            )}
          >
            <LuMessageCircle className="h-8 w-8" />

            <div className="w-full overflow-hidden">
              <h3 className="text-xl font-semibold">{content}</h3>
              {/* <p>{body}</p>
              <p>{formatDate(date)}</p> */}
            </div>
          </div>

          <div>
            {checked ? (
              <Button disabled variant="ghost" className="text-primary">
                읽음
              </Button>
            ) : (
              <Button
                onClick={readHandler}
                variant="ghost"
                className="text-primary"
              >
                확인
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default NotificationCard;
