import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import {
  LuBell,
  LuCalendarCheck,
  LuHome,
  LuPlusCircle,
  LuUser,
} from 'react-icons/lu';

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 z-10 flex h-16 w-full max-w-2xl items-center justify-around bg-background p-4">
      <Button asChild variant="ghost" className="h-10 w-10 p-2">
        <Link href="/">
          <LuHome className="h-full w-full" />
        </Link>
      </Button>
      <Button asChild variant="ghost" className="h-10 w-10 p-2">
        <Link href="/">
          <LuCalendarCheck className="h-full w-full" />
        </Link>
      </Button>
      <Button asChild variant="ghost" className="h-10 w-10 p-2">
        <Link href="/mission/new">
          <LuPlusCircle className="h-full w-full" />
        </Link>
      </Button>
      <Button asChild variant="ghost" className="h-10 w-10 p-2">
        <Link href="/">
          <LuBell className="h-full w-full" />
        </Link>
      </Button>
      <Button asChild variant="ghost" className="h-10 w-10 p-2">
        <Link href="/">
          <LuUser className="h-full w-full" />
        </Link>
      </Button>
    </nav>
  );
};

export default Navigation;
