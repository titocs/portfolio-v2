'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const NodeJSIcon = ({ size = 32, className = '' }: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 118 128"
      width={size}
      height={size}
      className={className}
    >
      <motion.path
        fill="none"
        stroke="#10b981"
        strokeWidth="4"
        d="M116.59 86.83l-56.12 32.74a3 3 0 0 1-3 0L1.4 86.83a3 3 0 0 1-1.4-2.58V19.78a3 3 0 0 1 1.4-2.58L57.51.48a3 3 0 0 1 3 0l56.12 32.74a3 3 0 0 1 1.4 2.58v64.47a3 3 0 0 1-1.44 2.56z"
        variants={{
          hover: {
            pathLength: [1, 0, 1],
            pathOffset: [0, 1, 0],
            stroke: ["#10b981", "#34d399", "#10b981"],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        }}
      />
      <motion.path
        fill="#10b981"
        d="M62.06 68.74c-.46 3-2.14 5.38-4.14 7.6-5 5.56-12.7 7.08-19.8 4.67-4.13-1.42-7.5-4.22-9.76-8.03-1.12-1.84-2-3.8-2.54-5.83v-4.13l13.13 2.6c0 1.25.13 2.5.58 3.58 1.15 3.32 4.1 5.37 7.43 5.36 2.5-.06 4.68-1.54 5.52-3.8.44-1.25.4-2.73-.25-3.87-1-1.3-2.56-2.12-4.14-2.54-18.7-4-23.75-10.65-23.2-20.25.32-4.5 2.65-8.54 6.24-11.23 4.2-3.14 9.4-4.53 14.53-4.5h3.66c4.64.44 9.1 2.22 12.75 5.08 3.54 2.66 5.86 6.57 6.64 10.97h2V31h-14l-11-20L17 26.5v2L32 17v22h8v24H28v17l31 18.5V68.74"
        variants={{
          hover: {
            fillOpacity: [1, 0.4, 1],
            transition: { duration: 1.5, repeat: Infinity }
          }
        }}
      />
      {/* Abstract node connections */}
      <motion.circle 
        cx="59" cy="64" r="5" fill="#10b981"
        variants={{ hover: { scale: [1, 2, 1], opacity: [1, 0, 1], transition: { duration: 1.5, repeat: Infinity } } }}
      />
      <motion.circle 
        cx="40" cy="40" r="3" fill="#10b981"
        variants={{ hover: { scale: [1, 2, 1], opacity: [1, 0, 1], transition: { duration: 1.5, repeat: Infinity, delay: 0.5 } } }}
      />
      <motion.circle 
        cx="75" cy="80" r="4" fill="#10b981"
        variants={{ hover: { scale: [1, 2, 1], opacity: [1, 0, 1], transition: { duration: 1.5, repeat: Infinity, delay: 0.2 } } }}
      />
      <motion.path 
        d="M40 40 L59 64 L75 80" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" fill="none"
        variants={{
            hover: { strokeDashoffset: [0, 20], transition: { duration: 1, repeat: Infinity, ease: "linear" } }
        }}
      />
    </motion.svg>
  )
}

export default NodeJSIcon;
