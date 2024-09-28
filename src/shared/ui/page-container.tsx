import cn from '@/shared/lib/cn';
import ScrollTopButton from '@/shared/ui/scroll-top-button';
import Header, { HeaderProps } from '@/widgets/header/ui/header';
import Navigation from '@/widgets/navigation/ui/navigation';

interface PageContainerPropsBase {
  navigationShown?: boolean;
  className?: string;
  children: React.ReactNode;
  showScrollButton?: boolean;
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
  showScrollButton,
}: PageContainerProps) => {
  const headerFixed = headerOptions?.fixed ?? true;
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="relative flex min-h-screen w-full max-w-2xl flex-col items-center border-x border-slate-200">
        {headerShown && headerOptions && <Header {...headerOptions} />}
        <main
          className={cn(
            headerShown && headerFixed && 'mt-16',
            navigationShown && 'mb-16',
            'relative flex w-full max-w-2xl grow flex-col p-4',
            className,
          )}
        >
          {children}
        </main>
        {showScrollButton && (
          <ScrollTopButton navigationShown={navigationShown} />
        )}
        {navigationShown && <Navigation />}
      </div>
    </div>
  );
};

export default PageContainer;
