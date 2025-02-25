import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { KeyMetrix } from "@/components/KeyMetrix";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Portofolio } from "@/components/Portofolio";
import { Stack } from "@/components/Stack";
import { Service } from "@/components/Service";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stack />
      <LogoAnimation />
      <Portofolio />
      <KeyMetrix />
      <Service />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
