import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, FileText, Stethoscope } from "lucide-react";

export default function Hero() {
  const partners = [
    "NTV", "Jugantor", "The Business Standard", "Daily Sun", "ATN News", "Jamuna TV"
  ];

  return (
    <section id="vision" className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Typography & CTAs */}
        <div className="flex flex-col z-10">
          <div className="bg-emerald-base/10 text-emerald-base px-4 py-1.5 rounded-full text-xs font-bold tracking-wider w-fit mb-6 uppercase border border-emerald-base/20 flex items-center shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-base mr-2 animate-pulse"></span>
            Govt. Approved EdTech
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal-dark leading-tight tracking-tight">
            One Ecosystem Powering Every Learner in <span className="text-emerald-base">Bangladesh.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-neutral font-medium mt-6 leading-relaxed max-w-lg">
            Integrating physical supply infrastructure, digital identity, and essential health services into a unified platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link 
              href="#partner"
              className="bg-emerald-base hover:bg-emerald-deep text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-lg shadow-emerald-base/30 hover:shadow-emerald-base/50 hover:-translate-y-1 flex items-center justify-center group"
            >
              Partner with Us
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="#pillars"
              className="bg-white border-2 border-slate-200 hover:border-emerald-base hover:bg-emerald-base/5 text-charcoal-dark px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 flex items-center justify-center"
            >
              Explore the 5 Pillars
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Mockup Concept */}
        <div className="relative z-10 w-full h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Decorative Background Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[400px] md:h-[400px] bg-emerald-base/10 rounded-full blur-3xl -z-10"></div>
          
          {/* Mockup Cards */}
          <div className="relative w-full max-w-md h-full perspective-1000">
            
            {/* Layer 1: Digital Identity */}
            <div className="absolute top-10 left-0 right-0 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform rotate-[-2deg] transition-transform duration-500 hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-base">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Smart ID</p>
                    <p className="font-bold text-charcoal-dark">Student Identity</p>
                  </div>
                </div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-base w-3/4"></div>
              </div>
              <p className="text-xs text-slate-400 mt-3">Verified • Active Attendance</p>
            </div>

            {/* Layer 2: Core Supplies & Knowledge */}
            <div className="absolute top-36 left-4 right-[-1rem] bg-charcoal-dark text-white p-6 rounded-2xl shadow-2xl border border-slate-800 transform rotate-[3deg] transition-transform duration-500 hover:rotate-0 hover:-translate-y-2 hover:shadow-emerald-base/20 z-20">
               <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-emerald-glow">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase">Shikkhabari</p>
                    <p className="font-bold">Board Books & News</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-medium">PDF Access</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-medium">Theory Pubs</span>
                </div>
            </div>

            {/* Layer 3: Health */}
            <div className="absolute top-64 left-[-1rem] right-4 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform rotate-[-1deg] transition-transform duration-500 hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl z-30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                    <Stethoscope size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Health ID</p>
                    <p className="font-bold text-charcoal-dark">24/7 Telemedicine</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Powered by</p>
                  <p className="font-bold text-xs">Medico Bio</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Trust Banner (Media Partners) */}
      <div className="w-full bg-white mt-24 py-8 border-y border-slate-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-slate-400 mb-6 uppercase tracking-widest">Our Media & Print Partners</p>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {partners.map((partner, index) => (
              <span key={index} className="text-lg md:text-xl font-black text-slate-300 tracking-tighter">
                {partner.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
