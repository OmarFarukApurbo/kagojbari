import Image from "next/image";
import Link from "next/link";

export default function CampaignFeature() {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal-dark mb-6 leading-tight">
            Guinness World <br/>Record Campaign
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mt-4">
            Kagojbari is orchestrating a historic campaign to distribute essential educational materials nationwide. This initiative aims to bridge educational disparities, support marginal areas, and establish Bangladesh as a globally recognized, education-friendly nation by breaking a Guinness World Record in 2026.
          </p>
          <Link 
            href="#campaign"
            className="bg-emerald-deep hover:bg-emerald-base text-white px-8 py-3 rounded-md text-sm font-bold transition-all duration-300 w-fit"
          >
            Learn More
          </Link>
        </div>

        {/* Right: Certificate Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[400px] aspect-[3/4] shadow-2xl rounded-sm overflow-hidden bg-white border-[8px] border-slate-100">
            <Image 
              src="/certificate.png" 
              alt="Guinness World Record Certificate" 
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
