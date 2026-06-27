"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Vision", href: "#vision" },
    { name: "Traction", href: "#traction" },
    { name: "5 Pillars", href: "#pillars" },
    { name: "Projects", href: "#projects" },
    { name: "Advisory", href: "#advisory" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center group">
          <Image
            src="/KB_Logo_Text.png"
            alt="Kagojbari EdTech Ltd Logo"
            width={180}
            height={48}
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-neutral hover:text-emerald-deep transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#partner"
            className="bg-[var(--color-emerald-base)] hover:bg-[var(--color-emerald-deep)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(4,120,87,0.3)] hover:scale-[1.02]"
          >
            Partner Portal
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-charcoal-dark hover:text-emerald-base focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 absolute top-20 left-0 w-full shadow-xl animate-in slide-in-from-top-2">
          <div className="px-6 py-8 flex flex-col space-y-6">
            <div className="flex justify-center mb-4">
              <Image
                src="/KB_Logo.png"
                alt="Kagojbari Icon"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center text-lg font-semibold text-charcoal-dark hover:text-emerald-base transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#partner"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-[var(--color-emerald-base)] text-white px-5 py-3 rounded-lg text-base font-bold shadow-sm mt-4"
            >
              Partner Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
