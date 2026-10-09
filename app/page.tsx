import SmoothScroll from "@/components/providers/SmoothScroll";
import Nebula from "@/components/ambient/Nebula";
import Grain from "@/components/ambient/Grain";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import ParallaxStatement from "@/components/ParallaxStatement";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen relative selection:bg-[var(--gold)] selection:text-black">
        {/* Ambient atmospheric layers */}
        <Nebula />
        <Grain />
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Content sections in reference order */}
        <Hero />
        <Marquee />
        <Services />
        <ParallaxStatement />
        <Process />
        <CTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
