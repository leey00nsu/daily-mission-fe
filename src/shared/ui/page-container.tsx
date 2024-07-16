import cn from '@/shared/lib/cn';
import Header, { HeaderProps } from '@/widgets/header/ui/header';
import Navigation from '@/widgets/navigation/ui/navigation';

interface PageContainerPropsBase {
  navigationShown?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface PageContainerPropsWithHeader extends PageContainerPropsBase {
  headerShown: true;
  headerOptions: HeaderProps;
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
  const headerFixed = headerOptions?.fixed ?? true;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {headerShown && headerOptions && <Header {...headerOptions} />}
      <div
        className={cn(
          headerShown && headerFixed && 'mt-16',
          navigationShown && 'mb-16',
          'relative flex w-full max-w-2xl grow flex-col p-4',
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
