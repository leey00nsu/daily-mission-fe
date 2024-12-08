import { Card, CardContent, CardHeader } from '@/shared/ui/card';

interface NotificationCardProps {
  title: string;
  body: string;
}

const NotificationCard = ({ title, body }: NotificationCardProps) => {
  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader className="px-0 py-2">
        <p>{title}</p>
      </CardHeader>
      <CardContent className="p-6">
        <p>{body}</p>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
