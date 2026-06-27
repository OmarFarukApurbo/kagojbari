import { Users, BookOpen, Database, HeartPulse, Bus, PackageOpen } from "lucide-react";

export default function Ecosystem() {
  return (
    <section id="pillars" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-4">Ecosystem Grid</h2>
          <p className="text-slate-500">Discover our comprehensive 5-pillar ecosystem framework.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-emerald-deep text-white flex items-center justify-center rounded-lg mb-6 shadow-md">
              <PackageOpen size={28} />
            </div>
            <h3 className="text-xl font-bold text-charcoal-dark mb-4">Core Supply</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Providing essential physical infrastructure directly to schools.
            </p>
            <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
              <li>School-branded stationery</li>
              <li>Custom notebooks & uniforms</li>
              <li>Smart ID cards for students</li>
              <li>Minimized profit margins</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-white border border-slate-100 text-emerald-base flex items-center justify-center rounded-lg mb-6 shadow-sm">
              <Database size={28} />
            </div>
            <h3 className="text-xl font-bold text-charcoal-dark mb-4">Digital Identity</h3>
            <ul className="text-sm text-slate-600 space-y-3 list-disc pl-4">
              <li>Restores standard database management across districts</li>
              <li>Provides automated attendance and performance tracking</li>
              <li>Allocates custom subdomains (school.kagojbari.edu)</li>
              <li>Integrates directly with national frameworks</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-white border border-slate-100 text-emerald-base flex items-center justify-center rounded-lg mb-6 shadow-sm">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-bold text-charcoal-dark mb-4">Knowledge Hub</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We create an accessible layer for knowledge dissemination and journalism. Ensuring educational resources are universally available, streamlining learning paths, and fostering academic curiosity.
            </p>
          </div>

          {/* Card 4 - Wide */}
          <div className="md:col-span-2 border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-16 h-16 bg-white border border-slate-100 text-emerald-base flex items-center justify-center rounded-lg shadow-sm flex-shrink-0">
              <HeartPulse size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal-dark mb-4">Telemedicine & Health Services</h3>
              <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
                <li>Tk 100/year student Health ID subscription.</li>
                <li>24/7 access to professional doctors and specialists.</li>
                <li>Strategic partnership with Medico Bio for clinical delivery.</li>
                <li>Complete healthcare ecosystem ensuring early diagnosis and wellness.</li>
              </ul>
            </div>
          </div>

          {/* Card 5 */}
          <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-white border border-slate-100 text-emerald-base flex items-center justify-center rounded-lg mb-6 shadow-sm">
              <Bus size={28} />
            </div>
            <h3 className="text-xl font-bold text-charcoal-dark mb-4">Transport</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Safe, reliable, and trackable student transportation ensuring peace of mind for parents and punctuality for learners.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
