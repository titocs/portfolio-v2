'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const RabbitMQIcon = ({ size = 32, className = '' }: IconProps) => {
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
          initial: { y: 0 },
          hover: { 
            y: [-1, 1, -1],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        }}
      >
        {/* Left Ear */}
        <motion.path
          d="M 12 12
             Q 12 5, 19 5
             L 37 5
             Q 44 5, 44 12
             L 44 48
             L 12 48 Z"
          fill="#10b981"
          style={{ originX: "28px", originY: "48px" }}
          variants={{
            initial: { rotate: 0, transition: { duration: 0.2 } },
            hover: {
              rotate: [0, -6, 4, -4, 0],
              transition: { 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.1, 0.25, 0.4, 0.6],
                repeatDelay: 0.5
              }
            }
          }}
        />

        {/* Right Ear */}
        <motion.path
          d="M 52 12
             Q 52 5, 59 5
             L 77 5
             Q 84 5, 84 12
             L 84 48
             L 52 48 Z"
          fill="#10b981"
          style={{ originX: "68px", originY: "48px" }}
          variants={{
            initial: { rotate: 0, transition: { duration: 0.2 } },
            hover: {
              rotate: [0, 8, -5, 3, 0],
              transition: { 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.15, 0.3, 0.45, 0.65],
                repeatDelay: 0.5
              }
            }
          }}
        />

        {/* Rabbit Body & Cutout Eye */}
        {/* We use a compound path with reverse winding for the eye block so that it remains transparent */}
        <motion.path
          d="
             M 12 48
             L 84 48
             Q 89 48, 89 53
             L 89 56
             L 110 56
             Q 118 56, 118 64
             L 118 116
             Q 118 123, 111 123
             L 19 123
             Q 12 123, 12 116
             Z

             M 76 80
             L 94 80
             Q 98 80, 98 84
             L 98 102
             Q 98 106, 94 106
             L 76 106
             Q 72 106, 72 102
             L 72 84
             Q 72 80, 76 80
             Z
          "
          fill="#10b981"
          fillRule="evenodd"
        />
      </motion.g>
    </motion.svg>
  )
}

export default RabbitMQIcon;
