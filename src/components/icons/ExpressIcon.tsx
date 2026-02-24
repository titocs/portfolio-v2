'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const ExpressIcon = ({ size = 32, className = '' }: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
    >
      <motion.text
        x="50" y="65" fontSize="36" fontWeight="bold" fill="#10b981" textAnchor="middle" fontFamily="sans-serif" letterSpacing="-2px"
        variants={{ hover: { opacity: [1, 0.5, 1], scale: [1, 1.05, 1], transition: { duration: 1.5, repeat: Infinity } } }}
      >
        ex
      </motion.text>
      {/* Dynamic line strike representing "press" */}
      <motion.line
        x1="10" y1="50" x2="90" y2="50" stroke="#10b981" strokeWidth="4" strokeLinecap="round"
        variants={{
            hover: {
                strokeDasharray: ["0, 100", "100, 0"],
                strokeDashoffset: [100, -100],
                transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
            }
        }}
      />
    </motion.svg>
  )
}

export default ExpressIcon;
