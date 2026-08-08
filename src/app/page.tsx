import landing from "@/data/landing.json";
import aboutData from "@/data/about.json";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Community } from "@/components/sections/Community";
import { About } from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Testimonial from "@/components/sections/Testimonial";
import Blog from "@/components/sections/Blog";
import FooterCTA from "@/components/sections/FooterCTA";
import Footer from "@/components/layout/Footer";
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
      <Testimonial />
      <Blog />
      <FooterCTA />

      <Footer />
    </main>
  );
}