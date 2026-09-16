import React, { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { motion } from 'motion/react';
import SEO from '@/components/seo/SEO';
import { Truck, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import ScrollToFooterArrow from '@/components/ui/ScrollToFooterArrow';

export default function ContainerTruckRegistration() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <main className="pt-24 lg:pt-[104px] min-h-screen bg-white">
      <SEO 
        title="Container Truck Registration | Pexus" 
        description="Register your container truck details with Pexus for available container transportation opportunities around Tema." 
        canonical="/container-truck-registration" 
      />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-12 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary bg-cover bg-center opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl"
          >
            Container Truck <span className="text-accent">Registration</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl leading-relaxed"
          >
            Are you a truck owner or driver operating container trucks around Tema? Register your details with us to be considered for available container transportation opportunities. Complete the short form below and submit your information for review.
          </motion.p>
        </div>
      
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 ">
          <ScrollToFooterArrow />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="mb-6">
          <Breadcrumbs items={[{ label: 'Container Truck Registration' }]} variant="light" />
        </div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[1px] p-6 md:p-10 lg:p-12 border border-dark/10 shadow-xl">
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-dark mb-4">Registration Submitted Successfully</h2>
                <p className="text-lg text-dark/70 max-w-lg mx-auto leading-relaxed">
                  Thank you for registering your truck details. Your information has been received and will be reviewed. Selected applicants will be contacted using the information provided.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 bg-primary hover:bg-black text-white px-8 py-3 font-bold transition-colors rounded-full inline-flex items-center gap-2"
                >
                  <Truck className="w-5 h-5" /> Submit Another Truck
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-dark/10">
                  <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark">Truck Details Form</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Applicant Type */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-bold text-dark">Applicant Type *</label>
                    <select required className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
                      <option value="">Select applicant type</option>
                      <option value="Truck Owner">Truck Owner</option>
                      <option value="Driver">Driver</option>
                      <option value="Truck Owner & Driver">Truck Owner & Driver</option>
                    </select>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-dark">Full Name *</label>
                    <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-dark">Phone Number *</label>
                    <input type="tel" required placeholder="024XXXXXXX" className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>

                  {/* WhatsApp Number */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-dark">WhatsApp Number *</label>
                    <input type="tel" required placeholder="024XXXXXXX" className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-dark">Email Address (Optional)</label>
                    <input type="email" placeholder="example@email.com" className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>

                  {/* Location / Area */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-dark">Location / Area *</label>
                    <input type="text" required placeholder="e.g., Tema Community 1" className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>

                  {/* Truck Registration Number */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-dark">Truck Registration Number *</label>
                    <input type="text" required placeholder="e.g., GR 1234-21" className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>

                  {/* Truck Type */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-dark">Truck Type *</label>
                    <select required className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
                      <option value="">Select truck type</option>
                      <option value="Flatbed">Flatbed</option>
                      <option value="Other Container Truck">Other Container Truck</option>
                    </select>
                  </div>

                  {/* Container Capacity */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-dark">Container Capacity *</label>
                    <select required className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
                      <option value="">Select capacity</option>
                      <option value="20ft">20ft</option>
                      <option value="40ft">40ft</option>
                      <option value="Both 20ft & 40ft">Both 20ft & 40ft</option>
                    </select>
                  </div>

                  {/* Number of Trucks Available */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-dark">Number of Trucks Available *</label>
                    <input type="number" min="1" required placeholder="1" className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>

                  {/* Truck Ownership */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-dark">Truck Ownership *</label>
                    <select required className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
                      <option value="">Select ownership</option>
                      <option value="Personally Owned">Personally Owned</option>
                      <option value="Company Owned">Company Owned</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Years of Container Truck Experience */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-dark">Years of Container Truck Experience *</label>
                    <input type="number" min="0" required placeholder="e.g., 5" className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>

                  {/* Driver's Licence Status */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-dark">Driver's Licence Status *</label>
                    <select required className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
                      <option value="">Select status</option>
                      <option value="Valid">Valid</option>
                      <option value="Expired">Expired</option>
                      <option value="Not Available">Not Available</option>
                    </select>
                  </div>

                  {/* Truck Availability */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-bold text-dark">Truck Availability *</label>
                    <select required className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
                      <option value="">Select availability</option>
                      <option value="Immediately Available">Immediately Available</option>
                      <option value="Available Within 7 Days">Available Within 7 Days</option>
                      <option value="Available Later">Available Later</option>
                    </select>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-bold text-dark">Additional Information (Optional)</label>
                    <textarea rows={4} placeholder="Any other relevant details..." className="w-full px-4 py-3 border border-dark/20 rounded-[1px] bg-white text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"></textarea>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-dark/10">
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className={cn(
                      "w-full md:w-auto bg-accent hover:bg-accent/90 text-dark font-bold py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2",
                      formState === 'submitting' && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {formState === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Registration"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
