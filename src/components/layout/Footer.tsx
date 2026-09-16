import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 pt-16 sm:pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="https://i.ibb.co/jjG8ysr/Pexus-Logo-White-Version.png" 
                alt="Pexus Logo" 
                className="h-12 w-auto object-contain transition-opacity duration-200"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-logo')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-logo flex items-center gap-2';
                    fallback.innerHTML = `
                      <div class="bg-accent p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-dark w-6 h-6"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                      </div>
                      <span class="font-extrabold text-2xl text-white tracking-tight">
                        Pexus
                      </span>
                    `;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </Link>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              Ghana's trusted automotive partner for 24/7 rapid emergency towing, nationwide heavy machinery haulage, certified garage repairs, body works, and genuine auto parts.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:0597684860" className="flex items-center gap-3 text-white hover:text-accent transition-colors font-bold">
                <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <Phone className="w-4 h-4" />
                </div>
                <span>0597684860</span>
              </a>
              <a href="mailto:official.pexus@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors break-all sm:break-normal">
                <div className="w-8 h-8 rounded-xl bg-primary/30 flex items-center justify-center text-white shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>official.pexus@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-8 h-8 rounded-xl bg-primary/30 flex items-center justify-center text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Spintex Road, Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base sm:text-lg font-bold mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Haulage Services', path: '/haulage' },
                { name: '24/7 Emergency Towing', path: '/towing' },
                { name: 'Service Areas Directory', path: '/service-areas' },
                { name: 'Auto Repair & Maintenance', path: '/repairs' },
                { name: 'Body Works & Spraying', path: '/body-works' },
                { name: 'Auto Parts & Batteries', path: '/parts' },
                { name: 'Commercial Fleet Care', path: '/fleet' },
                { name: 'Our Work Gallery', path: '/gallery' },
                { name: 'Blog & Safety Guides', path: '/blog' },
                { name: 'Contact & Dispatch', path: '/contact' },
                { name: 'Sitemap', path: '/sitemap' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-accent transition-colors flex items-center gap-2 text-white/80 hover:translate-x-1 duration-200">
                    <ArrowRight className="w-3 h-3 text-accent" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-base sm:text-lg font-bold mb-5 relative inline-block">
              Our Services
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Haulage & Heavy Transport', path: '/haulage' },
                { name: 'Tema Harbour Haulage', path: '/haulage' },
                { name: 'Heavy Machinery Transport', path: '/haulage' },
                { name: 'Emergency Roadside Towing', path: '/towing' },
                { name: 'Heavy Duty Recovery', path: '/towing' },
                { name: 'Fleet Maintenance', path: '/fleet' },
                { name: 'Engine & Gearbox Repairs', path: '/repairs' },
                { name: 'Body Works & Spray Painting', path: '/body-works' },
                { name: 'Brake & Suspension Service', path: '/repairs' },
                { name: 'OEM Battery & Parts Replacement', path: '/parts' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-accent transition-colors flex items-center gap-2 text-white/80 hover:translate-x-1 duration-200">
                    <ArrowRight className="w-3 h-3 text-accent" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Policies */}
          <div>
            <h4 className="text-white text-base sm:text-lg font-bold mb-5 relative inline-block">
              Legal and Policies
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms & Conditions', path: '/terms-conditions' },
                { name: 'Towing Service Terms', path: '/towing-service-terms' },
                { name: 'Cancellation & Refund Policy', path: '/cancellation-refund-policy' },
                { name: 'Pricing & Payment Policy', path: '/pricing-payment-policy' },
                { name: 'Disclaimer', path: '/disclaimer' },
                { name: 'Cookie Policy', path: '/cookie-policy' },
                { name: 'Service Area Policy', path: '/service-area-policy' },
                { name: 'Emergency Service Policy', path: '/emergency-service-policy' },
                { name: 'Complaints Policy', path: '/complaints-policy' },
                { name: 'Vehicle Damage & Liability Policy', path: '/vehicle-damage-liability-policy' },
                { name: 'Accessibility Statement', path: '/accessibility-statement' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-accent transition-colors flex items-center gap-2 text-white/80 hover:translate-x-1 duration-200">
                    <ArrowRight className="w-3 h-3 text-accent" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Socials */}
          <div>
            <h4 className="text-white text-base sm:text-lg font-bold mb-5 relative inline-block">
              Stay Connected
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Subscribe for roadside safety tips, car maintenance reminders, and exclusive service discounts.
            </p>
            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); (e.target as HTMLFormElement).reset(); alert('Subscribed successfully!'); }}>
              <input 
                required
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              />
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-dark font-bold px-4 py-3 text-sm transition-all shadow-md shadow-accent/25 hover:-translate-y-0.5 rounded-full"
              >
                Subscribe Now
              </button>
            </form>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://facebook.com/pexusgh" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-all text-white/80" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="https://twitter.com/pexusgh" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-all text-white/80" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
              <a href="https://instagram.com/pexusgh" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-all text-white/80" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="https://linkedin.com/company/pexusgh" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-all text-white/80" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/80 font-medium">
          <p>&copy; {new Date().getFullYear()} Pexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
