'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const AWSIcon = ({ size = 32, className = '' }: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
    >
      <motion.text
        x="50" y="55" fontSize="36" fontWeight="bold" fill="#10b981" textAnchor="middle" fontFamily="sans-serif"
        variants={{ hover: { y: [-2, 2, -2], transition: { duration: 2, repeat: Infinity } } }}
      >
        AWS
      </motion.text>
      {/* Smile arrow */}
      <motion.path
        d="M20 70 Q50 90 80 65" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round"
        variants={{
            hover: { 
                pathLength: [0, 1, 0], 
                strokeWidth: [4, 6, 4],
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } 
            }
        }}
      />
      {/* Arrow head */}
      <motion.polygon
        points="75 60 85 62 82 72" fill="#10b981"
        variants={{
            hover: { 
                scale: [1, 1.5, 1], 
                rotate: [-10, 10, -10],
                transition: { duration: 1.5, repeat: Infinity } 
            }
        }}
      />
    </motion.svg>
  )
}

export default AWSIcon;
