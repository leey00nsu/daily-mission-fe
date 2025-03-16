import cn from '@/shared/lib/cn';
import ScrollTopButton from '@/shared/ui/scroll-top-button';
import { Toaster } from '@/shared/ui/sonner';
import Header, { HeaderProps } from '@/widgets/header/ui/header';
import Navigation, {
  NavigationProps,
} from '@/widgets/navigation/ui/navigation';

interface PageContainerProps {
  headerOption?: HeaderProps;
  navigationOption?: NavigationProps;
  className?: string;
  children: React.ReactNode;
  showScrollButton?: boolean;
}

const defaultHeaderOption: HeaderProps = {
  visible: true,
  fixed: true,
};

const defaultNavigationOption: NavigationProps = {
  visible: true,
};

const PageContainer = ({
  headerOption,
  navigationOption,
  className,
  children,
  showScrollButton,
}: PageContainerProps) => {
  navigationOption = {
    ...defaultNavigationOption,
    ...navigationOption,
  };

  headerOption = {
    ...defaultHeaderOption,
    ...headerOption,
  };

  return (
    <div className="flex min-h-dvh w-full min-w-80 items-center justify-center">
      <div className="relative flex min-h-dvh w-full max-w-2xl flex-col items-center border-x border-slate-200">
        {headerOption?.visible && <Header headerOption={headerOption} />}
        <main
          className={cn(
            navigationOption?.visible && 'mb-16',
            'relative flex w-full max-w-2xl grow flex-col px-4',
            className,
          )}
        >
          {children}
        </main>
        {showScrollButton && (
          <ScrollTopButton navigationOption={navigationOption} />
        )}
        {navigationOption?.visible && (
          <Navigation navigationOption={navigationOption} />
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default PageContainer;
