"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { HandHelping, Award, CreditCard, Banknote, Sparkles, Building2, Send, CheckCircle2 } from "lucide-react";

export default function DonatePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    tier: "Kit Sponsor",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const sponsorshipTiers = [
    {
      name: "Kit Sponsor",
      price: "Tk 25,000+",
      benefits: ["Provides full stationery sets to 100+ students", "Logo listed on our campaign portal", "Social media feature"],
      featured: false,
    },
    {
      name: "School Sponsor",
      price: "Tk 1,50,000+",
      benefits: [
        "Sponsors materials & Health IDs for a full partner school",
        "Corporate logo placed on the back of student IDs",
        "Banner placement at free medical camp",
        "Detailed impact reporting"
      ],
      featured: true,
    },
    {
      name: "District Partner",
      price: "Tk 5,00,000+",
      benefits: [
        "Exclusivity in a targeted upazila or district",
        "Co-branded Guinness World Record campaign distribution boxes",
        "VIP guest status at regional distributions & health camps",
        "National press release feature",
        "Dedicated corporate CSR case study"
      ],
      featured: false,
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email.");
      return;
    }
    // Simulate API submission
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 pt-28 pb-20">
        {/* Banner Section */}
        <section className="bg-gradient-to-r from-emerald-deep to-emerald-dark text-white py-16 px-6 md:px-12 relative overflow-hidden mb-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent)]"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <span className="bg-emerald-base/20 border border-emerald-base/30 text-emerald-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Get Involved
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tight">
              Sponsor Our Initiatives
            </h1>
            <p className="text-emerald-light/90 text-lg max-w-2xl leading-relaxed">
              Join us in bridging educational and health inequalities in Bangladesh. Your support funds materials, student identity cards, and free telemedicine access.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
            {/* Left/Middle: Donation details (2 cols) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Payment Gateway Format */}
              <div className="bg-white rounded-3xl border-0 ring-1 ring-slate-100 p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10 transition-all duration-700 group-hover:bg-emerald-100/50"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-50 rounded-full blur-2xl -z-10 transition-all duration-700 group-hover:bg-amber-100/50"></div>
                
                <div className="flex flex-col items-center text-center space-y-3 mb-10 pb-8 border-b border-slate-100/60 relative z-10">
                  <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white p-3.5 rounded-2xl shadow-lg shadow-emerald-500/30 mb-2">
                    <CreditCard size={28} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight">Secure Online Donation</h3>
                  <p className="text-sm text-slate-500 max-w-sm">Support our initiatives using your preferred payment method.</p>
                </div>

                <div className="space-y-8 relative z-10">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">Select Amount (BDT)</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {["100", "500", "1,000", "5,000"].map((amount, idx) => (
                        <button key={idx} className="py-3.5 border-2 border-slate-100 rounded-2xl text-slate-600 font-bold hover:border-emerald-base hover:bg-emerald-50/50 hover:text-emerald-deep hover:shadow-md transition-all duration-300 focus:border-emerald-deep focus:bg-emerald-deep focus:text-white focus:shadow-xl focus:shadow-emerald-500/20 active:scale-95">
                          ৳ {amount}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 text-center">Or Enter Custom Amount</label>
                    <div className="relative max-w-xs mx-auto">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">৳</span>
                      <input type="number" placeholder="Enter amount" className="w-full bg-white border-2 border-slate-100 focus:bg-white focus:border-emerald-400 rounded-2xl py-3.5 pl-12 pr-6 text-base font-bold text-slate-800 focus:outline-none transition-all shadow-sm focus:shadow-md focus:ring-4 focus:ring-emerald-500/10 text-center" />
                    </div>
                  </div>

                  <div className="pt-6">
                    <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white py-4 md:py-5 rounded-2xl text-base font-extrabold shadow-xl shadow-emerald-500/25 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                      Proceed to Payment <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                    <div className="flex items-center justify-center gap-4 mt-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                      <span className="text-xs font-bold text-slate-500 tracking-wider">VISA</span>
                      <span className="text-xs font-bold text-slate-500 tracking-wider">MASTERCARD</span>
                      <span className="text-xs font-bold text-pink-600 tracking-wider">bKash</span>
                      <span className="text-xs font-bold text-orange-600 tracking-wider">Nagad</span>
                    </div>
                    <p className="text-[10px] text-center text-slate-400 mt-4 font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span> Secured by SSLCommerz
                    </p>
                  </div>
                </div>
              </div>

              {/* Manual Transfer Prompt */}
              <div className="bg-slate-100 rounded-2xl border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-bold text-charcoal-dark">Manual Transfer or Cash?</h4>
                  <p className="text-sm text-slate-500 mt-1">If you prefer making a direct bank transfer or a physical cash donation, please let us know.</p>
                </div>
                <a href="#inquiry" className="flex-shrink-0 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-xl text-sm font-bold shadow-sm transition-all">
                  Contact Us
                </a>
              </div>

            </div>

            {/* Right: Quick Quote / Impact */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-deep/10 rounded-full blur-3xl -z-10"></div>
              
              <div className="mb-8">
                <Sparkles className="text-amber-400 mb-4" size={32} />
                <h4 className="text-lg font-bold">Your Impact</h4>
              </div>
              
              <div className="space-y-6 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-base mt-2 flex-shrink-0"></div>
                  <p><strong>Tk 100</strong> sponsors telemedicine access and a health ID for a child and their family for one whole year.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-base mt-2 flex-shrink-0"></div>
                  <p><strong>Tk 250</strong> buys a complete educational bundle (custom exercise books, pens, rulers) for the GWR Campaign.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-base mt-2 flex-shrink-0"></div>
                  <p><strong>Tk 15,000</strong> sets up a tele-consultation terminal with a laptop in a rural school.</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-8 mt-12">
                <p className="text-xs text-slate-400 italic">
                  "At Kagojbari, we believe education is a right, not a privilege. We connect physical supply lines, digital identity registries, and health access together."
                </p>
                <p className="text-xs font-bold text-emerald-light mt-3">— Omar Faruk Apurbo, CEO</p>
              </div>
            </div>
          </div>

          {/* Corporate Sponsorship Tiers Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-deep bg-emerald-50 px-3 py-1 rounded-full">
                Sponsor Tiers
              </span>
              <h3 className="text-3xl font-extrabold text-charcoal-dark mt-4">Corporate & CSR Packages</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto mt-2">
                Outlining clear brackets for organizational sponsorships and alignment opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsorshipTiers.map((tier, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white rounded-3xl p-8 border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative ${
                    tier.featured 
                      ? "border-emerald-base shadow-xl ring-2 ring-emerald-base/10" 
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-deep text-white text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h4 className="text-xl font-bold text-charcoal-dark mb-2">{tier.name}</h4>
                    <p className="text-2xl font-extrabold text-emerald-deep tracking-tight mb-6">{tier.price}</p>
                    
                    <ul className="space-y-3.5 text-xs text-slate-500 font-semibold">
                      {tier.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-emerald-base mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="#inquiry"
                    onClick={() => setFormData(prev => ({ ...prev, tier: tier.name }))}
                    className={`mt-10 py-3 rounded-lg text-xs font-bold text-center transition-all ${
                      tier.featured
                        ? "bg-emerald-deep hover:bg-emerald-base text-white shadow-md shadow-emerald-deep/15"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    Select this tier
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Inquiry Form */}
          <section id="inquiry" className="bg-white rounded-3xl border border-slate-200 p-8 md:p-16 max-w-4xl mx-auto shadow-sm">
            <div className="flex items-center space-x-3 mb-10 pb-6 border-b border-slate-100">
              <div className="bg-emerald-100 text-emerald-deep p-2.5 rounded-xl">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal-dark">Corporate & Partner Inquiry</h3>
                <p className="text-xs text-slate-400">Fill in this form, and our coordinator will connect with you in 24 hours.</p>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-emerald-50 text-emerald-deep w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={44} />
                </div>
                <h4 className="text-2xl font-extrabold text-charcoal-dark mb-2">Thank you!</h4>
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                  Your sponsorship inquiry has been registered. Our partner success manager will contact you at <span className="font-bold">{formData.email}</span> shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-bold text-emerald-deep hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Omar Faruk Apurbo"
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-base rounded-lg py-2.5 px-4 text-sm focus:outline-none transition-all text-charcoal-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Corporate Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. sponsor@company.com"
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-base rounded-lg py-2.5 px-4 text-sm focus:outline-none transition-all text-charcoal-dark"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Organization / Brand</label>
                    <input
                      type="text"
                      name="org"
                      value={formData.org}
                      onChange={handleInputChange}
                      placeholder="e.g. Medico Bio"
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-base rounded-lg py-2.5 px-4 text-sm focus:outline-none transition-all text-charcoal-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Sponsorship Tier</label>
                    <select
                      name="tier"
                      value={formData.tier}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-base rounded-lg py-2.5 px-4 text-sm focus:outline-none transition-all text-charcoal-dark cursor-pointer"
                    >
                      <option value="Kit Sponsor">Kit Sponsor (Tk 25k+)</option>
                      <option value="School Sponsor">School Sponsor (Tk 150k+)</option>
                      <option value="District Partner">District Partner (Tk 500k+)</option>
                      <option value="Other donation">General / Custom Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Inquiry Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your brand goals, target region, or details for customization..."
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-base rounded-lg py-2.5 px-4 text-sm focus:outline-none transition-all text-charcoal-dark"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-deep hover:bg-emerald-base text-white py-3 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-emerald-deep/15"
                >
                  <Send size={16} /> Send Sponsorship Inquiry
                </button>
              </form>
            )}
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
