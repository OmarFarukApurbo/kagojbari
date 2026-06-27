import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { name: "The Vision", href: "#vision" },
    { name: "5 Pillars", href: "#pillars" },
    { name: "The Backbone School", href: "#projects" },
    { name: "News Portal", href: "#" },
    { name: "Advisory Panel", href: "#advisory" },
  ];

  return (
    <footer className="bg-charcoal-dark text-slate-400 py-16 px-6 md:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand & Contact */}
        <div className="flex flex-col space-y-6">
          <Link href="/" className="inline-block">
            <Image
              src="/KB_Logo_Text.png"
              alt="Kagojbari EdTech Ltd Logo"
              width={180}
              height={48}
              className="h-12 w-auto brightness-0 invert opacity-90"
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">
            One integrated platform connecting education, health, and transport services. Empowering every learner in Bangladesh.
          </p>
          <div className="flex flex-col space-y-3 mt-4">
            <a href="tel:+8801310101616" className="flex items-center text-sm hover:text-white transition-colors">
              <Phone size={16} className="mr-3 text-emerald-base" />
              +88-01310101616
            </a>
            <a href="mailto:kagojbari@gmail.com" className="flex items-center text-sm hover:text-white transition-colors">
              <Mail size={16} className="mr-3 text-emerald-base" />
              kagojbari@gmail.com
            </a>
            <div className="flex items-center text-sm">
              <MapPin size={16} className="mr-3 text-emerald-base" />
              Dhaka, Bangladesh
            </div>
          </div>
        </div>

        {/* Column 2: Platform Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-lg mb-2">Platform</h4>
          {footerLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm hover:text-emerald-base transition-colors w-fit"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Column 3: Regulatory & Corporate Compliance */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-lg mb-2">Corporate Integrity</h4>
          <p className="text-sm leading-relaxed">
            Kagojbari EdTech Ltd is a private limited company incorporated in Bangladesh.
          </p>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg mt-2">
            <p className="text-xs text-slate-300 font-medium">RJSC Certificate of Incorporation:</p>
            <p className="text-emerald-glow font-bold mt-1 tracking-wide">No. C-208016/2026</p>
          </div>
        </div>

      </div>

      {/* Bottom Section: Clinical Liability Disclaimer */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800">
        <p className="text-xs text-slate-500 leading-normal max-w-4xl">
          <strong className="text-slate-400">Clinical Liability Disclaimer:</strong> All medical and telemedicine services are legally delivered and owned by Medico Bio and other licensed third-party clinical partners. Kagojbari EdTech Ltd is contractually shielded from clinical liability, focusing solely on distribution logistics, school enrollment coordination, and digital identity management.
        </p>
        <p className="text-xs text-slate-600 mt-4">
          &copy; {new Date().getFullYear()} Kagojbari EdTech Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
