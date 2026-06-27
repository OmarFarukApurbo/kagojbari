"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
  
  // Is the current page one with a dark hero banner at the very top?
  const isDarkBgPage = pathname === "/" || pathname === "/home";
  
  // Use dark text when navbar has a white background (navActive) OR when the page itself has a light background at the top
  const useDarkText = navActive || !isDarkBgPage;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Ecosystem", href: "/#pillars" },
    { name: "Impact", href: "/#impact" },
    { name: "Campaigns", href: "/campaigns" },
    { name: "Press", href: "/press" },
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
                alt="Kagojbari Logo"
                width={240}
                height={70}
                className={`w-auto object-contain transition-all duration-300 ${navActive ? 'h-10 md:h-12' : 'h-10 md:h-16'} ${useDarkText ? '' : 'brightness-0 invert drop-shadow-md'} group-hover:scale-105`}
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-colors duration-200 ${useDarkText ? 'text-slate-600 hover:text-emerald-deep' : 'text-slate-200 hover:text-white drop-shadow-md'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/donate"
                className={`px-5 py-2.5 rounded-md text-sm font-bold transition-all duration-300 shadow-md bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20`}
              >
                Sponsor Us
              </Link>
            </div>

            {/* Bulletproof Mobile Menu Button */}
            <div className="lg:hidden flex items-center relative z-[10000]">
              <div
                role="button"
                tabIndex={0}
                aria-label="Toggle menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`cursor-pointer p-3 -mr-3 rounded-lg transition-colors ${useDarkText ? 'text-charcoal-dark' : 'text-white drop-shadow-md'}`}
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
            className={`lg:hidden w-full overflow-hidden transition-all duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0 pointer-events-none'}`}
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
                href="/donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-1 w-full px-4 py-3 bg-amber-500 text-white text-center rounded-xl text-[15px] font-bold shadow-md shadow-amber-500/20 hover:bg-amber-600 transition-all active:scale-95 mb-2"
              >
                Sponsor Us
              </Link>
            </div>
          </div>
          
        </div>
      </nav>
    </>
  );
}
