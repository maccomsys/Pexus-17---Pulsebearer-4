import React, { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, MessageCircle, Clock, 
  Truck, Wrench, ShieldCheck, ChevronDown, Send, CheckCircle2
} from 'lucide-react';
import ScrollToFooterArrow from '@/components/ui/ScrollToFooterArrow';
import { cn } from '@/lib/utils';
import SEO from '@/components/seo/SEO';

const CONTACT_OPTIONS = [
  { id: 1, title: 'Emergency Towing', value: '0597684860', icon: Phone, color: 'text-accent', bg: 'bg-accent/5', action: 'Call Now', href: 'tel:0597684860' },
  { id: 2, title: 'General Enquiries', value: '0597684860', icon: Phone, color: 'text-primary', bg: 'bg-primary/10', action: 'Call Now', href: 'tel:0597684860' },
  { id: 3, title: 'WhatsApp Us', value: '0597684860', icon: MessageCircle, color: 'text-primary', bg: 'bg-primary/5', action: 'Chat Now', href: 'https://wa.me/233597684860' },
  { id: 4, title: 'Email Us', value: 'official.pexus@gmail.com', icon: Mail, color: 'text-dark', bg: 'bg-dark/5', action: 'Send Email', href: 'mailto:official.pexus@gmail.com' },
];

const LOCATIONS = [
  {
    id: 1,
    name: 'Headquarters & Main Workshop',
    address: '123 Automotive Avenue, Spintex Road, Accra, Ghana',
    phone: '0597684860',
    hours: '24/7 Towing Service',
    mapUrl: 'https://i.ibb.co/3998gkTG/Image-16-Accessories.jpg'
  },
  {
    id: 2,
    name: 'Kumasi Branch',
    address: '45 Ring Road, Kumasi, Ghana',
    phone: '0597684860',
    hours: 'Mon-Sat: 8:00 AM - 5:00 PM',
    mapUrl: 'https://i.ibb.co/gZh5x06r/Image-1-Towing-Vehicle.jpg'
  }
];

const DEPARTMENTS = [
  { name: 'Emergency Towing & Haulage', phone: '0597684860', email: 'official.pexus@gmail.com', icon: Truck },
  { name: 'Service & Repairs', phone: '0597684860', email: 'official.pexus@gmail.com', icon: Wrench },
  { name: 'Corporate & Fleet Support', phone: '0597684860', email: 'official.pexus@gmail.com', icon: ShieldCheck },
];

