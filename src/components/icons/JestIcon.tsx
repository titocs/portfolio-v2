'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const JestIcon = ({ size = 32, className = '' }: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
    >
      <motion.path
        d="M40 80 C20 80, 20 60, 20 60 C20 40, 40 40, 40 40 L60 20 C70 10, 80 20, 80 30 C80 40, 60 40, 60 40"
        fill="none" stroke="#10b981" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
        variants={{ hover: { rotate: [-5, 5, -5], transformOrigin: "40px 60px", transition: { duration: 1, repeat: Infinity } } }}
      />
      <motion.circle 
        cx="75" cy="25" r="5" fill="#10b981"
        variants={{ hover: { scale: [1, 2, 1], transition: { duration: 1, repeat: Infinity, delay: 0.2 } } }}
      />
      <motion.circle 
        cx="25" cy="55" r="4" fill="#10b981"
        variants={{ hover: { scale: [1, 2, 1], transition: { duration: 1, repeat: Infinity, delay: 0.5 } } }}
      />
    </motion.svg>
  )
}

export default JestIcon;
