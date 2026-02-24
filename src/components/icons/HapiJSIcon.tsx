'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const HapiJSIcon = ({ size = 32, className = '' }: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
    >
      <motion.circle 
        cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="6"
        variants={{ hover: { scale: [1, 1.1, 1], transition: { duration: 1.5, repeat: Infinity } } }}
      />
      {/* Eyes */}
      <motion.circle cx="35" cy="40" r="6" fill="#10b981" variants={{ hover: { scaleY: [1, 0.1, 1], transition: { duration: 1, repeat: Infinity } } }} />
      <motion.circle cx="65" cy="40" r="6" fill="#10b981" variants={{ hover: { scaleY: [1, 0.1, 1], transition: { duration: 1, repeat: Infinity, delay: 0.1 } } }} />
      {/* Smile */}
      <motion.path
        d="M30 60 Q50 80 70 60" fill="none" stroke="#10b981" strokeWidth="6" strokeLinecap="round"
        variants={{ hover: { d: ["M30 60 Q50 80 70 60", "M30 55 Q50 90 70 55", "M30 60 Q50 80 70 60"], transition: { duration: 1.5, repeat: Infinity } } }}
      />
    </motion.svg>
  )
}

export default HapiJSIcon;
