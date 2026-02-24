'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const DotNetIcon = ({ size = 32, className = '' }: IconProps) => {
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
            transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } 
          }
        }}
        style={{ originX: "50%", originY: "50%" }}
      >
        {/* The Hexagon Path Base */}
        <motion.path
          d="M 64 8 
             L 115 37 
             L 115 91 
             L 64 120 
             L 13 91 
             L 13 37 Z"
          fill="#10b981"
          stroke="#10b981"
          strokeWidth="6"
          strokeLinejoin="round"
          variants={{
            initial: { 
              pathLength: 1, 
              fillOpacity: 1,
              transition: { duration: 0.1 } 
            },
            hover: {
               pathLength: [0, 1, 1],
               fillOpacity: [0, 0, 1],
               transition: { 
                 duration: 2.5, 
                 repeat: Infinity, 
                 ease: "easeInOut",
                 times: [0, 0.4, 0.5]
               }
            }
          }}
        />

        {/* Text Container (Masked to slide from inside/right) */}
        <motion.g
          variants={{
            initial: { x: 0, opacity: 1 },
            hover: {
              x: [20, 20, 0],
              opacity: [0, 0, 1],
              transition: { 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeOut",
                times: [0, 0.4, 0.6]
              }
            }
          }}
        >
          {/* .NET Text */}
          <text
            x="64" y="65" 
            fontSize="32" 
            fontWeight="700" 
            fill="#ffffff" 
            textAnchor="middle" 
            fontFamily="Arial, sans-serif"
            letterSpacing="1"
          >
            .NET
          </text>
          
          {/* Core Text */}
          <text
            x="64" y="93" 
            fontSize="22" 
            fontWeight="400" 
            fill="#ffffff" 
            textAnchor="middle" 
            fontFamily="Arial, sans-serif"
          >
            Core
          </text>
        </motion.g>
      </motion.g>
    </motion.svg>
  )
}

export default DotNetIcon;
