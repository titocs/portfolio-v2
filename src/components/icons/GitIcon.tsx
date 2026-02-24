'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const GitIcon = ({ size = 32, className = '' }: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={className}
    >
      {/* Container to group all Git elements */}
      <motion.g
        variants={{
          initial: { 
            scale: 1, 
            y: 0 
          },
          hover: { 
            scale: [1, 1.02, 1],
            y: [-1, 1, -1],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        }}
      >
        {/* Background Diamond */}
        <motion.rect
          x="26" y="26" width="76" height="76" rx="14"
          transform="rotate(45 64 64)"
          fill="#10b981"
          stroke="#10b981"
          strokeWidth="4"
          variants={{
            initial: { fillOpacity: 0.1, pathLength: 1, opacity: 1 },
            hover: { 
              fillOpacity: [0, 0, 0.1, 0.1], 
              pathLength: [0, 1, 1, 1],
              opacity: [0, 1, 1, 1],
              transition: { duration: 2, repeat: Infinity, times: [0, 0.3, 0.4, 1], ease: "easeInOut" }
            }
          }}
        />

        {/* Trunk (Vertical Line) */}
        <motion.path
          d="M53 81 L53 47"
          stroke="#10b981"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          variants={{
            initial: { pathLength: 1, opacity: 1 },
            hover: { 
              pathLength: [0, 0, 1, 1],
              opacity: [0, 1, 1, 1], 
              transition: { duration: 2, repeat: Infinity, times: [0, 0.2, 0.7, 1], ease: "easeInOut" }
            }
          }}
        />

        {/* Branch (Diagonal Line) */}
        <motion.path
          d="M53 64 L69 48"
          stroke="#10b981"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          variants={{
            initial: { pathLength: 1, opacity: 1 },
            hover: { 
              pathLength: [0, 0, 1, 1],
              opacity: [0, 1, 1, 1], 
              transition: { duration: 2, repeat: Infinity, times: [0, 0.45, 0.75, 1], ease: "easeInOut" }
            }
          }}
        />

        {/* Bottom Node */}
        <motion.circle
          cx="53" cy="90" r="5.5"
          stroke="#10b981"
          strokeWidth="6"
          fill="transparent"
          variants={{
            initial: { scale: 1, opacity: 1 },
            hover: { 
              scale: [0.5, 1.4, 1, 1], 
              opacity: [0, 1, 1, 1], 
              transition: { duration: 2, repeat: Infinity, times: [0, 0.15, 0.3, 1], ease: "easeOut" }
            }
          }}
          style={{ originX: '53px', originY: '90px' }}
        />

        {/* Top Node */}
        <motion.circle
          cx="53" cy="38" r="5.5"
          stroke="#10b981"
          strokeWidth="6"
          fill="transparent"
          variants={{
            initial: { scale: 1, opacity: 1 },
            hover: { 
              scale: [0.5, 0.5, 1.4, 1, 1], 
              opacity: [0, 0, 1, 1, 1], 
              transition: { duration: 2, repeat: Infinity, times: [0, 0.6, 0.7, 0.8, 1], ease: "easeOut" }
            }
          }}
          style={{ originX: '53px', originY: '38px' }}
        />

        {/* Right Branch Node */}
        <motion.circle
          cx="75" cy="42" r="5.5"
          stroke="#10b981"
          strokeWidth="6"
          fill="transparent"
          variants={{
            initial: { scale: 1, opacity: 1 },
            hover: { 
              scale: [0.5, 0.5, 1.4, 1, 1], 
              opacity: [0, 0, 1, 1, 1], 
              transition: { duration: 2, repeat: Infinity, times: [0, 0.65, 0.75, 0.85, 1], ease: "easeOut" }
            }
          }}
          style={{ originX: '75px', originY: '42px' }}
        />
      </motion.g>
    </motion.svg>
  )
}

export default GitIcon;
