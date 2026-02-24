'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const PWAIcon = ({ size = 32, className = '' }: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
    >
      <motion.rect
        x="35" y="20" width="30" height="60" rx="5"
        fill="none" stroke="#10b981" strokeWidth="4"
        variants={{ hover: { strokeDasharray: ["0, 180", "180, 0"], transition: { duration: 1.5, repeat: Infinity } } }}
      />
      <motion.circle 
        cx="50" cy="72" r="2" fill="#10b981"
        variants={{ hover: { scale: [1, 2, 1], transition: { duration: 1, repeat: Infinity } } }}
      />
      
      {/* WiFi Waves */}
      <motion.path 
        d="M20 50 A 40 40 0 0 1 80 50" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round"
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: [0, 1, 0], scale: [0.8, 1.1], transition: { duration: 1.5, repeat: Infinity, delay: 0.6 } } }}
      />
      <motion.path 
        d="M30 60 A 25 25 0 0 1 70 60" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round"
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: [0, 1, 0], scale: [0.8, 1.1], transition: { duration: 1.5, repeat: Infinity, delay: 0.3 } } }}
      />
      <motion.path 
        d="M40 70 A 10 10 0 0 1 60 70" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round"
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: [0, 1, 0], scale: [0.8, 1.1], transition: { duration: 1.5, repeat: Infinity } } }}
      />
    </motion.svg>
  )
}

export default PWAIcon;
