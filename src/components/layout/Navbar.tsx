"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Vision", href: "#vision" },
    { name: "Traction", href: "#traction" },
    { name: "5 Pillars", href: "#pillars" },
    { name: "Projects", href: "#projects" },
    { name: "Advisory", href: "#advisory" },
  ];

  return (
    <>
      {/* Desktop Floating Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'pt-2 md:pt-4 px-2 md:px-6' : 'pt-4 md:pt-8 px-4 md:px-8'} pointer-events-none`}>
        <div className={`max-w-6xl mx-auto bg-white/95 backdrop-blur-xl border border-slate-200/50 shadow-lg shadow-slate-200/20 rounded-2xl flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16 md:h-20 px-4 md:px-6' : 'h-20 md:h-24 px-6 md:px-8'} pointer-events-auto`}>
          
          {/* Left: Prominent Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <Image
              src="/KB_Logo_Text.png"
              alt="Kagojbari EdTech Ltd Logo"
              width={240}
              height={70}
              className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-emerald-deep transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#partner"
              className="bg-emerald-base hover:bg-emerald-deep text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-md shadow-emerald-base/20 hover:shadow-emerald-base/40 hover:-translate-y-0.5"
            >
              Partner Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-dark hover:text-emerald-base focus:outline-none transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl flex flex-col pt-32 px-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-2xl font-bold text-charcoal-dark hover:text-emerald-base transition-colors border-b border-slate-100 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#partner"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-emerald-base text-white px-5 py-4 rounded-xl text-lg font-bold shadow-lg mt-6"
            >
              Partner Portal
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
