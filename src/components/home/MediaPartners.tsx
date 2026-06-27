import Image from "next/image";

export default function MediaPartners() {
  const partners = [
    { name: "NTV", src: "/partners/NTV_(Bangladesh)_logo.svg.png" },
    { name: "Jugantor", src: "/partners/যুগান্তরের_লোগো.svg.png" },
    { name: "The Business Standard", src: "/partners/1738567741_TBS.jpg" },
    { name: "Daily Sun", src: "/partners/daily-sun-logo-high-quality-free-vector.jpg" },
    { name: "ATN News", src: "/partners/ATN_News_Logo_without_slogan.svg.png" },
    { name: "Other Partner", src: "/partners/default_img_1.webp" }
  ];

  return (
    <section className="py-16 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-bold text-charcoal-dark mb-2 text-center">Media Partners</h3>
        <p className="text-slate-500 mb-12 text-center">The logic in to see our media partners</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {partners.map((partner, index) => (
            <div key={index} className="relative w-32 h-16 md:w-40 md:h-20 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
              <Image 
                src={partner.src} 
                alt={`${partner.name} Logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
