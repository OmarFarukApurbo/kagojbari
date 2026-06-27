export default function Advisory() {
  const advisors = [
    {
      name: "Dr. Mohammad Kamrul Ahsan",
      title: "Vice Chancellor, Jahangirnagar University",
    },
    {
      name: "Dr. Muhammad Yeahia Akhter",
      title: "Vice Chancellor, University of Chittagong",
    },
    {
      name: "Dr. Md. Atiar Rahman",
      title: "Vice Chancellor, Rangamati Science & Tech University",
    },
    {
      name: "Prof. Dr. Abul Hasan M Sadeq",
      title: "Founder & Founder VC, Asian University of Bangladesh",
    },
    {
      name: "Poet Abdul Hye Sikder",
      title: "Editor, The Daily Jugantor",
    },
    {
      name: "Syed Shahnewaz Karim",
      title: "Editor, The Daily Somoyer Alo",
    }
  ];

  return (
    <section id="advisory" className="py-24 px-6 md:px-12 bg-white max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-4">Academic & Governance Advisory</h2>
        <p className="text-slate-neutral max-w-2xl mx-auto">
          Guided by the nation’s top academic minds and media pioneers to ensure our ecosystem maintains the highest standards of integrity and educational excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisors.map((advisor, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-emerald-base/30 transition-all duration-300 flex items-start space-x-4 group"
          >
            <div className="w-14 h-14 rounded-full bg-slate-100 border-2 border-white shadow-sm flex-shrink-0 group-hover:border-emerald-100 transition-colors overflow-hidden">
              {/* Placeholder for portraits */}
              <div className="w-full h-full bg-slate-200"></div>
            </div>
            <div>
              <h4 className="font-bold text-charcoal-dark text-lg leading-tight group-hover:text-emerald-deep transition-colors">
                {advisor.name}
              </h4>
              <p className="text-sm text-slate-500 mt-1 leading-snug">
                {advisor.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
