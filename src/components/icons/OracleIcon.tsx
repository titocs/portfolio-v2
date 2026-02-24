'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const OracleIcon = ({ size = 32, className = '' }: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
    >
      <motion.path
        d="M20 50 C20 20, 80 20, 80 50 C80 80, 20 80, 20 50"
        fill="none" stroke="#10b981" strokeWidth="8"
        variants={{ hover: { strokeWidth: [8, 12, 8], transition: { duration: 1.5, repeat: Infinity } } }}
      />
      <motion.path
        d="M30 50 C30 30, 70 30, 70 50 C70 70, 30 70, 30 50"
        fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5"
        variants={{ hover: { rotate: [-10, 10, -10], transformOrigin: "50px 50px", transition: { duration: 2, repeat: Infinity } } }}
      />
      {/* Central data core */}
      <motion.rect 
        x="45" y="45" width="10" height="10" fill="#10b981"
        variants={{ hover: { scale: [1, 0, 1], rotate: [0, 90], transition: { duration: 1, repeat: Infinity } } }}
      />
    </motion.svg>
  )
}

export default OracleIcon;
