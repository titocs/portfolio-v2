'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const BootstrapIcon = ({ size = 32, className = '' }: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
    >
      <motion.rect
        x="15" y="15" width="70" height="70" rx="15"
        fill="none" stroke="#10b981" strokeWidth="6"
        variants={{
            initial: { rotate: 0, strokeDasharray: "300, 0" },
            hover: {
                rotate: [0, -10, 10, 0],
                strokeDasharray: ["0, 300", "300, 0"],
                transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }
        }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
      <motion.path
        d="M38 30 h15 c8 0, 12 4, 12 10 c0 5, -3 8, -8 9 c7 1, 11 5, 11 11 c0 7, -5 12, -14 12 h-16 v-42 z"
        fill="#10b981"
        variants={{
            initial: { scale: 1, opacity: 1 },
            hover: {
                scale: [1, 1.1, 1],
                opacity: [1, 0.7, 1],
                transition: { duration: 1, repeat: Infinity }
            }
        }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
      <motion.path
        d="M44 36 v10 h9 c4 0, 6 -2, 6 -5 c0 -3, -2 -5, -6 -5 h-9 z M44 52 v12 h10 c4 0, 7 -2, 7 -6 c0 -4, -3 -6, -7 -6 h-10 z"
        fill="#050505"
        variants={{
            initial: { x: 0, y: 0 },
            hover: {
                x: [-2, 2, -2],
                y: [2, -2, 2],
                transition: { duration: 1.5, repeat: Infinity }
            }
        }}
      />
    </motion.svg>
  )
}

export default BootstrapIcon;
