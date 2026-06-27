import Image from "next/image";

export default function MediaPartners() {
  const partners = [
    { name: "NTV", src: "/partners/NTV_(Bangladesh)_logo.svg.png" },
    { name: "Jugantor", src: "/partners/যুগান্তরের_লোগো.svg.png" },
    { name: "The Business Standard", src: "/partners/1738567741_TBS.jpg" },
    { name: "Daily Sun", src: "/partners/daily-sun-logo-high-quality-free-vector.jpg" },
    { name: "ATN News", src: "/partners/ATN_News_Logo_without_slogan.svg.png" },
    { name: "Somoy", src: "/partners/default_img_1.webp" }
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h3 className="text-sm md:text-base font-bold text-center text-slate-400 uppercase tracking-widest">Our Media Partners</h3>
      </div>
      
      {/* Infinite Scrolling Ticker */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
          {[...partners, ...partners].map((partner, index) => (
            <li key={index} className="mx-8 md:mx-16 flex-shrink-0">
              <div className="relative w-32 h-16 md:w-40 md:h-20 hover:scale-105 transition-transform duration-300">
                <Image 
                  src={partner.src} 
                  alt={`${partner.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
