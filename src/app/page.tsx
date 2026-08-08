import landing from "@/data/landing.json";
import aboutData from "@/data/about.json";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Community } from "@/components/sections/Community";
import { About } from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
export default function HomePage() {
  return (
    <main>
      <Navbar data={landing.navbar} />

      <Hero data={landing.hero} />

      <Clients />

      <Community />

      <About data={aboutData.aboutData} />


      <Stats />

      <About data={aboutData.footerCta} />
    
    </main>
  );
}