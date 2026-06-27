import { Users, Building, MapPin, Award } from "lucide-react";

export default function Traction() {
  const metrics = [
    {
      id: 1,
      value: "1,200+",
      label: "Schools Engaged",
      icon: <Building size={24} className="text-emerald-glow mb-4" />,
    },
    {
      id: 2,
      value: "12,000+",
      label: "Students Reached",
      icon: <Users size={24} className="text-emerald-glow mb-4" />,
    },
    {
      id: 3,
      value: "375+",
      label: "Upazilas Targeted",
      icon: <MapPin size={24} className="text-emerald-glow mb-4" />,
    },
    {
      id: 4,
      value: "Certified",
      label: "RJSC No. C-208016/2026",
      icon: <Award size={24} className="text-emerald-glow mb-4" />,
    },
  ];

  return (
    <section id="traction" className="bg-charcoal-dark py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-deep/40 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-emerald-base/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nationwide Impact & Trust</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From pilot runs to national partnerships, Kagojbari is scaling rapidly to build the backbone of Bangladesh's education system.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div 
              key={metric.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col items-center text-center hover:border-emerald-glow/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              {metric.icon}
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-glow group-hover:text-emerald-glow transition-colors">
                {metric.value}
              </h3>
              <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
