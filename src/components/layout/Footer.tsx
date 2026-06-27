import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-slate-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-700 pb-12 mb-8">
        
        {/* Column 1: Brand Logo */}
        <div className="md:col-span-2 flex items-center">
          <Image
            src="/KB_Logo_Text.png"
            alt="Kagojbari Logo"
            width={240}
            height={64}
            className="brightness-0 invert opacity-90"
          />
        </div>

        {/* Column 2: Contact/Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-lg mb-2">Contact</h4>
          <Link href="#" className="text-sm hover:text-white transition-colors">About Us</Link>
          <Link href="#" className="text-sm hover:text-white transition-colors">Contact Us</Link>
          <Link href="#" className="text-sm hover:text-white transition-colors">Terms of Contracts</Link>
          <Link href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-lg mb-2">Footer</h4>
          <div className="flex items-center text-sm">
            <Phone size={14} className="mr-3" />
            +88-01310101616
          </div>
          <div className="flex items-center text-sm">
            <Phone size={14} className="mr-3" />
            +88-017XXXXXXXX
          </div>
          <a href="mailto:kagojbari@gmail.com" className="flex items-center text-sm hover:text-white transition-colors">
            <Mail size={14} className="mr-3" />
            kagojbari@gmail.com
          </a>
          <a href="https://kagojbari.org" className="flex items-center text-sm hover:text-white transition-colors">
            <Globe size={14} className="mr-3" />
            www.kagojbari.org
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Kagojbari EdTech Ltd MVP.</p>
        <p className="mt-4 md:mt-0">RJSC Certificate: No. C-208016/2026</p>
      </div>
    </footer>
  );
}
