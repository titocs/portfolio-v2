'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const ReactIcon = ({ size = 32, className = '' }: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      width={size}
      height={size}
      className={className}
    >
      <motion.circle 
        cx="0" cy="0" r="2.05" fill="#10b981" 
        variants={{
            hover: { scale: [1, 1.3, 1], transition: { duration: 1, repeat: Infinity } }
        }}
      />
      <g stroke="#10b981" strokeWidth="1" fill="none">
        <motion.ellipse 
            rx="11" ry="4.2" 
            variants={{
                initial: { rotateZ: 0 },
                hover: { rotateZ: 180, strokeWidth: [1, 2, 1], transition: { duration: 2, repeat: Infinity, ease: 'linear' } }
            }}
        />
        <motion.ellipse 
            rx="11" ry="4.2" 
            variants={{
                initial: { rotateZ: 60 },
                hover: { rotateZ: 240, strokeWidth: [1, 2, 1], transition: { duration: 2.5, repeat: Infinity, ease: 'linear' } }
            }}
        />
        <motion.ellipse 
            rx="11" ry="4.2" 
            variants={{
                initial: { rotateZ: 120 },
                hover: { rotateZ: 300, strokeWidth: [1, 2, 1], transition: { duration: 3, repeat: Infinity, ease: 'linear' } }
            }}
        />
      </g>
    </motion.svg>
  )
}

export default ReactIcon;
