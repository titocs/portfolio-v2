'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const CICDIcon = ({ size = 32, className = '' }: IconProps) => {
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
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } 
          }
        }}
        style={{ originX: "50%", originY: "50%" }}
      >
        {/* Infinity Loop Path */}
        <motion.path
          d="M 64 64 
             C 78 44, 108 44, 108 64 
             C 108 84, 78 84, 64 64 
             C 50 44, 20 44, 20 64 
             C 20 84, 50 84, 64 64 Z"
          fill="none"
          stroke="#10b981"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{ 
            initial: { 
              pathLength: 1, 
              opacity: 1,
              transition: { duration: 0.1 }
            },
            hover: { 
              pathLength: [0, 1],
              opacity: [1, 1],
              transition: { 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatType: "loop",
                repeatDelay: 0.2
              } 
            }
          }}
        />
        
        {/* Decorative inner nodes at the center intersections */}
        <motion.circle 
          cx="64" cy="64" r="5" fill="#10b981"
          variants={{
            initial: { scale: 1, opacity: 1, transition: { duration: 0.1 } },
            hover: { 
              scale: [0, 1.3, 1], 
              opacity: [0, 1, 1],
              transition: { duration: 2, repeat: Infinity, ease: "easeOut", times: [0, 0.5, 1], repeatDelay: 0.2 } 
            }
          }}
        />
      </motion.g>
    </motion.svg>
  )
}

export default CICDIcon;
