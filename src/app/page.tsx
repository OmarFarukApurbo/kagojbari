import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BackboneFeature from "@/components/home/BackboneFeature";
import MediaPartners from "@/components/home/MediaPartners";
import Ecosystem from "@/components/home/Ecosystem";
import CampaignFeature from "@/components/home/CampaignFeature";
import Traction from "@/components/home/Traction";
import Advisory from "@/components/home/Advisory";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-slate-50">
        <Hero />
        <BackboneFeature />
        <MediaPartners />
        <Ecosystem />
        <CampaignFeature />
        <Traction />
        <Advisory />
      </main>
      <Footer />
    </>
  );
}
