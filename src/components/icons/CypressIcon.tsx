'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const CypressIcon = ({ size = 32, className = '' }: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
    >
      <motion.g
        variants={{
          initial: { scale: 1 },
          hover: { 
            scale: [1, 1.05, 1],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
        }}
        style={{ originX: "64px", originY: "64px" }}
      >
        {/* The 'c' */}
        <motion.path
          d="M 60 48
             C 52 42, 40 43, 34 50
             C 26 59, 26 73, 34 82
             C 41 90, 52 90, 60 84"
          fill="none"
          stroke="#10b981" /* Primary green */
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            initial: { pathLength: 1, transition: { duration: 0.2 } },
            hover: {
              pathLength: [0, 1, 1, 1],
              transition: { 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.3, 0.9, 1],
                repeatDelay: 0.5
              }
            }
          }}
        />

        {/* The 'y' */}
        <motion.path
          d="M 64 48 L 78 75 L 61 113 L 73 113 L 95 48"
          fill="none"
          stroke="#10b981"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            initial: { pathLength: 1, transition: { duration: 0.2 } },
            hover: {
              pathLength: [0, 0, 1, 1],
              transition: { 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.25, 0.55, 1],
                repeatDelay: 0.5
              }
            }
          }}
        />

        {/* The surrounding circle */}
        <motion.circle
          cx="64" cy="64" r="50"
          fill="none"
          stroke="#10b981"
          strokeWidth="8"
          strokeLinecap="round"
          transform="rotate(-90 64 64)"
          variants={{
            initial: { pathLength: 1, transition: { duration: 0.2 } },
            hover: {
              pathLength: [0, 0, 1, 1],
              transition: { 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 0.9, 1],
                repeatDelay: 0.5
              }
            }
          }}
        />
      </motion.g>
    </motion.svg>
  )
}

export default CypressIcon;
