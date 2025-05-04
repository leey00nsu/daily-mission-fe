import cn from '@/shared/lib/cn';
import DailyMissionLogo from '@public/Dailymission.svg';

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
}

const Logo = ({ size = 'medium', className }: LogoProps) => {
  const sizes = {
    small: 'w-12',
    medium: 'w-24',
    large: 'w-48',
    xlarge: 'w-64',
  };

  return (
    <div className={cn('flex w-full items-center justify-center', className)}>
      <div className="flex items-center justify-center">
        <DailyMissionLogo className={sizes[size]} />
      </div>
    </div>
  );
};

export default Logo;
