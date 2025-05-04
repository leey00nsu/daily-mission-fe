import { motion } from 'motion/react';
import React from 'react';

interface FloatingButtonGroupProps {
  children: React.ReactNode;
}

const FloatingButtonGroup = ({ children }: FloatingButtonGroupProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky bottom-0 z-30 flex w-full max-w-2xl flex-col gap-2 p-4"
    >
      {children}
    </motion.section>
  );
};

export default FloatingButtonGroup;
