import cn from '@/shared/lib/cn';
import Header, { HeaderIcon } from '@/widgets/header/ui/header';
import Navigation from '@/widgets/navigation/ui/navigation';

interface HeaderOptions {
  leftIcon?: HeaderIcon;
  title: string;
  rightIcon?: HeaderIcon;
}

interface PageContainerPropsBase {
  navigationShown?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface PageContainerPropsWithHeader extends PageContainerPropsBase {
  headerShown: true;
  headerOptions: HeaderOptions;
}

interface PageContainerPropsWithoutHeader extends PageContainerPropsBase {
  headerShown?: false;
  headerOptions?: never;
}

type PageContainerProps =
  | PageContainerPropsWithHeader
  | PageContainerPropsWithoutHeader;

const PageContainer = ({
  headerShown = false,
  headerOptions,
  navigationShown = false,
  className,
  children,
}: PageContainerProps) => {
  return (
    <main className="flex min-h-screen justify-center">
      {headerShown && headerOptions && <Header {...headerOptions} />}
      <div
        className={cn(
          headerShown && 'mt-16',
          navigationShown && 'mb-16',
          'relative flex max-w-2xl grow flex-col p-4',
          className,
        )}
      >
        {children}
      </div>
      {navigationShown && <Navigation />}
    </main>
  );
};

export default PageContainer;
