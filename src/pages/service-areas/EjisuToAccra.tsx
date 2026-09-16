import React from 'react';
import { Link } from 'react-router-dom';
import {  Phone, MessageCircle , ChevronRight } from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import SEO from '../../components/seo/SEO';

export default function EjisuToAccra() {
  return (
    <>
      <SEO 
        title="Ejisu to Accra Towing & Vehicle Recovery Service"
        description="Santa Towing & Garage Services handles long-distance towing between Ejisu and Accra with a licensed, insured, and experienced team. Whether it's a breakdown, accident, or scheduled transport, we get your vehicle safely from Ejisu to Accra. Call or WhatsApp us now for a quote and fast dispatch."
        canonical="/service-areas/ejisu-to-accra"
        keywords={["towing Ejisu to Accra", "Ejisu Accra towing service", "tow truck Ejisu", "vehicle recovery Ejisu Accra", "long distance towing Ghana"]}
      />
      <div className="pt-24 pb-16 md:pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-12">
            <Breadcrumbs items={[
              { label: 'Towing Services', path: '/towing' },
              { label: 'Service Areas', path: '/service-areas' },
              { label: 'Ejisu to Accra' }
            ]} />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
                Ejisu to Accra Towing & Vehicle Recovery Service
              </h1>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[1px] border border-dark/10 shadow-sm mb-12">
            <p className="text-dark/80 mb-6 leading-relaxed text-lg">
              Santa Towing & Garage Services handles long-distance towing between Ejisu and Accra with a licensed, insured, and experienced team. Whether it's a breakdown, accident, or scheduled transport, we get your vehicle safely from Ejisu to Accra. Call or WhatsApp us now for a quote and fast dispatch.
            </p>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-[1px] border border-dark/5">
              <h3 className="text-xl font-bold text-dark mb-4">Need Immediate Assistance?</h3>
              <p className="text-dark/70 mb-6">Call or WhatsApp us now to book your tow.</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="tel:0244753849" className="flex items-center justify-center gap-3 bg-primary hover:bg-dark text-white px-6 py-4 font-bold transition-colors w-full rounded-full">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a href="https://wa.me/233244753849" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-dark text-white px-6 py-4 font-bold transition-colors w-full rounded-full">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-dark/10">
            
            <div className="w-full sm:w-1/3 flex justify-start">
              <Link to="/service-areas/east-legon" className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full">
                <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Previous Area</div>
                  <div className="text-sm font-bold text-dark group-hover:text-accent truncate">East Legon</div>
                </div>
              </Link>
            </div>
            
            <div className="w-full sm:w-1/3 flex justify-center mt-4 sm:mt-0">
              <Link to="/service-areas" className="group flex items-center justify-center gap-2 text-dark/70 hover:text-accent font-bold transition-colors">
                <span>All Areas</span>
              </Link>
            </div>
            
            <div className="w-full sm:w-1/3 flex justify-end">
              <Link to="/service-areas/elmina-to-accra" className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full text-right">
                <div className="overflow-hidden">
                  <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Next Area</div>
                  <div className="text-sm font-bold text-dark group-hover:text-accent truncate">Elmina to Accra</div>
                </div>
                <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
