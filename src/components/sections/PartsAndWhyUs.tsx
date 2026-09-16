import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PARTS_CATEGORIES, WHY_CHOOSE_US } from '@/data/mockData';
import { Settings, ArrowRight, ShieldCheck, Phone, Cpu, Disc, Wrench, Battery, Zap, CheckCircle2, Clock, Truck, Shield, MapPin } from 'lucide-react';

export function AutoParts() {
  const getCategoryIcon = (idx: number) => {
    const icons = [Wrench, Battery, Disc, Cpu, Zap, Settings, ShieldCheck, CheckCircle2];
    const IconComponent = icons[idx % icons.length];
    return <IconComponent className="w-7 h-7 text-white group-hover:text-primary transition-colors" />;
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-50/70 relative border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-5 tracking-tight leading-[1.1]">
              Genuine Auto Parts &amp; Accessories
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We stock thousands of high-quality OEM and verified aftermarket parts, batteries, and accessories to keep your vehicle running at peak performance.
            </p>
          </div>
          <Link 
            to="/parts" 
            className="bg-primary hover:bg-secondary text-white px-7 py-3.5 font-bold transition-all inline-flex items-center gap-2 whitespace-nowrap shadow-md hover:-translate-y-0.5 rounded-full"
          >
            <span>Browse Full Catalog</span> 
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PARTS_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="relative"
            >
              <Link 
                to="/parts"
                className="bg-white border border-gray-200/80 hover:border-accent/40 hover:shadow-xl rounded-[1px] p-6 text-center transition-all duration-300 group flex flex-col items-center h-full hover:-translate-y-1.5"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:shadow-md transition-all duration-300">
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="font-bold text-dark text-base group-hover:text-accent transition-colors mb-1">
                  {cat}
                </h3>
                <span className="text-xs text-gray-500 font-medium">OEM &amp; Aftermarket</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-dark text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight leading-[1.1]">
            Why Choose Pexus?
          </h2>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We don't just fix cars; we build lasting relationships based on trust, swift emergency response, quality workmanship, and transparent pricing.
          </p>
        </div>

        {/* 4-Column Feature Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:mb-16">
          {[
            { title: '24/7 Emergency Support', icon: Clock, desc: 'Always on-call dispatch team ready for day and night roadside recoveries.' },
            { title: 'Rapid Response Time', icon: Truck, desc: 'Average arrival time within 20-30 minutes across Greater Accra and highways.' },
            { title: 'Certified Technicians', icon: Shield, desc: 'ASE-certified mechanics and master auto-electricians with years of field mastery.' },
            { title: 'Transparent Pricing', icon: Settings, desc: 'Clear, upfront quotes with zero hidden charges or unexpected surprise fees.' },
            { title: '100% Genuine OEM Parts', icon: Wrench, desc: 'Direct factory imports backed by manufacturer warranties for maximum durability.' },
            { title: 'State-of-the-Art Equipment', icon: Settings, desc: 'Modern hydraulic flatbeds, specialized wheel lifts, and computer diagnostic rigs.' },
            { title: 'Nationwide Network', icon: MapPin, desc: 'Comprehensive coverage across Accra, Tema, Kumasi, Takoradi, and regional corridors.' },
            { title: 'Guaranteed Satisfaction', icon: CheckCircle2, desc: 'Thousands of satisfied private motorists, fleet managers, and corporate partners.' },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.45 }}
                className="bg-white border border-white/10 p-7 rounded-[1px] hover:border-accent/40 transition-all duration-300 group flex flex-col hover:-translate-y-1.5"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:shadow-lg transition-all duration-300">
                  <Icon className="w-7 h-7 text-white group-hover:text-dark transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight text-dark transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Banner Bar */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 sm:p-8 md:p-10 rounded-[1px] border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
              Need Immediate Roadside Assistance or Repairs?
            </h3>
            <p className="text-white/85 text-sm sm:text-base">
              Our 24/7 emergency dispatch and expert mechanical teams are standing by right now.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a 
              href="tel:0597684860" 
              className="bg-accent hover:bg-accent/90 text-dark px-7 py-3.5 font-bold transition-all shadow-lg shadow-accent/30 hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base rounded-full"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: 0597684860</span>
            </a>
            <Link 
              to="/towing" 
              className="bg-white/15 hover:bg-white/25 text-white px-7 py-3.5 font-bold transition-all border border-white/20 hover:-translate-y-0.5 text-sm sm:text-base rounded-full"
            >
              Request Tow Online
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
