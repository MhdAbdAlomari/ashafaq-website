import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import AppSection from "@/components/AppSection";
import Branches from "@/components/Branches";
import Why from "@/components/Why";
import Franchise from "@/components/Franchise";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-clip">
        <Hero />
        <Trust />
        <Services />
        <AppSection />
        <Branches />
        <Why />
        <Franchise />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
