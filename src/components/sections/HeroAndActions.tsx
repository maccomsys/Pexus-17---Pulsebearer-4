import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_SLIDES, QUICK_ACTIONS } from '@/data/mockData';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, ArrowRight, Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import ScrollToFooterArrow from '@/components/ui/ScrollToFooterArrow';

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, currentSlide === 0 ? 8000 : 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[750px] bg-dark flex items-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-dark/60 lg:to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 w-full">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <motion.h1 
            key={`headline-${currentSlide}`}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.05]"
          >
            {HERO_SLIDES[currentSlide].headline}
          </motion.h1>

          {/* Subheadline / Body Text */}
          <motion.p 
            key={`subheadline-${currentSlide}`}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed font-normal"
          >
            {HERO_SLIDES[currentSlide].subheadline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            key={`buttons-${currentSlide}`}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            {HERO_SLIDES[currentSlide].buttons.map((btn, idx) => {
              const isInternal = btn.href && btn.href.startsWith('/');
              const isWhatsApp = btn.href && btn.href.startsWith('https://wa.me');
              const isPhone = btn.href && btn.href.startsWith('tel:');
              
              const className = cn(
                "px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2",
                btn.primary 
                  ? "bg-accent hover:bg-accent/90 text-dark shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5" 
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm hover:-translate-y-0.5"
              );

              if (isInternal) {
                return (
                  <Link to={btn.href} key={idx} className={className}>
                    <span>{btn.label}</span>
                  </Link>
                );
              }

              return (
                <a 
                  href={btn.href || '#'} 
                  key={idx} 
                  className={className}
                >
                  {(isPhone || btn.label.includes('Call') || btn.label.includes('0597684860')) && !isWhatsApp && <Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {isWhatsApp && <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />}
                  <span>{btn.label}</span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 sm:px-6 lg:px-8 flex justify-between pointer-events-none z-20">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 bg-dark/40 hover:bg-accent text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/10 hover:border-accent rounded-full hover:text-dark"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 bg-dark/40 hover:bg-accent text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/10 hover:border-accent rounded-full hover:text-dark"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <button
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? "Play slider" : "Pause slider"}
          className="text-white/60 hover:text-white transition-colors flex items-center justify-center mr-2"
        >
          {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
        </button>
        {HERO_SLIDES.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              idx === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/40 hover:bg-white/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function QuickActions() {
  return (
    <div className="relative -mt-16 sm:-mt-20 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {QUICK_ACTIONS.map((action, idx) => {
          const Icon = action.icon;
          const href = action.title === 'Request Towing' ? '/towing' 
            : action.title === 'Heavy Haulage' ? '/haulage' 
            : action.title === 'Call for Repairs' ? '/repairs' 
            : action.title === 'Body Works & Spray' ? '/body-works' 
            : action.title === 'Shop Auto Parts' ? '/parts' 
            : '/services';

          return (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="relative w-full"
            >
              <Link 
                to={href}
                className="flex flex-col h-full bg-white rounded-[1px] p-4 sm:p-5 lg:p-6 shadow-xl shadow-black/5 border border-gray-100/90 hover:-translate-y-1.5 transition-all duration-300 group hover:shadow-2xl hover:border-accent/30"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent group-hover:shadow-md group-hover:shadow-accent/30 transition-all duration-300 shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-dark transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-dark text-sm sm:text-base lg:text-lg mb-1 leading-snug group-hover:text-accent transition-colors">
                  {action.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 leading-relaxed mb-3 flex-1">
                  {action.description}
                </p>
                <div className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-primary group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 mt-auto">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
