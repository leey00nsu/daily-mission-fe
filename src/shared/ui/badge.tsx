import cn from '@/shared/lib/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const badgeVariants = cva(
  'absolute flex transform items-center rounded-full px-2 py-1 text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      position: {
        top: 'top-0',
        bottom: 'bottom-0',
        topRight: 'top-0 right-0',
        bottomRight: 'bottom-0 right-0',
        topLeft: 'top-0 left-0',
        bottomLeft: 'bottom-0 left-0',
        left: 'left-0',
        right: 'right-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'topRight',
    },
  },
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
  content?: string | React.ReactNode;
  className?: string;
}

const Content = (content: string | React.ReactNode) => {
  switch (typeof content) {
    case 'string':
      return <p className="text-2xl font-bold">{content}</p>;

    default:
      return content;
  }
};

const Badge = ({
  children,
  content,
  variant,
  position,
  className,
}: BadgeProps) => {
  return (
    <div className="relative flex items-center justify-center">
      {children}

      <span className={cn(badgeVariants({ variant, position }), className)}>
        {Content(content)}
      </span>
    </div>
  );
};

export default Badge;
