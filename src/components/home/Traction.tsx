export default function Traction() {
  const metrics = [
    { value: "1,200+", label: "Schools Engaged", desc: "Initial integrations" },
    { value: "12,000+", label: "Students Reached", desc: "Active network footprint" },
    { value: "375+", label: "Upazilas Targeted", desc: "Nationwide expansion" },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal-dark">Metrics Section</h2>
          <p className="text-slate-500 mt-2">Encompassing our accelerated growth metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-emerald-50 rounded-xl p-10 text-center flex flex-col items-center justify-center border border-emerald-100/50 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-emerald-deep mb-2">
                {metric.value}
              </h3>
              <p className="text-lg font-bold text-charcoal-dark">{metric.label}</p>
              <p className="text-sm text-slate-500 mt-2">{metric.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
