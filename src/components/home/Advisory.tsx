import Image from "next/image";

export default function Advisory() {
  const advisors = [
    {
      name: "Dr. Mohammad Kamrul Ahsan",
      title: "Vice Chancellor, Jahangirnagar University",
      image: "/advisor_1.png",
      quote: "Exceptional educational frameworks and establishing infrastructural networks develop a superior foundation for student institutions."
    },
    {
      name: "Dr. Md. Atiar Rahman",
      title: "VC, Rangamati Science & Tech",
      image: "/advisor_2.png",
      quote: "Kagojbari EdTech ensures access and professional resources network smoothly in their mission to elevate rural student capabilities."
    },
    {
      name: "Poet Abdul Hye Sikder",
      title: "Editor, The Daily Jugantor",
      image: "/advisor_3.png",
      quote: "A generational leap in bridging institutional resources, establishing standards, and enhancing national academic experiences."
    }
  ];

  return (
    <section id="advisory" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-4">Advisory Panel</h2>
          <p className="text-slate-500">Advisory panel headshots with advisory quotes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Top Card: Photo and Name */}
              <div className="bg-slate-50 border border-slate-200 rounded-t-2xl p-6 flex flex-col items-center text-center w-full shadow-sm">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden mb-4 border-4 border-white shadow-md">
                  <Image 
                    src={advisor.image} 
                    alt={advisor.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-charcoal-dark text-lg">{advisor.name}</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-[200px] leading-relaxed">
                  {advisor.title}
                </p>
              </div>

              {/* Bottom Card: Quote */}
              <div className="bg-white border-x border-b border-slate-200 rounded-b-2xl p-6 text-center w-full shadow-sm relative">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl text-emerald-base opacity-30 leading-none">
                  &#8220;
                </span>
                <p className="text-sm text-slate-600 leading-relaxed mt-2 italic">
                  {advisor.quote}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
