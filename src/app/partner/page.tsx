"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Handshake, Building2, Users, User, Send } from "lucide-react";

export default function PartnerPage() {
  const [partnerType, setPartnerType] = useState("organization");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-28 pb-24">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 text-emerald-deep rounded-2xl mb-6 shadow-sm">
            <Handshake size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-charcoal-dark tracking-tight mb-6">
            Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">Kagojbari</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Whether you're an individual passionate about education or a large institution looking to create national impact, we have a place for you in our ecosystem.
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] border border-slate-100 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-50 rounded-full blur-2xl -z-10"></div>
            
            <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
              
              {/* Partner Type Selection */}
              <div>
                <label className="block text-sm font-bold text-charcoal-dark mb-4">I want to partner as a(n):</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { id: 'individual', label: 'Individual', icon: User },
                    { id: 'group', label: 'Group', icon: Users },
                    { id: 'organization', label: 'Organization', icon: Building2 },
                    { id: 'institution', label: 'Institution', icon: Building2 },
                  ].map((type) => {
                    const Icon = type.icon;
                    const isActive = partnerType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setPartnerType(type.id)}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 ${
                          isActive 
                            ? 'border-emerald-base bg-emerald-50/50 text-emerald-deep shadow-md' 
                            : 'border-slate-100 bg-white text-slate-500 hover:border-emerald-200 hover:bg-emerald-50/20'
                        }`}
                      >
                        <Icon size={24} className={`mb-2 ${isActive ? 'text-emerald-500' : 'text-slate-400'}`} />
                        <span className="text-xs font-bold uppercase tracking-wider">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal/Company Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {partnerType === 'individual' ? 'Full Name' : `${partnerType.charAt(0).toUpperCase() + partnerType.slice(1)} Name`} *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder={partnerType === 'individual' ? "e.g. John Doe" : "e.g. Tech Foundation"}
                    className="w-full bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-emerald-400 rounded-xl py-3 px-4 text-sm font-semibold text-slate-800 focus:outline-none transition-all shadow-sm focus:shadow-md"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="contact@example.com"
                    className="w-full bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-emerald-400 rounded-xl py-3 px-4 text-sm font-semibold text-slate-800 focus:outline-none transition-all shadow-sm focus:shadow-md"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+880 1XXX XXXXXX"
                    className="w-full bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-emerald-400 rounded-xl py-3 px-4 text-sm font-semibold text-slate-800 focus:outline-none transition-all shadow-sm focus:shadow-md"
                  />
                </div>
              </div>

              {/* Proposal text area */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">How would you like to partner? *</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell us about your ideas, resources, or how we can collaborate..."
                  className="w-full bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-emerald-400 rounded-xl py-4 px-4 text-sm font-semibold text-slate-800 focus:outline-none transition-all shadow-sm focus:shadow-md resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white py-4 rounded-xl text-base font-extrabold shadow-xl shadow-emerald-500/25 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group"
              >
                Submit Proposal
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <p className="text-xs text-center text-slate-400 font-medium">
                Our partnership team will review your submission and get back to you within 24-48 hours.
              </p>

            </form>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
