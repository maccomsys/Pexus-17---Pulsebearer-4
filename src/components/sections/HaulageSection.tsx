import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Anchor, 
  Weight, 
  Container, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  ShieldCheck, 
  MapPin 
} from 'lucide-react';

const HOMEPAGE_HAULAGE_HIGHLIGHTS = [
  {
    title: 'Heavy Machinery Transport',
    desc: 'Excavators, bulldozers, graders, loaders, and road-building plant machinery on specialized lowbeds.',
    icon: Weight,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Tema Harbour Haulage',
    desc: 'Rapid gate-out port clearance, container transfers, and vehicle deliveries directly from Tema Port.',
    icon: Anchor,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Container & Industrial Cargo',
    desc: '20ft & 40ft shipping containers, factory equipment, high-output generators, and industrial power units.',
    icon: Container,
    image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Intercity & Fleet Haulage',
    desc: 'Commercial fleet distribution and long-haul transportation connecting Accra, Kumasi, Takoradi & Tamale.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=600&q=80'
  }
];

export function HaulageHomeSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=80)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.1]">
              Reliable Haulage &amp; <span className="text-accent">Heavy Transport</span> Services
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              Beyond standard towing, Pexus provides heavy-duty haulage for vehicles, construction machinery, shipping containers, industrial generators, and oversized cargo across all 16 regions of Ghana.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-3">
            <Link 
              to="/haulage"
              className="bg-accent hover:bg-accent/90 text-dark px-7 py-3.5 font-bold transition-all shadow-md shadow-accent/25 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 text-sm rounded-full"
            >
              <span>View All Haulage Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:0597684860"
              className="bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 font-bold transition-all border border-white/15 inline-flex items-center justify-center gap-2 text-sm rounded-full"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Haulage Dispatch: 0597684860</span>
            </a>
          </div>
        </div>

        {/* 4-Card Showcase Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {HOMEPAGE_HAULAGE_HIGHLIGHTS.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-slate-800/80 rounded-[1px] overflow-hidden border border-slate-700/80 hover:border-accent/50 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-slate-950">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                    {item.desc}
                  </p>
                  <Link 
                    to="/haulage"
                    className="text-xs font-bold text-accent hover:text-white transition-colors inline-flex items-center gap-1.5 mt-auto pt-3 border-t border-slate-700"
                  >
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature badges row */}
        <div className="p-6 rounded-[1px] bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-accent shrink-0" />
            <span className="text-slate-200 font-medium">Tema Harbour Direct Clearance</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-accent shrink-0" />
            <span className="text-slate-200 font-medium">Multi-Axle Lowbed Fleet</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-accent shrink-0" />
            <span className="text-slate-200 font-medium">Comprehensive Cargo Insurance</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-accent shrink-0" />
            <span className="text-slate-200 font-medium">Nationwide 16-Region Transit</span>
          </div>
        </div>

      </div>
    </section>
  );
}
