import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { FAQS } from '@/data/mockData';
import { BLOG_POSTS } from '@/data/blogData';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BlogSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-50/70 relative border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark tracking-tight leading-[1.1]">
              Latest News &amp; Maintenance Insights
            </h2>
          </div>
          <Link 
            to="/blog" 
            className="text-primary hover:text-accent font-bold transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
          >
            <span>View All Articles</span> 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.45 }}
              className="group bg-white rounded-[1px] overflow-hidden shadow-sm hover:shadow-xl border border-gray-200/80 hover:border-accent/30 transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
                <div className="absolute top-3.5 left-3.5 bg-dark/80 backdrop-blur-md px-3 py-1 rounded-[1px] text-xs font-bold text-white border border-white/20">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-dark mb-3 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mb-6 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors pt-4 border-t border-gray-100 group/link"
                >
                  <span>Read Full Article</span> 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-5 tracking-tight leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Quick answers regarding our 24/7 towing response times, repair warranties, haulage logistics, and pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-gray-200/90 rounded-[1px] overflow-hidden shadow-sm transition-colors hover:border-gray-300"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors gap-4 rounded-full"
              >
                <span className="font-bold text-dark text-base sm:text-lg">{faq.q}</span>
                <div className={cn(
                  "w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200",
                  openIdx === idx && "rotate-180 bg-accent text-dark"
                )}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
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
  );
}
