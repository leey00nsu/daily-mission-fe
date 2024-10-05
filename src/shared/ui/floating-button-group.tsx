import React from 'react';

interface FloatingButtonGroupProps {
  children: React.ReactNode;
}

const FloatingButtonGroup = ({ children }: FloatingButtonGroupProps) => {
  return (
    <section className="sticky bottom-0 flex w-full max-w-2xl flex-col gap-2 p-4">
      {children}
    </section>
  );
};

export default FloatingButtonGroup;
