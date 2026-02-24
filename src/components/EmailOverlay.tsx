'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'

interface EmailOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailOverlay = ({ isOpen, onClose }: EmailOverlayProps) => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  })
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    
    // Simulate sending
    setTimeout(() => {
      setIsSending(false)
      setSent(true)
      setTimeout(() => {
        setSent(false)
        onClose()
        setFormData({ name: '', subject: '', message: '' })
      }, 2000)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop with Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-gray-900/90 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
              <h3 className="text-white font-mono flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-bio-green animate-pulse" />
                COMMS_UPLINK
              </h3>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                   <div className="w-16 h-16 rounded-full bg-bio-green/20 flex items-center justify-center mb-4">
                     <Send className="text-bio-green" size={32} />
                   </div>
                   <h4 className="text-xl text-white font-bold">TRANSMISSION SENT</h4>
                   <p className="text-gray-400 font-mono text-sm">Target received secure packet.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-500 mb-1">RECIPIENT (READ-ONLY)</label>
                    <input 
                      type="text" 
                      value="titocs845@gmail.com" 
                      readOnly
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-gray-400 font-mono text-sm focus:outline-none cursor-not-allowed opacity-70"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-500 mb-1">SENDER_ID / NAME</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white font-mono text-sm focus:outline-none focus:border-bio-green/50 transition-colors"
                      placeholder="Identify yourself..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-500 mb-1">SUBJECT</label>
                    <input 
                      type="text" 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white font-mono text-sm focus:outline-none focus:border-bio-green/50 transition-colors"
                      placeholder="Topic of transmission..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-500 mb-1">MESSAGE_PACKET</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white font-mono text-sm focus:outline-none focus:border-bio-green/50 transition-colors resize-none"
                      placeholder="Encrypting message..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="w-full py-3 bg-bio-green text-black font-bold font-mono rounded-lg hover:bg-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? 'UPLOADING...' : 'INITIATE_SEND'}
                    {!isSending && <Send size={16} />}
                  </button>
                </form>
              )}
            </div>
            
            {/* Footer decoration */}
             <div className="h-1 w-full bg-linear-to-r from-transparent via-bio-green/20 to-transparent" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default EmailOverlay
