import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { LuCirclePlus, LuHouse, LuUser } from 'react-icons/lu';

export interface NavigationProps {
  visible?: boolean;
}

const Navigation = ({
  navigationOption,
}: {
  navigationOption: NavigationProps;
}) => {
  if (!navigationOption.visible) return null;

  return (
    <nav className="fixed bottom-0 z-10 flex h-16 w-full min-w-80 max-w-2xl items-center justify-around border-x border-t border-t-slate-200 bg-background p-4">
      <Button asChild variant="ghost" className="h-10 w-10 p-2">
        <Link href="/">
          <LuHouse className="h-full w-full" />
        </Link>
      </Button>
      {/* <Button asChild variant="ghost" className="h-10 w-10 p-2">
        <Link href="/">
          <LuCalendarCheck className="h-full w-full" />
        </Link>
      </Button> */}
      <Button asChild variant="ghost" className="h-10 w-10 p-2">
        <Link href="/mission/new">
          <LuCirclePlus className="h-full w-full" />
        </Link>
      </Button>
      {/* <Button asChild variant="ghost" className="h-10 w-10 p-2">
        <Link href="/">
          <LuBell className="h-full w-full" />
        </Link>
      </Button> */}
      <Button asChild variant="ghost" className="h-10 w-10 p-2">
        <Link href="/profile">
          <LuUser className="h-full w-full" />
        </Link>
      </Button>
    </nav>
  );
};

export default Navigation;
