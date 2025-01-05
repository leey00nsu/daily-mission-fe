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
  headerOption = defaultHeaderOption,
  navigationOption = defaultNavigationOption,
  className,
  children,
  showScrollButton,
}: PageContainerProps) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="relative flex min-h-screen w-full max-w-2xl flex-col items-center border-x border-slate-200">
        <Header headerOption={headerOption} />
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
        <Navigation navigationOption={navigationOption} />
      </div>
      <Toaster />
    </div>
  );
};

export default PageContainer;
