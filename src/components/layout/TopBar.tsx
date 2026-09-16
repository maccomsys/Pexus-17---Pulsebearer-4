import React from 'react';
import { Phone, Mail, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-secondary text-white/80 py-2.5 px-4 sm:px-6 lg:px-8 text-xs md:text-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 font-medium">
          <a href="tel:0597684860" className="flex items-center gap-2 text-white hover:text-accent transition-colors font-semibold">
            <Phone className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span>24/7 Hotline: 0597684860</span>
          </a>
          <a href="mailto:official.pexus@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-3.5 h-3.5 text-white/60" />
            <span>official.pexus@gmail.com</span>
          </a>
          <div className="hidden md:flex items-center gap-2 text-white/70">
            <Clock className="w-3.5 h-3.5 text-white/60" />
            <span>24/7 Towing Service</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-white/70">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Nationwide Coverage</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white/80">
          <span className="text-xs uppercase tracking-wider text-white/80 hidden sm:inline font-semibold">Follow Us</span>
          <a href="https://facebook.com/pexusgh" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors p-1" aria-label="Facebook"><Facebook className="w-3.5 h-3.5" /></a>
          <a href="https://twitter.com/pexusgh" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors p-1" aria-label="Twitter"><Twitter className="w-3.5 h-3.5" /></a>
          <a href="https://instagram.com/pexusgh" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors p-1" aria-label="Instagram"><Instagram className="w-3.5 h-3.5" /></a>
          <a href="https://linkedin.com/company/pexusgh" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors p-1" aria-label="LinkedIn"><Linkedin className="w-3.5 h-3.5" /></a>
        </div>
      </div>
    </div>
  );
}
