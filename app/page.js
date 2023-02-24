// import HeroSection from "@/components/HeroSection";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import Timeline from "components/Timeline";

export default function Home() {
  return (
    <main className="max-w-3xl px-4 mx-auto sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <Timeline />
      <ProjectsSection />
    </main>
  );
}
