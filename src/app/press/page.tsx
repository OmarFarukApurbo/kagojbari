"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Newspaper, ExternalLink, Download, Search, Calendar, ChevronRight } from "lucide-react";

export default function PressPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOutlet, setSelectedOutlet] = useState("All");

  const pressArticles = [
    {
      id: 1,
      title: "Kagojbari to distribute education materials to 4.5 lakh students to break Guinness World Record",
      outlet: "The Business Standard",
      logo: "/partners/1738567741_TBS.jpg",
      date: "August 15, 2025",
      category: "Campaigns",
      summary: "In a bid to address educational disparity in rural Bangladesh, EdTech startup Kagojbari has announced a nationwide campaign to distribute basic learning materials to 450,000 students. The initiative seeks to break the Guinness World Record for the largest one-day distribution of educational kits.",
      link: "https://www.tbsnews.net/bangladesh/education/kagojbari-distribute-education-materials-45-lakh-students-break-guinness-world",
      featured: true,
    },
    {
      id: 2,
      title: "Kagojbari partners with Medico Bio for student health IDs and telemedicine",
      outlet: "Daily Sun",
      logo: "/partners/daily-sun-logo-high-quality-free-vector.jpg",
      date: "November 10, 2025",
      category: "Partnerships",
      summary: "Kagojbari and Medico Bio signed an MoU to launch low-cost student health cards and telemedicine platforms. Under this initiative, students in partner schools gain 24/7 access to specialist consultations and digital prescription services for only Tk100 per year.",
      link: "https://www.daily-sun.com/post/795123/Kagojbari-Medico-Bio-partner-to-launch-health-card-for-students",
      featured: false,
    },
    {
      id: 3,
      title: "কাগজবাড়ি ও মেডিকো বায়োর যৌথ উদ্যোগে গ্রামীণ স্কুলে ল্যাপটপ ও ল্যাব প্রতিষ্ঠা",
      outlet: "Somoyer Alo",
      logo: "/partners/default_img_1.webp",
      date: "December 05, 2025",
      category: "Technology",
      summary: "শিক্ষা ও চিকিৎসাকে একই প্ল্যাটফর্মে নিয়ে আসতে দেশের প্রত্যন্ত অঞ্চলের বিদ্যালয়ে ল্যাপটপ বিতরণ করেছে কাগজবাড়ি। এর ফলে গ্রামীণ শিক্ষার্থীরা সরাসরি ল্যাপটপের মাধ্যমে চিকিৎসকদের সঙ্গে ভিডিও কনসালটেশন করতে পারছে।",
      link: "https://www.somoyeralo.com",
      featured: false,
    },
    {
      id: 4,
      title: "Guinness Record Campaign slogan: 'জুলাইয়ের রক্তে লিখি শিক্ষার অধিকার'",
      outlet: "Jugantor",
      logo: "/partners/যুগান্তরের_লোগো.svg.png",
      date: "August 20, 2025",
      category: "Campaigns",
      summary: "Kagojbari's director Zahid Anowar explained that the upcoming Guinness attempt is dedicated to the memory and spirit of the July student uprising, highlighting education as a basic constitutional right for all.",
      link: "https://www.jugantor.com",
      featured: false,
    },
    {
      id: 5,
      title: "ATN News Highlights Kagojbari's Low-Cost Stationery Model",
      outlet: "ATN News",
      logo: "/partners/ATN_News_Logo_without_slogan.svg.png",
      date: "October 12, 2025",
      category: "Ecosystem",
      summary: "A TV feature on how Kagojbari bridges school supplies fragmentation by providing customized student notebooks and uniforms directly to institutions, lowering parental expense by 30%.",
      link: "https://www.youtube.com",
      featured: false,
    },
    {
      id: 6,
      title: "Education and Health Ecosystem for Every Learner: TV Feature",
      outlet: "NTV",
      logo: "/partners/NTV_(Bangladesh)_logo.svg.png",
      date: "November 28, 2025",
      category: "Ecosystem",
      summary: "Special coverage on the digital identity registry implemented by Kagojbari, enabling real-time attendance reporting linked to the low-cost student smart cards.",
      link: "https://www.youtube.com",
      featured: false,
    }
  ];

  const outlets = ["All", "The Business Standard", "Daily Sun", "Somoyer Alo", "Jugantor", "ATN News", "NTV"];

  const filteredArticles = pressArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesOutlet = selectedOutlet === "All" || article.outlet === selectedOutlet;
    return matchesSearch && matchesOutlet;
  });

  const featuredArticle = pressArticles.find((art) => art.featured);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 pt-28 pb-20">
        {/* Banner Section */}
        <section className="bg-gradient-to-r from-emerald-deep to-emerald-dark text-white py-16 px-6 md:px-12 relative overflow-hidden mb-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent)]"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <span className="bg-emerald-base/20 border border-emerald-base/30 text-emerald-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Newsroom
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tight">
              Kagojbari in the Spotlight
            </h1>
            <p className="text-emerald-light/90 text-lg max-w-2xl leading-relaxed">
              Explore national and local press coverage, partnership announcements, and major media features highlighting our ecosystem's growth.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Featured Hero Article */}
          {featuredArticle && (
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl mb-16 hover:shadow-2xl hover:border-emerald-base/30 transition-all duration-500 group">
              <div className="flex flex-col lg:flex-row">
                <div className="p-8 lg:p-12 lg:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider">
                      <span className="bg-emerald-50 text-emerald-deep px-3 py-1 rounded-full">{featuredArticle.category}</span>
                      <span>•</span>
                      <span className="flex items-center"><Calendar size={14} className="mr-1" /> {featuredArticle.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-charcoal-dark mb-4 leading-tight group-hover:text-emerald-deep transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                      {featuredArticle.summary}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-6 mt-4 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center p-1">
                        <Image 
                          src={featuredArticle.logo} 
                          alt={featuredArticle.outlet}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Published by</p>
                        <p className="text-sm font-bold text-slate-700">{featuredArticle.outlet}</p>
                      </div>
                    </div>
                    <a 
                      href={featuredArticle.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-deep hover:bg-emerald-base text-white px-6 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 flex items-center self-start sm:self-center gap-1.5 shadow-md shadow-emerald-deep/15"
                    >
                      Read Full Article <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="lg:w-1/3 bg-slate-100 relative min-h-[250px] overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-200 group-hover:opacity-90 transition-opacity">
                  <Image 
                    src="/press/featured_news.png" 
                    alt="Featured Placement"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <p className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-300">Featured Placement</p>
                    <p className="text-sm font-bold text-white mt-1">Front Page Cover</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filtering Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search headlines and keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-emerald-base shadow-sm focus:shadow-emerald-base/10 transition-all text-charcoal-dark"
              />
            </div>

            {/* Outlet Filter Tabs */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
              {outlets.map((outlet) => (
                <button
                  key={outlet}
                  onClick={() => setSelectedOutlet(outlet)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                    selectedOutlet === outlet
                      ? "bg-emerald-deep text-white shadow-md shadow-emerald-deep/15"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {outlet}
                </button>
              ))}
            </div>
          </div>

          {/* Press Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-base/20 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center p-1">
                        <Image 
                          src={article.logo} 
                          alt={article.outlet} 
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center">
                        <Calendar size={12} className="mr-1" /> {article.date}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold tracking-widest text-emerald-deep uppercase bg-emerald-50 px-2 py-0.5 rounded">
                      {article.category}
                    </span>

                    <h3 className="text-lg font-bold text-charcoal-dark mt-3 mb-4 leading-snug group-hover:text-emerald-deep transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-4">
                      {article.summary}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 px-6 py-4 bg-slate-50/50 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-600">{article.outlet}</span>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-deep hover:text-emerald-base flex items-center gap-1 group/btn"
                    >
                      Read Story 
                      <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
              <Newspaper className="mx-auto text-slate-300 mb-4" size={48} />
              <p className="text-slate-500 font-medium">No articles found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedOutlet("All"); }}
                className="text-xs font-bold text-emerald-deep mt-2 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Press Kit Download Section */}
          <section className="bg-slate-900 rounded-3xl text-white mt-20 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-deep/20 rounded-full blur-3xl -z-10"></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative z-10">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Download Press Assets</h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Are you a journalist, writer, or researcher covering EdTech in Bangladesh? Download our complete press package including logos, ecosystem brochures, high-res team photos, and leadership biographies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <a 
                  href="/Kagojbari ECOSYSTEM.pdf" 
                  download
                  className="bg-emerald-deep hover:bg-emerald-base text-white px-6 py-3 rounded-lg text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-emerald-deep/20"
                >
                  <Download size={16} /> Download Ecosystem Booklet (PDF)
                </a>
                <button 
                  onClick={() => alert("Press Kit zip file will download in a production build.")}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-lg text-xs font-bold transition-all duration-300 border border-slate-700 flex items-center justify-center gap-2"
                >
                  <Download size={16} /> Press Kit (Logos & Assets)
                </button>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
