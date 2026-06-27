import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="vision" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero_bg.png"
          alt="Classroom in Bangladesh"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col mt-20">
        
        <div className="bg-emerald-base/20 text-emerald-glow px-4 py-1.5 rounded-full text-xs font-bold tracking-wider w-fit mb-6 uppercase border border-emerald-glow/30 flex items-center shadow-lg backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-glow mr-2 animate-pulse shadow-[0_0_8px_#10b981]"></span>
          Govt. Approved EdTech
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight max-w-4xl drop-shadow-lg">
          One Ecosystem Powering Every Learner in <span className="text-emerald-glow">Bangladesh.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-200 font-medium mt-6 leading-relaxed max-w-2xl drop-shadow-md">
          Integrating physical supply infrastructure, digital identity, and essential health services into a unified, national platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link 
            href="#partner"
            className="bg-emerald-base hover:bg-emerald-glow text-white px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 shadow-xl shadow-emerald-base/20 hover:shadow-emerald-glow/40 hover:-translate-y-1 text-center"
          >
            Partner with Us
          </Link>
          
          <Link 
            href="#pillars"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 text-center"
          >
            Explore the 5 Pillars
          </Link>
        </div>
      </div>
    </section>
  );
}
