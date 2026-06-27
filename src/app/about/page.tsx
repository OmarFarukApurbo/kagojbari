"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 pt-28 pb-20">
        {/* Banner Section */}
        <section className="bg-gradient-to-r from-emerald-deep to-emerald-dark text-white py-16 px-6 md:px-12 relative overflow-hidden mb-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent)]"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <span className="bg-emerald-base/20 border border-emerald-base/30 text-emerald-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tight">
              About Kagojbari
            </h1>
            <p className="text-emerald-light/90 text-lg max-w-2xl leading-relaxed">
              We are building the ultimate digital and physical backbone for education across Bangladesh.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-16">
          
          {/* Who We Are */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal-dark mb-6">Who We Are</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Kagojbari is a Bangladesh government-approved, RJSC-registered private limited company building a multi-service education infrastructure ecosystem for schools, students, and families across Bangladesh. 
              </p>
              <p>
                The initiative began operations to address persistent structural gaps in the education system by integrating physical supplies, digital infrastructure, identity systems, health access, content, skills, and community services under a single platform. We are not just a supply chain; we are changing how education works.
              </p>
            </div>
          </section>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 rounded-3xl p-8 md:p-10 border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-deep mb-4 uppercase tracking-wider text-sm">Our Vision</h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                To build Bangladesh’s education ecosystem - where every student is connected to learning, identity, health, information, skills, and opportunity through one unified platform.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-3xl p-8 md:p-10 border border-amber-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4 uppercase tracking-wider text-sm">Our Mission</h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                We remove the barriers that hold students back - cost, access, and fragmentation - by delivering affordable, connected services through a scalable platform that supports students, families, schools, NGOs, and government together.
              </p>
            </div>
          </div>

          {/* Leadership */}
          <section className="text-center pt-8">
            <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-deep bg-emerald-50 px-3 py-1 rounded-full">
              Leadership
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-dark mt-4 mb-10">Our Executive Team</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 border-4 border-white shadow-md flex items-center justify-center text-slate-400">
                  <span className="text-2xl font-bold">OA</span>
                </div>
                <h4 className="font-bold text-charcoal-dark text-xl">Omar Faruk Apurbo</h4>
                <p className="text-emerald-deep font-semibold mt-1">Chief Executive Officer</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 border-4 border-white shadow-md flex items-center justify-center text-slate-400">
                  <span className="text-2xl font-bold">RK</span>
                </div>
                <h4 className="font-bold text-charcoal-dark text-xl">Rejwan Kabir</h4>
                <p className="text-emerald-deep font-semibold mt-1">Managing Director</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
