import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kagojbari EdTech Ltd | Ecosystem Powering Bangladesh",
  description: "One Ecosystem Powering Every Learner in Bangladesh. Integrating physical supply infrastructure, digital identity, and essential health services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${hindSiliguri.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans text-charcoal-dark bg-slate-light">
        {children}
      </body>
    </html>
  );
}
