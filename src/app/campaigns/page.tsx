"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Trophy, ShieldAlert, Heart, Calendar, Users, MapPin, PlayCircle, Eye, HandHelping, Award, ArrowRight } from "lucide-react";

export default function CampaignsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const campaigns = [
    {
      id: 1,
      title: "Guinness World Record Campaign - 2026",
      slogan: "জুলাইয়ের রক্তে লিখি শিক্ষার অধিকার",
      description: "A historic, national-scale campaign designed to distribute essential education materials (exercise books, pens, school kits) to 450,000 students across 1,500 schools in Bangladesh within a single day. This project aims to highlight Bangladesh's educational potential and establish a world record.",
      status: "Upcoming",
      target: "4,500,000 kit items / 1,500 schools",
      timeline: "Targeting mid-2026",
      icon: Trophy,
      color: "from-amber-500 to-orange-600",
      ctaText: "Sponsor a school kit",
      ctaLink: "/donate",
      highlights: ["60,000+ kg supplies", "1,200+ schools engaged", "National media coverage"],
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video embed
    },
    {
      id: 2,
      title: "Medico Bio Telemedicine & Health Camps",
      slogan: "Integrated Student Healthcare & Tele-Consultation",
      description: "A strategic partnership with Medico Bio providing low-cost digital health IDs and 24/7 specialist consultation to students and their families for just Tk 100 per year. We also run 4 free medical camps annually in partner institutions and distribute laptops to rural schools to connect students with specialist doctors.",
      status: "Active",
      target: "50,000+ registered family members",
      timeline: "Ongoing (365 days)",
      icon: Heart,
      color: "from-rose-500 to-pink-600",
      ctaText: "Sponsor a health camp",
      ctaLink: "/donate",
      highlights: ["Free specialist consultancy", "Smart Health IDs", "4 institutional camps/year"],
    },
    {
      id: 3,
      title: "Pathoshishu Winter Clothing & Food Drive",
      slogan: "Warmth & Care for Underprivileged Children",
      description: "Our annual winter support program focusing on pathoshishu (street children) and marginalized communities. Conducted every December, we distribute high-quality warm blankets, jackets, socks, and hot nutritious meals to children across major rail stations and urban slums in Dhaka and Chittagong.",
      status: "Completed",
      target: "5,000+ children supported",
      timeline: "Completed (Dec 2025)",
      icon: HandHelping,
      color: "from-emerald-500 to-teal-600",
      ctaText: "Inquire for Next Winter",
      ctaLink: "/donate#inquiry",
      highlights: ["1,500 blankets distributed", "Hot meals served", "Volunteer network across 5 zones"],
    },
    {
      id: 4,
      title: "Kagojbari Creative Talent Hunt",
      slogan: "Handwriting & Drawing Regional Contests",
      description: "Nurturing creative expression, handwriting, and drawing skills among school students in remote upazilas. We organized competitions in over 200 regional schools, providing awards, certificates, and special scholarship kits to young creators to build confidence and celebrate local talent.",
      status: "Completed",
      target: "12,000+ active student entries",
      timeline: "Completed (October 2025)",
      icon: Award,
      color: "from-indigo-500 to-purple-600",
      ctaText: "View Gallery",
      ctaLink: "/press",
      highlights: ["Over 200 schools", "Cash prizes and medals", "Exhibited winning art"],
    }
  ];

  const filteredCampaigns = activeTab === "All" 
    ? campaigns 
    : campaigns.filter(c => c.status === activeTab);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 pt-28 pb-20">
        {/* Banner Section */}
        <section className="bg-gradient-to-r from-emerald-deep to-emerald-dark text-white py-16 px-6 md:px-12 relative overflow-hidden mb-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent)]"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <span className="bg-emerald-base/20 border border-emerald-base/30 text-emerald-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Social Development
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tight">
              Campaigns & Projects
            </h1>
            <p className="text-emerald-light/90 text-lg max-w-2xl leading-relaxed">
              We translate our digital and physical educational backbone into real-world impact. Explore our flagship world records, healthcare campaigns, and seasonal outreach efforts.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm flex space-x-1">
              {["All", "Active", "Upcoming", "Completed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-emerald-deep text-white shadow-md shadow-emerald-deep/15"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Campaigns Listing */}
          <div className="space-y-12">
            {filteredCampaigns.map((camp) => {
              const IconComponent = camp.icon;
              return (
                <div 
                  key={camp.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row">
                    
                    {/* Visual/Color Accent Pane */}
                    <div className={`lg:w-1/3 bg-gradient-to-br ${camp.color} p-8 md:p-12 text-white flex flex-col justify-between relative`}>
                      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                      <div>
                        <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                          <IconComponent size={32} />
                        </div>
                        <span className="bg-white/20 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                          {camp.status}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold mt-6 leading-tight">
                          {camp.title}
                        </h3>
                        {camp.slogan && (
                          <p className="text-white/80 font-hind-siliguri text-base md:text-lg font-semibold mt-2">
                            "{camp.slogan}"
                          </p>
                        )}
                      </div>

                      <div className="mt-12 border-t border-white/10 pt-6">
                        <div className="flex items-center text-xs space-x-2 text-white/90">
                          <Calendar size={14} />
                          <span>{camp.timeline}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Pane */}
                    <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-4">About the Initiative</h4>
                        <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
                          {camp.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <div>
                            <p className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">Key Metrics & Target</p>
                            <p className="text-base font-bold text-slate-700 mt-1 flex items-center gap-1.5">
                              <Users size={16} className="text-emerald-deep" /> {camp.target}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">Highlights</p>
                            <ul className="text-xs text-slate-600 font-semibold mt-1.5 space-y-1">
                              {camp.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-base"></span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-slate-100 pt-8 mt-4">
                        <Link
                          href={camp.ctaLink}
                          className="w-full sm:w-auto bg-emerald-deep hover:bg-emerald-base text-white px-8 py-3 rounded-lg text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md shadow-emerald-deep/15"
                        >
                          {camp.ctaText} <ArrowRight size={14} />
                        </Link>
                        
                        {camp.embedUrl && (
                          <button
                            onClick={() => alert("Campaign video player will open overlay in production build.")}
                            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-lg text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5"
                          >
                            <PlayCircle size={16} className="text-slate-500" /> Watch Promo Video
                          </button>
                        )}
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Photo Gallery Highlight */}
          <section className="mt-24">
            <div className="text-center mb-12">
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-deep bg-emerald-50 px-3 py-1 rounded-full">
                Past Moments
              </span>
              <h3 className="text-3xl font-extrabold text-charcoal-dark mt-4">Outreach Gallery</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto mt-2">
                Snapshots of notebooks, health IDs, school automation assemblies, and food distribution drives across Bangladesh.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Partner School Stationery", desc: "Custom Brand Supplies", src: "/campaigns/stationery.png" },
                { label: "Rural Health Camp", desc: "Medico Bio Checks", src: "/campaigns/health_camp.png" },
                { label: "GWR Kit Preparation", desc: "Warehouse Operations", src: "/campaigns/kit_prep.png" },
                { label: "Pathoshishu Blankets", desc: "Dhaka Distribution", src: "/campaigns/blankets.png" }
              ].map((img, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-slate-900 aspect-square rounded-2xl overflow-hidden border border-slate-200 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10 flex flex-col justify-end p-4 md:p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    <p className="text-[10px] uppercase tracking-widest text-emerald-light font-bold">Kagojbari Outreach</p>
                    <h5 className="text-white text-sm md:text-base font-bold mt-1 leading-snug">{img.label}</h5>
                    <p className="text-slate-300 text-xs mt-0.5">{img.desc}</p>
                  </div>
                  {/* Actual Photo */}
                  <div className="absolute inset-0">
                    <Image 
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Sponsorship */}
          <section className="bg-slate-900 rounded-3xl text-white mt-24 p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)]"></div>
            <div className="max-w-2xl mx-auto relative z-10">
              <Trophy size={48} className="mx-auto text-amber-400 mb-6" />
              <h3 className="text-3xl font-extrabold mb-4">Partner in our Guinness Record Campaign</h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                Help us prove that Bangladesh is an education-friendly nation. We are seeking corporate sponsors, brands, NGOs, and individual donors to supply notebooks and learning materials to marginalized students.
              </p>
              <Link 
                href="/donate" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-3 rounded-lg text-xs md:text-sm font-extrabold transition-all duration-300 inline-flex items-center gap-1.5 shadow-lg shadow-amber-500/25"
              >
                Become a Campaign Sponsor <ArrowRight size={16} />
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
