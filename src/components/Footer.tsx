'use client'

import { useState } from 'react'
import EmailOverlay from './EmailOverlay'

const Footer = () => {
  const [showEmailOverlay, setShowEmailOverlay] = useState(false)

  return (
    <>
      <EmailOverlay isOpen={showEmailOverlay} onClose={() => setShowEmailOverlay(false)} />
      
      <footer id="contact" className="py-20 px-4 bg-black border-t border-white/10 font-mono text-sm md:text-base">
        <div className="container mx-auto max-w-4xl flex flex-col items-center justify-center">
          <button 
            onClick={() => setShowEmailOverlay(true)}
            className="px-6 py-2 border border-bio-green/50 text-bio-green rounded hover:bg-bio-green/10 transition-colors"
          >
            Initiate Secure Comms (Email)
          </button>
          
          <p className="text-center text-gray-600 text-xs mt-8">
            © {new Date().getFullYear()} Anti-Gravity Portfolio. System Nominal.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
