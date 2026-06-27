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
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-collapse mobile menu the instant the user scrolls or swipes
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    
    const handleScrollOrSwipe = () => {
      setIsMobileMenuOpen(false);
    };
    
    window.addEventListener("scroll", handleScrollOrSwipe, { passive: true });
    document.addEventListener("touchmove", handleScrollOrSwipe, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScrollOrSwipe);
      document.removeEventListener("touchmove", handleScrollOrSwipe);
    };
  }, [isMobileMenuOpen]);

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
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col w-full">
          
          {/* Top Row: Logo & Desktop Links & Hamburger */}
          <div className="flex justify-between items-center w-full">
            
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
          </div>
          
          {/* Minimalist Mobile Inline Menu (Expands downward seamlessly) */}
          <div 
            className={`lg:hidden w-full overflow-hidden transition-all duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0 pointer-events-none'}`}
          >
            <div className="flex flex-col space-y-1 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-2 py-3 text-[15px] font-bold text-slate-700 hover:text-emerald-deep hover:bg-slate-100/50 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="h-px bg-slate-200/50 my-3"></div>
              
              <Link
                href="#partner"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-1 w-full px-4 py-3 bg-emerald-base text-white text-center rounded-xl text-[15px] font-bold shadow-md shadow-emerald-base/20 hover:bg-emerald-deep transition-all active:scale-95"
              >
                Partner Portal
              </Link>
            </div>
          </div>
          
        </div>
      </nav>
    </>
  );
}
