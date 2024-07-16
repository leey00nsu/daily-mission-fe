import cn from '@/shared/lib/cn';
import DailyMissionLogo from '@public/Dailymission.svg';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo = ({ size = 'medium', className }: LogoProps) => {
  const sizes = {
    small: 'w-12',
    medium: 'w-24',
    large: 'w-48',
  };

  return (
    <div className={cn('flex w-full items-center justify-center', className)}>
      <DailyMissionLogo className={sizes[size]} />
    </div>
  );
};

export default Logo;
