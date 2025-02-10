import { motion } from 'motion/react';
import React from 'react';

interface FloatingButtonGroupProps {
  children: React.ReactNode;
}

const FloatingButtonGroup = ({ children }: FloatingButtonGroupProps) => {
  return (
    <section className="sticky bottom-0 z-30 flex w-full max-w-2xl flex-col gap-2 p-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default FloatingButtonGroup;
