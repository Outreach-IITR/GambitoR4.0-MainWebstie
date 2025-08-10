import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollFadeProps {
  children: ReactNode;
}

export default function ScrollFade({ children }: ScrollFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
