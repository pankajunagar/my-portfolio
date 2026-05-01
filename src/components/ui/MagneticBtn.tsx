"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticBtnProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  form?: string;
  formAction?: string | ((formData: FormData) => void | Promise<void>);
  className?: string;
  magneticIntensity?: number;
}

export function MagneticBtn({ children, className, magneticIntensity = 0.5, ...props }: MagneticBtnProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * magneticIntensity, y: middleY * magneticIntensity });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative flex items-center justify-center transition-colors duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
