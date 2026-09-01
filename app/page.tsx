import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
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
      <Banner />
      <Hero />
      <Trust />
      <ServicesTeaser />
      <PricesTeaser />
      <AppTeaser />
      <FleetTeaser />
      <BranchesTeaser />
      <Why />
      <Testimonials preview />
      <Franchise />
      <QuickContactStrip />
    </>
  );
}
