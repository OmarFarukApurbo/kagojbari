"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function BackboneFeature() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="backbone-school" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Image/Video Thumbnail */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full bg-black">
            {isPlaying ? (
              <video
                src="/Backbone_School.mp4"
                poster="/backbone_school.png"
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <Image 
                  src="/backbone_school.png" 
                  alt="The Backbone School environment" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/50 text-white hover:bg-white hover:text-emerald-base hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer"
                    aria-label="Play video"
                  >
                    <PlayCircle size={48} strokeWidth={1.5} />
                  </button>
                </div>
              </>
            )}
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-base/10 rounded-full blur-2xl -z-10"></div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal-dark mb-4 leading-tight">
            The Backbone School
          </h2>
          <p className="text-xl text-slate-500 font-bengali mb-6">
            স্মার্ট বাংলাদেশের স্মার্ট স্কুল
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            The Backbone School is a modern, upazila-level academic network delivering a globally competitive curriculum. We provide advanced educational frameworks and facilities designed to elevate the standard of learning across the nation.
          </p>
          <Link 
            href="#projects"
            className="bg-emerald-base hover:bg-emerald-deep text-white px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 w-fit shadow-md hover:shadow-emerald-base/40"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}
