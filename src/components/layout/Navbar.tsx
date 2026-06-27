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
      </nav>

      {/* Bulletproof Mobile Menu CSS Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-[9990] bg-white flex flex-col pt-32 px-6 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 shadow-2xl' : '-translate-y-full'}`}
      >
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
    </>
  );
}
