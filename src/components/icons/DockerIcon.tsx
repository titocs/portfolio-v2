'use client'

import { motion } from 'framer-motion'

interface IconProps {
  size?: number;
  className?: string;
}

const DockerIcon = ({ size = 32, className = '' }: IconProps) => {
  const duration = 2.5;

  const blocks = [
    // Bottom row (y=60)
    { x: 17, y: 60, delay: 0.0 },
    { x: 30, y: 60, delay: 0.1 },
    { x: 43, y: 60, delay: 0.2 },
    { x: 56, y: 60, delay: 0.3 },
    { x: 69, y: 60, delay: 0.4 },

    // Mid row (y=47)
    { x: 30, y: 47, delay: 0.3 },
    { x: 43, y: 47, delay: 0.4 },
    { x: 56, y: 47, delay: 0.5 },

    // Top row (y=34)
    { x: 56, y: 34, delay: 0.7 },
  ];

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
            y: [-2, 2, -2],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
        }}
      >
        {/* The Container Blocks */}
        {blocks.map((block, i) => {
          const start = block.delay / duration;
          const dropLength = 0.35 / duration; 
          const impact = start + dropLength;

          return (
            <motion.rect
              key={i}
              x={block.x}
              y={block.y}
              width="11"
              height="11"
              rx="2"
              fill="#10b981"
              variants={{
                initial: { 
                  translateY: 0, 
                  opacity: 1,
                  transition: { duration: 0.1 } // Snap back instantly so it looks pristine
                },
                hover: {
                  translateY: [-25, -25, 0, 0],
                  opacity: [0, 0, 1, 1],
                  transition: {
                    duration: duration,
                    times: [0, start === 0 ? 0.001 : start, impact, 1],
                    ease: ["linear", "easeOut", "linear"],
                    repeat: Infinity
                  }
                }
              }}
            />
          );
        })}

        {/* The Bobbing Whale */}
        <motion.path
          d="M 88 73
             Q 95 73, 102 62
             Q 108 50, 114 55
             Q 105 65, 108 73
             Q 120 78, 122 84
             Q 112 88, 105 84
             Q 95 105, 65 112
             Q 25 118, 10 95
             Q -2 77, 16 73 Z"
          fill="#10b981"
          style={{ originX: "50%", originY: "100%" }}
          variants={{
            initial: { translateY: 0, scaleY: 1 },
            hover: {
              translateY: [0, 4, 0, 0],
              scaleY: [1, 0.95, 1, 1],
              transition: {
                duration: duration,
                times: [0, 0.45, 0.8, 1],
                ease: "easeInOut",
                repeat: Infinity
              }
            }
          }}
        />
        
        {/* Floating Bubble Details for underwater vibe */}
        <motion.circle 
          cx="20" cy="115" r="2.5" fill="#10b981" 
          variants={{ initial: { opacity: 0 }, hover: { y: [0, -20], x: [0, -5], opacity: [0, 1, 0], transition: { duration: 2, repeat: Infinity, delay: 0.5, ease: 'easeOut' } } }} 
        />
        <motion.circle 
          cx="30" cy="110" r="1.5" fill="#10b981" 
          variants={{ initial: { opacity: 0 }, hover: { y: [0, -15], x: [0, 3], opacity: [0, 1, 0], transition: { duration: 1.5, repeat: Infinity, delay: 1, ease: 'easeOut' } } }} 
        />
      </motion.g>
    </motion.svg>
  );
}

export default DockerIcon;
