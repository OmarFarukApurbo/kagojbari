import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Traction from "@/components/home/Traction";
import Ecosystem from "@/components/home/Ecosystem";
import Projects from "@/components/home/Projects";
import Advisory from "@/components/home/Advisory";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Traction />
        <Ecosystem />
        <Projects />
        <Advisory />
      </main>
      <Footer />
    </>
  );
}
