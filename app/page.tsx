import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Why from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import Franchise from "@/components/Franchise";
import {
  ServicesTeaser,
  PricesTeaser,
  AppTeaser,
  FleetTeaser,
  BranchesTeaser,
  QuickContactStrip,
} from "@/components/HomeTeasers";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <ServicesTeaser />
      <PricesTeaser />
      <AppTeaser />
      <FleetTeaser />
      <BranchesTeaser />
      <Why />
      <Testimonials />
      <Franchise />
      <QuickContactStrip />
    </>
  );
}
