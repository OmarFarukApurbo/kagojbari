"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(scrollPos > 20);
    };
    
    // Attach to both window and document to guarantee mobile browser compatibility
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navActive = scrolled || isMobileMenuOpen;

  const navLinks = [
    { name: "Vision", href: "#vision" },
    { name: "Traction", href: "#traction" },
    { name: "5 Pillars", href: "#pillars" },
    { name: "Projects", href: "#projects" },
    { name: "Advisory", href: "#advisory" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${navActive ? 'bg-white/95 backdrop-blur-xl shadow-md py-3 md:py-4' : 'bg-transparent py-5 md:py-6'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group relative z-[10000]">
            <Image
              src="/KB_Logo_Text.png"
              alt="Kagojbari EdTech Ltd Logo"
              width={240}
              height={70}
              className={`w-auto object-contain transition-all duration-300 ${navActive ? 'h-10 md:h-12' : 'h-10 md:h-16 brightness-0 invert drop-shadow-md'} group-hover:scale-105`}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-colors duration-200 ${navActive ? 'text-slate-600 hover:text-emerald-deep' : 'text-slate-200 hover:text-white drop-shadow-md'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#partner"
              className={`px-6 py-2.5 rounded-md text-sm font-bold transition-all duration-300 shadow-md ${navActive ? 'bg-emerald-base hover:bg-emerald-deep text-white shadow-emerald-base/20' : 'bg-white hover:bg-emerald-base hover:text-white text-emerald-deep shadow-black/20'}`}
            >
              Partner Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center relative z-[10000]">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ touchAction: 'manipulation' }}
              className={`focus:outline-none p-4 -mr-4 rounded-lg transition-colors ${navActive ? 'text-charcoal-dark active:bg-slate-100' : 'text-white active:bg-white/10 drop-shadow-md'}`}
            >
              <div className="pointer-events-none flex items-center justify-center">
                {isMobileMenuOpen ? (
                  <X size={32} strokeWidth={2.5} />
                ) : (
                  <Menu size={32} strokeWidth={2.5} />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[9990] bg-white flex flex-col pt-32 px-6 animate-in fade-in duration-200 overflow-y-auto">
          <div className="flex flex-col space-y-4 pb-12">
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
