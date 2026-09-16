import React from 'react';
import { MessageCircle, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Tow Button */}
      <Link to="/towing" className="block" aria-label="Request Emergency Tow">
        <motion.div 
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center w-14 h-14 bg-accent hover:bg-accent/95 text-dark rounded-full shadow-xl shadow-red-600/30 transition-all border-2 border-white/20 cursor-pointer"
        >
          <Truck className="w-6 h-6 animate-pulse" />
          <span className="absolute right-full mr-3.5 bg-dark text-white text-xs font-semibold px-3 py-2 rounded-[1px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl pointer-events-none">
            Request Emergency Tow
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-dark"></span>
          </span>
        </motion.div>
      </Link>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/233597684860" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
        aria-label="Chat on WhatsApp"
      >
        <motion.div 
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl shadow-[#25D366]/30 transition-all border-2 border-white/20 cursor-pointer"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-3.5 bg-dark text-white text-xs font-semibold px-3 py-2 rounded-[1px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl pointer-events-none">
            Chat on WhatsApp
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-dark"></span>
          </span>
        </motion.div>
      </a>
    </div>
  );
}
