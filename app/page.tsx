import { Contact } from "@/components/Contact";
import { WorkExperience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { RecentProject } from "@/components/RecentProject";
import { TechStack } from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <Hero />
      <TechStack />
      <WorkExperience />
      <RecentProject />
      <Contact />
    </main>
  );
}
