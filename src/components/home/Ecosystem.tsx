"use client";

import { useState } from "react";
import { Database, PackageOpen, BookOpen, HeartPulse, Bus } from "lucide-react";

export default function Ecosystem() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const layers = [
    { id: 0, name: "Layer 1: Identity & Digital", desc: "The core platform database." },
    { id: 1, name: "Layer 2: Core Services", desc: "Physical supplies & knowledge." },
    { id: 2, name: "Layer 3: Community", desc: "Health & student life services." },
  ];

  const pillars = [
    {
      id: 1,
      layer: 1,
      title: "Core Supply Infrastructure",
      description: "School-branded stationery, custom notebooks, uniforms, and smart ID cards at minimum margins to drive accessibility.",
      icon: <PackageOpen size={32} className="text-emerald-base" />
    },
    {
      id: 2,
      layer: 0,
      title: "Digital Identity & Automation",
      description: "Custom subdomains (school.kagojbari.edu), robust attendance tracking, and centralized student/teacher databases.",
      icon: <Database size={32} className="text-emerald-base" />
    },
    {
      id: 3,
      layer: 1,
      title: "Knowledge & News (Shikkhabari)",
      description: "Dedicated education news portal, central E-Books/PDF access, school publishing, and student journalism clubs.",
      icon: <BookOpen size={32} className="text-emerald-base" />
    },
    {
      id: 4,
      layer: 2,
      title: "Student Life & Telemedicine",
      description: "Tk 100/year Health ID in partnership with Medico Bio, offering 24/7 doctors and family healthcare benefits.",
      icon: <HeartPulse size={32} className="text-emerald-base" />
    },
    {
      id: 5,
      layer: 2,
      title: "Student Transport & Safety",
      description: "Planned route-based transport, verified local drivers, and ID-integrated safety tracking for students.",
      icon: <Bus size={32} className="text-emerald-base" />
    }
  ];

  const filteredPillars = pillars.filter(p => p.layer === activeTab);

  return (
    <section id="pillars" className="py-24 px-6 md:px-12 bg-white max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="bg-emerald-base/10 text-emerald-base px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-emerald-base/20 inline-block mb-4">
          Interactive Architecture
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-4">The 3-Layer Backbone</h2>
        <p className="text-slate-neutral max-w-2xl mx-auto">
          Our 5-pillar ecosystem integrates physical supplies, digital tools, and community services into a unified framework.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
        {layers.map((layer) => (
          <button
            key={layer.id}
            onClick={() => setActiveTab(layer.id)}
            className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-left md:text-center border-2 ${
              activeTab === layer.id 
                ? "bg-emerald-base border-emerald-base text-white shadow-lg shadow-emerald-base/20 scale-105" 
                : "bg-white border-slate-100 text-slate-500 hover:border-emerald-base/40 hover:text-charcoal-dark"
            }`}
          >
            <div className="text-sm md:text-base">{layer.name}</div>
            <div className={`text-xs mt-1 font-normal ${activeTab === layer.id ? "text-emerald-100" : "text-slate-400"}`}>
              {layer.desc}
            </div>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[250px]">
        {filteredPillars.map((pillar) => (
          <div 
            key={pillar.id}
            className={`bg-slate-50 border border-slate-200/60 rounded-2xl p-8 hover:bg-white hover:border-emerald-base/40 transition-all duration-500 hover:shadow-xl hover:shadow-slate-100 animate-in fade-in slide-in-from-bottom-4 ${filteredPillars.length === 1 ? 'md:col-span-2 max-w-2xl mx-auto w-full' : ''}`}
          >
            <div className="w-16 h-16 bg-emerald-base/10 rounded-2xl flex items-center justify-center mb-6">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-bold text-charcoal-dark mb-3">{pillar.title}</h3>
            <p className="text-slate-neutral leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
