import Image from "next/image";

export default function Advisory() {
  const advisors = [
    {
      name: "Dr. Mohammad Kamrul Ahsan",
      title: "Vice Chancellor, Jahangirnagar University",
      image: "/Dr. Mohammad Kamrul Ahsan.jpg",
      quote: "Exceptional educational frameworks and establishing infrastructural networks develop a superior foundation for student institutions.",
      imageClass: "object-cover"
    },
    {
      name: "Dr. Md. Atiar Rahman",
      title: "VC, Rangamati Science & Technology University",
      image: "/Dr. Md. Atiar Rahman.jpg",
      quote: "Kagojbari ensures access and professional resources network smoothly in their mission to elevate rural student capabilities.",
      imageClass: "object-cover"
    },
    {
      name: "Abdul Hye Sikder",
      title: "Editor, The Daily Jugantor",
      image: "/Poet Abdul Hye Sikder.jpg",
      quote: "A generational leap in bridging institutional resources, establishing standards, and enhancing national academic experiences.",
      imageClass: "object-cover object-top"
    }
  ];

  return (
    <section id="advisory" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-4">Advisory Panel</h2>
          <p className="text-slate-500">Guided by visionary leaders shaping the future of education in Bangladesh.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <div key={index} className="flex flex-col items-center">

              {/* Top Card: Photo and Name */}
              <div className="bg-slate-50 border border-slate-200 rounded-t-2xl p-6 flex flex-col items-center text-center w-full shadow-sm">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden mb-4 border-4 border-white shadow-md bg-white">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    className={advisor.imageClass}
                  />
                </div>
                <h4 className="font-bold text-charcoal-dark text-lg">{advisor.name}</h4>
                <div className="text-xs text-slate-500 mt-1 max-w-[200px] leading-relaxed min-h-[2.5rem] flex items-center justify-center">
                  <span>{advisor.title}</span>
                </div>
              </div>

              {/* Bottom Card: Quote */}
              <div className="bg-white border-x border-b border-slate-200 rounded-b-2xl p-6 text-center w-full shadow-sm relative flex-1 flex flex-col justify-between">
                <div className="relative">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl text-emerald-base opacity-30 leading-none">
                    &#8220;
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2 italic">
                    {advisor.quote}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
