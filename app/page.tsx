import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-400 relative">
      <Particles />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <WhyUs />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
