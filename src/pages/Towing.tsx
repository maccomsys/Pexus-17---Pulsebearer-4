import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {  Phone, MapPin, Navigation, Clock, ShieldCheck, Tag, FileText, ArrowRight, Truck, Wrench, Car, ChevronDown, Star , ChevronRight } from 'lucide-react';
import ScrollToFooterArrow from '@/components/ui/ScrollToFooterArrow';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SEO from '@/components/seo/SEO';

const TOWING_FEATURES = [
  { title: 'Average 30-Min Response', icon: Clock },
  { title: 'GPS-Tracked Fleet', icon: Navigation },
  { title: 'Certified Operators', icon: ShieldCheck },
  { title: 'Nationwide Coverage', icon: MapPin },
  { title: 'Transparent Pricing', icon: Tag },
  { title: 'Insurance Friendly', icon: FileText },
];

const TOWING_PROCESS = [
  'Contact Us', 'Share Location', 'Dispatch Vehicle', 'Vehicle Recovered', 'Safe Arrival'
];

const TOWING_TYPES = [
  { title: 'Light Vehicle Towing', desc: 'Safe transport for sedans, hatchbacks, and small SUVs.', image: 'https://i.ibb.co/gZh5x06r/Image-1-Towing-Vehicle.jpg' },
  { title: 'Heavy-Duty Towing', desc: 'Capable of handling trucks, buses, and commercial vehicles.', image: 'https://i.ibb.co/0RDWpXBh/Image-8-Heavy-Duty-Recovery-Vehicle-or-Car.jpg' },
  { title: 'Accident Recovery', desc: 'Careful extraction and transport from accident scenes.', image: 'https://i.ibb.co/gZh5x06r/Image-1-Towing-Vehicle.jpg' },
  { title: 'Flatbed Towing', desc: 'Ideal for luxury cars, AWD vehicles, and severe damage.', image: 'https://i.ibb.co/gZh5x06r/Image-1-Towing-Vehicle.jpg' },
  { title: 'Winching & Off-Road', desc: 'Specialized equipment to pull vehicles out of ditches or mud.', image: 'https://i.ibb.co/KcZkH37Y/Image-3-Sedan-Toyotta-Corolla.jpg' },
  { title: 'Long-Distance Towing', desc: 'Secure transportation across cities and regions.', image: 'https://i.ibb.co/gZh5x06r/Image-1-Towing-Vehicle.jpg' },
];

const TOWING_FAQS = [
  { q: 'How quickly can you get to me?', a: 'Our average response time is under 30 minutes within city limits. Dispatch times may vary slightly based on traffic and weather conditions.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, mobile money (MoMo), and cash. Payment is only required upon safe delivery of your vehicle.' },
  { q: 'Do you work directly with insurance companies?', a: 'Yes, we provide full insurance-friendly documentation and can often bill your provider directly depending on your policy.' },
  { q: 'What should I do while waiting for the tow truck?', a: 'Turn on your hazard lights, move to a safe location away from traffic if possible, and stay inside your locked vehicle if you are on a busy highway.' },
  { q: 'Is there a limit to how far you can tow my car?', a: 'No, we offer both local and long-distance towing services. Contact us for a custom quote on long-distance transport.' },
];

