"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Bulletproof scroll detection using IntersectionObserver
  useEffect(() => {
    let sentinel = document.getElementById("navbar-scroll-sentinel");
    
    // Create an invisible pixel at the very top of the page
    if (!sentinel) {
      sentinel = document.createElement("div");
      sentinel.id = "navbar-scroll-sentinel";
      sentinel.style.position = "absolute";
      sentinel.style.top = "0";
      sentinel.style.left = "0";
      sentinel.style.width = "100%";
      sentinel.style.height = "10px";
      sentinel.style.pointerEvents = "none";
      document.body.appendChild(sentinel);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the top 10px is not intersecting the viewport, we have scrolled down!
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
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
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 relative">
          
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

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#partner"
              className={`px-6 py-2.5 rounded-md text-sm font-bold transition-all duration-300 shadow-md ${navActive ? 'bg-emerald-base hover:bg-emerald-deep text-white shadow-emerald-base/20' : 'bg-white hover:bg-emerald-base hover:text-white text-emerald-deep shadow-black/20'}`}
            >
              Partner Portal
            </Link>
          </div>

          {/* Bulletproof Mobile Menu Button */}
          <div className="lg:hidden flex items-center relative z-[10000]">
            <div
              role="button"
              tabIndex={0}
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`cursor-pointer p-3 -mr-3 rounded-lg transition-colors ${navActive ? 'text-charcoal-dark' : 'text-white drop-shadow-md'}`}
            >
              <div className="pointer-events-none flex items-center justify-center">
                {isMobileMenuOpen ? (
                  <X size={32} strokeWidth={2.5} />
                ) : (
                  <Menu size={32} strokeWidth={2.5} />
                )}
              </div>
            </div>
          </div>
          
          {/* Minimalist Mobile Dropdown Menu */}
          <div 
            className={`lg:hidden absolute top-16 right-6 w-56 bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col p-2 transition-all duration-300 ease-out origin-top-right z-[9990] ${isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-[15px] font-bold text-charcoal-dark hover:text-emerald-base hover:bg-emerald-base/5 rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-px bg-slate-100 my-1 mx-2"></div>
            
            <Link
              href="#partner"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-1 mx-2 px-4 py-2.5 bg-emerald-base text-white text-center rounded-xl text-[15px] font-bold shadow-md hover:bg-emerald-deep transition-colors"
            >
              Partner Portal
            </Link>
          </div>
          
        </div>
      </nav>
    </>
  );
}
