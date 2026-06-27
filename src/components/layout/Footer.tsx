import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-slate-300 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-700 pb-12 mb-8">
        
        {/* Column 1: Brand Logo & Description */}
        <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-6">
          <Image
            src="/KB_Logo_Text.png"
            alt="Kagojbari Logo"
            width={200}
            height={56}
            className="w-36 md:w-48 h-auto brightness-0 invert opacity-90 flex-shrink-0"
          />
          <div className="md:border-l md:border-slate-600 md:pl-6 flex items-center h-auto py-2">
            <p className="text-sm text-slate-400 max-w-sm mt-4 leading-relaxed">
              Kagojbari is building the ultimate digital and physical backbone for education across Bangladesh. We integrate supply infrastructure, health, and student identity into one powerful platform.
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col space-y-3 md:mt-2">
          <h4 className="text-white font-bold text-base mb-2">Company</h4>
          <Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link>
          <Link href="/campaigns" className="text-sm text-slate-400 hover:text-white transition-colors">Campaigns & Projects</Link>
          <Link href="/press" className="text-sm text-slate-400 hover:text-white transition-colors">Press Coverage</Link>
          <Link href="/donate" className="text-sm text-slate-400 hover:text-white transition-colors">Sponsor & Donate</Link>
          <Link href="/#partner" className="text-sm text-slate-400 hover:text-white transition-colors">Partner Portal</Link>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col space-y-4 md:mt-2">
          <h4 className="text-white font-bold text-lg mb-2">Connect</h4>
          <div className="flex items-center text-sm text-slate-400">
            <Phone size={16} className="mr-3 text-emerald-base" />
            +88-01310101616
          </div>
          <a href="mailto:kagojbari@gmail.com" className="flex items-center text-sm text-slate-400 hover:text-white transition-colors">
            <Mail size={16} className="mr-3 text-emerald-base" />
            kagojbari@gmail.com
          </a>
          <a href="https://kagojbari.org" className="flex items-center text-sm text-slate-400 hover:text-white transition-colors">
            <Globe size={16} className="mr-3 text-emerald-base" />
            www.kagojbari.org
          </a>
        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Kagojbari Ltd MVP.</p>
        <p className="mt-4 md:mt-0 font-medium">RJSC Certificate: No. C-208016/2026</p>
      </div>
    </footer>
  );
}