export default function Towing() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <main className="pt-24 lg:pt-[104px]">
      <SEO title="24/7 Emergency Towing & Vehicle Recovery in Ghana | Pexus" description="Fast, reliable 24/7 emergency towing and vehicle recovery services across Ghana. Fully equipped tow trucks ready to assist you safely and securely." canonical="/towing" />
      
      {/* 1. Emergency Hero Banner & 2. Instant Request Form */}
      <section className="relative bg-primary overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://i.ibb.co/WpNkptMZ/Image-4-Van-Hyundai-H1-2022.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Towing Services' }]} variant="light" className="mb-6" />
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-wider border border-accent/20 animate-pulse">
                <Clock className="w-4 h-4" /> 24/7 Emergency Response
              </div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Stranded? Help Is On The Way.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-white/70 mb-10 max-w-lg"
              >
                Fast dispatch, GPS-tracked recovery vehicles, and professional operators ready around the clock.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="tel:0597684860" className="bg-accent hover:bg-accent/90 text-dark px-4 sm:px-8 py-4 font-bold transition-all shadow-lg shadow-accent/30 flex items-center justify-center gap-3 text-lg rounded-full">
                  <Phone className="w-6 h-6" />
                  0597684860
                </a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[1px] p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-primary rounded-t-[1px]" />
              <h3 className="text-2xl font-bold text-dark mb-2">Request a Tow Now</h3>
              
              {formState === 'success' ? (
                <div className="bg-accent/10 border border-accent/20 rounded-[1px] p-6 text-center my-6">
                  <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-xl text-dark mb-2">Dispatch Initiated</h4>
                  <p className="text-dark/70 text-sm">We've received your request. A tow truck is being assigned to your location. For immediate assistance, please call <a href="tel:0597684860" className="font-bold text-accent hover:underline">0597684860</a>.</p>
                </div>
              ) : (
                <>
                  <p className="text-dark/70 text-sm mb-6">Fill out the form below for immediate dispatch.</p>
                  
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input required type="text" placeholder="Your Name" className="bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full" />
                      <input required type="tel" placeholder="Phone Number" className="bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full" />
                    </div>
                    
                    <div className="relative">
                      <input required type="text" placeholder="Current Location" className="bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full pr-12" />
                      <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-primary p-1 hover:bg-accent/10 rounded-xl transition-colors rounded-full" title="Use My Location">
                        <MapPin className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input required type="text" placeholder="Vehicle Make & Model" className="bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full" />
                      <select required defaultValue="" className="bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full appearance-none">
                        <option value="" disabled>Select Issue...</option>
                        <option value="breakdown">Breakdown</option>
                        <option value="accident">Accident</option>
                        <option value="flat-tire">Flat Tire</option>
                        <option value="fuel">Out of Fuel</option>
                        <option value="lockout">Lockout</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <button disabled={formState === 'submitting'} className="w-full bg-primary hover:bg-black text-white font-bold py-4 transition-all shadow-lg flex items-center justify-center gap-2 mt-2 disabled:opacity-70 rounded-full">
                      {formState === 'submitting' ? (
                        <span className="animate-pulse">Processing...</span>
                      ) : (
                        <><Truck className="w-5 h-5" /> Request Emergency Towing</>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>

          </div>
        </div>
      
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 ">
          <ScrollToFooterArrow />
        </div>
      </section>

      {/* 3. Why Choose Our Towing Service */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Pexus Towing</h2>
            <p className="text-dark/70">Reliable, professional, and fast response when you need it most.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {TOWING_FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-[1px] p-6 shadow-sm border border-dark/10 flex flex-col items-center text-center hover:shadow-xl hover:border-accent/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <Icon className="w-7 h-7 text-white group-hover:text-dark transition-colors" />
                  </div>
                  <h3 className="font-bold text-dark">{feature.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">How It Works</h2>
            <p className="text-dark/70 text-lg">A seamless process to get you safe and moving again.</p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white -translate-y-1/2" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {TOWING_PROCESS.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-white rounded-xl border-4 border-dark/10 shadow-xl flex items-center justify-center text-xl font-bold text-dark group-hover:border-accent group-hover:text-accent transition-colors relative z-10">
                    {idx + 1}
                  </div>
                  <h4 className="mt-4 font-bold text-dark">{step}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Types of Towing & Recovery Offered */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Recovery Solutions</h2>
            <p className="text-white/80">We have the right equipment for any vehicle and any situation.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOWING_TYPES.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[1px] overflow-hidden hover:border-accent/50 transition-colors group flex flex-col"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={type.image} alt={type.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80" />
                </div>
                <div className="p-6 relative -mt-12">
                  <h3 className="text-xl font-bold mb-2 text-white">{type.title}</h3>
                  <p className="text-white/80 text-sm">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Coverage Area & 7. Pricing Transparency */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent font-bold text-sm mb-6 uppercase tracking-wider">
                <MapPin className="w-4 h-4" /> Nationwide Coverage
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Wherever You Are, We'll Find You.</h2>
              <p className="text-dark/70 mb-8 text-lg">
                Operating across major cities and highways, our decentralized fleet ensures that a recovery vehicle is always stationed near you. We serve Accra, Kumasi, Takoradi, Tema, and all major connecting routes.
              </p>
              
              <hr className="border-dark/20 my-8" />
              
              <h3 className="text-2xl font-bold text-dark mb-4">Transparent, Upfront Pricing</h3>
              <p className="text-dark/70 mb-8">
                No hidden fees, no surprises. Our pricing is quote-based on distance and vehicle type. We provide a clear estimate before dispatching a driver so you know exactly what to expect.
              </p>
              
              <button className="bg-primary hover:bg-black text-white px-4 sm:px-8 py-4 font-bold transition-all shadow-lg inline-flex items-center gap-2 rounded-full">
                Get an Instant Quote <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="bg-white rounded-[1px] overflow-hidden aspect-square relative shadow-xl border-8 border-white">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-[url('https://i.ibb.co/Mx8G6vHw/Image-5-Economy-Nissan-Almera-2021.jpg')] bg-cover bg-center grayscale opacity-50" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              
              {/* Map Markers */}
              <div className="absolute top-1/3 left-1/3 animate-bounce">
                <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_0_4px_rgba(239,111,35,0.3)]" />
              </div>
              <div className="absolute top-1/2 left-2/3 animate-bounce" style={{ animationDelay: '0.2s' }}>
                <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_0_4px_rgba(239,111,35,0.3)]" />
              </div>
              <div className="absolute bottom-1/3 left-1/2 animate-bounce" style={{ animationDelay: '0.4s' }}>
                <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_0_4px_rgba(28,32,43,0.3)]" />
              </div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-[1px] p-6 shadow-xl">
                <h4 className="font-bold text-dark mb-2">Live Fleet Tracking Active</h4>
                <p className="text-sm text-dark/70">24 recovery vehicles currently on patrol.</p>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 9. Related Services */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Need More Than Just a Tow?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Auto Repairs', desc: 'Direct drop-off to our certified repair workshop.', icon: Wrench, link: '/repairs' },
              { title: 'Heavy Haulage', desc: 'Machinery, container & equipment transport.', icon: Truck, link: '/haulage' },
              { title: 'Vehicle Recovery', desc: 'Specialized extraction for off-road incidents.', icon: Truck, link: '/towing' }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link to={service.link} key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-accent hover:border-accent hover:text-dark transition-all group flex items-start gap-4 rounded-full">
                  <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 flex items-center gap-2">
                      {service.title} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h4>
                    <p className="text-sm text-white/80 group-hover:text-dark">{service.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FAQs (Towing Specific) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Towing & Recovery FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {TOWING_FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-dark/20 rounded-[1px] overflow-hidden shadow-sm bg-white"
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-dark/5 transition-colors rounded-full"
                >
                  <span className="font-bold text-dark pr-4">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-primary transition-transform shrink-0", openIdx === idx && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-dark/70">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Emergency CTA Banner */}
      <section className="py-12 md:py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.5) 0%, transparent 50%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't Wait - Request Emergency Towing Now</h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Our dispatchers are standing by 24/7 to send help immediately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:0597684860" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-dark px-4 sm:px-8 py-5 font-bold transition-all shadow-xl flex items-center justify-center gap-3 text-lg rounded-full">
              <Phone className="w-6 h-6" /> Call 0597684860
            </a>
            <a href="https://wa.me/233597684860" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white hover:bg-white/90 text-dark px-4 sm:px-8 py-5 font-bold transition-all shadow-xl flex items-center justify-center gap-3 text-lg rounded-full">
              <Truck className="w-6 h-6 text-accent" /> WhatsApp Dispatch
            </a>
          </div>
        </div>
      </section>

    
      <section className="py-8 bg-white border-t border-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="w-full sm:w-1/3"></div>
            
            <div className="w-full sm:w-1/3 flex justify-center mt-4 sm:mt-0">
              <Link to="/services" className="group flex items-center justify-center gap-2 text-dark/70 hover:text-accent font-bold transition-colors">
                <span>All Services</span>
              </Link>
            </div>
            
            <div className="w-full sm:w-1/3 flex justify-end">
              <Link to="/haulage" className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full text-right">
                <div className="overflow-hidden">
                  <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Next Service</div>
                  <div className="text-sm font-bold text-dark group-hover:text-accent truncate">Haulage & Heavy Transport</div>
                </div>
                <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
  
    </main>
  );
}