const FAQS = [
  { q: 'What areas do your towing services cover?', a: 'We currently cover Greater Accra, Ashanti Region, and all major transport corridors across Ghana with 24/7 dispatch.' },
  { q: 'Do I need an appointment for general servicing?', a: 'While walk-ins are welcome, we highly recommend booking an appointment to avoid long wait times, especially on weekends.' },
  { q: 'Can I get a quote over the phone?', a: 'We can provide estimates for standard services (like towing and basic servicing), while major repairs receive a free diagnostic inspection.' },
];

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <main className="pt-24 lg:pt-[104px] min-h-screen bg-white">
      <SEO title="Contact Us | 24/7 Auto Support & Towing | Pexus" description="Get in touch with Pexus for inquiries, service bookings, or emergency 24/7 towing and haulage assistance across Ghana." canonical="/contact" />
      
      {/* 1. Hero Banner */}
      <section className="relative bg-primary text-white py-12 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://i.ibb.co/zVkLKHdN/Image-2-A-SUV-KIA-Sportage-2024-Ratio.png')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl"
          >
            We're Here to Help - <span className="text-accent">Anytime, Anywhere</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl leading-relaxed"
          >
            Reach out for towing, heavy haulage, auto repairs, body works, or general enquiries. Our dedicated team is ready to assist you.
          </motion.p>
        </div>
      
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 ">
          <ScrollToFooterArrow />
        </div>
      </section>

      {/* 2. Contact Options Grid */}
      <section className="py-12 -mt-16 relative z-20">
          <div className="mb-6">
            <Breadcrumbs items={[{ label: 'Contact Us' }]} variant="light" />
          </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTACT_OPTIONS.map((option, idx) => {
              const Icon = option.icon;
              return (
                <motion.div 
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="bg-white rounded-[1px] p-6 border border-dark/10 shadow-xl shadow-charcoal/5 hover:-translate-y-1 transition-transform group"
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors", "bg-primary text-white group-hover:bg-accent group-hover:text-dark")}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-dark/70 text-sm mb-1">{option.title}</h3>
                  <p className="font-bold text-dark text-base sm:text-lg mb-4 break-words">{option.value}</p>
                  <a href={option.href} className={cn("inline-block font-bold text-sm hover:underline", option.color)}>
                    {option.action} &rarr;
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          
          {/* Left Column: 3. Contact Form */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white rounded-[1px] p-6 sm:p-8 md:p-12 border border-dark/10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">Get In Touch</h2>
              <p className="text-dark/70 mb-4">Contact us via phone or WhatsApp for immediate assistance.</p>
              <p className="text-sm text-dark/60 mb-8 border-l-2 border-primary pl-3">
                Have a service issue? Read our <Link to="/complaints-policy" className="text-primary font-bold hover:underline">Complaints Policy</Link> to learn how we resolve concerns.
              </p>
              
              
              <div className="space-y-6 mt-8">
                <a href="tel:0597684860" className="w-full bg-accent hover:bg-accent/90 text-dark font-bold py-6 transition-all shadow-lg flex items-center justify-center gap-3 text-lg rounded-full">
                  <Phone className="w-6 h-6" /> Call Us Directly: 0597684860
                </a>
                <a href="https://wa.me/233597684860" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-6 transition-all shadow-lg flex items-center justify-center gap-3 text-lg rounded-full">
                  <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Information */}
          <div className="w-full lg:w-2/5 space-y-8">
            
            {/* 6. Department Directory */}
            <div className="bg-white rounded-[1px] p-6 border border-dark/10 shadow-sm">
              <h3 className="text-xl font-bold text-dark mb-6">Direct Department Contacts</h3>
              <div className="space-y-6">
                {DEPARTMENTS.map((dept, idx) => {
                  const Icon = dept.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 pb-6 border-b border-dark/10 last:border-0 last:pb-0">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark text-sm mb-1">{dept.name}</h4>
                        <a href={`tel:${dept.phone}`} className="block text-dark/70 hover:text-accent text-sm mb-1 transition-colors">{dept.phone}</a>
                        <a href={`mailto:${dept.email}`} className="block text-dark/70 hover:text-accent text-sm transition-colors">{dept.email}</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 5. Business Hours & Locations */}
            <div className="bg-primary rounded-[1px] p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full" />
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" /> Operating Hours
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex justify-between text-white/70 border-b border-white/10 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-bold text-white">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between text-white/70 border-b border-white/10 pb-2">
                  <span>Saturday</span>
                  <span className="font-bold text-white">8:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-white/70 border-b border-white/10 pb-2">
                  <span>Sunday</span>
                  <span className="font-bold text-accent">Closed (Emergencies Only)</span>
                </li>
              </ul>
              
              <div className="bg-white/10 rounded-[1px] p-4 border border-white/10">
                <h4 className="font-bold text-accent mb-2 text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 24/7 Emergency Hotline
                </h4>
                <a href="tel:0597684860" className="text-xl font-bold hover:text-accent transition-colors">0597684860</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Interactive Map / Locations */}
      <section className="py-10 md:py-16 bg-white border-y border-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">Our Locations</h2>
            <p className="text-dark/70">Visit our state-of-the-art workshops across the country.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="bg-white rounded-[1px] p-4 border border-dark/10 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/5 aspect-video md:aspect-square rounded-[1px] overflow-hidden relative">
                  <img src={loc.mapUrl} alt={loc.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                    <div className="bg-white p-3 rounded-[1px] shadow-lg text-primary animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-3/5 py-2 flex flex-col justify-center pr-4">
                  <h3 className="text-xl font-bold text-dark mb-2">{loc.name}</h3>
                  <div className="space-y-3 mb-6">
                    <p className="text-dark/70 flex items-start gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {loc.address}
                    </p>
                    <p className="text-dark/70 flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-accent shrink-0" /> {loc.phone}
                    </p>
                    <p className="text-dark/70 flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary shrink-0" /> {loc.hours}
                    </p>
                  </div>
                  <button className="bg-primary hover:bg-black text-white px-6 py-2 font-bold transition-colors text-sm self-start rounded-full">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs Preview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-dark/70">Quick answers to common questions about our services.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-dark/20 rounded-[1px] overflow-hidden shadow-sm bg-white">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white transition-colors rounded-full"
                >
                  <span className="font-bold text-dark pr-4">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-primary transition-transform shrink-0", openFaq === idx && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 text-dark/70 border-t border-dark/10 leading-relaxed">
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

      {/* 8. Call-to-Action Banner */}
      <section className="py-12 md:py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prefer to Talk Now?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our customer support team is on standby to assist you immediately. Give us a call or send a quick WhatsApp message.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0597684860" className="bg-accent hover:bg-accent/90 text-dark px-4 sm:px-8 py-4 font-bold transition-all shadow-xl flex items-center gap-2 rounded-full">
              <Phone className="w-5 h-5" /> Call: 0597684860
            </a>
            <a href="https://wa.me/233597684860" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-slate-100 text-dark px-4 sm:px-8 py-4 font-bold transition-all shadow-xl flex items-center gap-2 rounded-full">
              <MessageCircle className="w-5 h-5 text-accent" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
