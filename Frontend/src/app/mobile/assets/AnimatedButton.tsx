
'use client';

import { motion, type TargetAndTransition } from 'framer-motion'; 
import React from 'react';

interface AnimationProps {
  children: React.ReactNode;
  hoverEffect?: TargetAndTransition; 
  tapEffect?: TargetAndTransition;  
}

export default function Animations({ 
  children, 
  hoverEffect = { scale: 1.015 }, 
  tapEffect = { scale: 0.990 }   
}: AnimationProps) {
  return (
    <motion.div
      whileHover={hoverEffect}
      whileTap={tapEffect}
      className="inline-block origin-center" 
    >
      {children}
    </motion.div>
  );
}