import landing from "@/data/landing.json";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Community } from "@/components/sections/Community";
import { About } from "@/components/sections/About";
export default function HomePage() {
  return (
    <main>
      <Navbar data={landing.navbar} />

      <Hero data={landing.hero} />

      <Clients />

      <Community />

      <About />
    </main>
  );
}