// Animations.tsx

'use client';

// Step 1: Change the import to framer-motion for better component support
import { motion, type TargetAndTransition } from 'framer-motion'; 
import React from 'react';

// Step 2: Define the types for our new props
interface AnimationProps {
  children: React.ReactNode;
  hoverEffect?: TargetAndTransition; // '?' makes it optional
  tapEffect?: TargetAndTransition;   // '?' makes it optional
}

// Step 3: Use the props in the component, providing default values
export default function Animations({ 
  children, 
  hoverEffect = { scale: 1.015 }, // Default hover effect
  tapEffect = { scale: 0.990 }    // Default tap effect
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