import Link from "next/link";
import { GraduationCap, Trophy } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-slate-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-4">Flagship Projects</h2>
          <p className="text-slate-neutral max-w-2xl mx-auto">
            Strategic initiatives designed to create an immediate national impact and elevate educational standards across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Project 1 */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group">
            <div className="bg-slate-100 text-charcoal-dark px-4 py-1.5 rounded-full text-xs font-bold tracking-wider w-fit mb-8 uppercase flex items-center">
              <GraduationCap size={16} className="mr-2" /> Academic Network
            </div>
            <h3 className="text-3xl font-bold text-charcoal-dark mb-4">The Backbone School</h3>
            <p className="text-slate-neutral leading-relaxed mb-8">
              A nationwide network of modern upazila-level English-medium schools delivering a globally competitive Pearson Edexcel curriculum. 
              Currently in the regulatory process, starting with a flagship campus and 5 pilot branches.
            </p>
            <Link href="#" className="text-emerald-base font-bold text-sm inline-flex items-center group-hover:text-emerald-deep">
              Learn More <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-emerald-base/20 hover:shadow-2xl hover:shadow-emerald-base/20 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-base/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-base/10 transition-colors"></div>
            
            <div className="bg-emerald-base/10 text-emerald-base px-4 py-1.5 rounded-full text-xs font-bold tracking-wider w-fit mb-8 uppercase flex items-center">
              <Trophy size={16} className="mr-2" /> National Scale Campaign
            </div>
            <h3 className="text-3xl font-bold text-charcoal-dark mb-4">2026 Guinness World Record Campaign</h3>
            <p className="text-slate-neutral leading-relaxed mb-8">
              A historic Education Material Distribution Campaign designed to bridge national inequalities and deliver essential supplies to marginal areas. Showing the world that Bangladesh is an education-friendly nation.
            </p>
            <Link href="#" className="text-emerald-base font-bold text-sm inline-flex items-center group-hover:text-emerald-deep">
              View Campaign Details <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
