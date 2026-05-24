import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Arsenal from "@/components/Arsenal";
import ProjectModalProvider from "@/components/ProjectModalProvider";
import ProjectMap from "@/components/ProjectMap";
import FeaturedProjects from "@/components/FeaturedProjects";
import AISystems from "@/components/AISystems";
import Philosophy from "@/components/Philosophy";
import QuestLog from "@/components/QuestLog";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Arsenal />
        <ProjectModalProvider>
          <ProjectMap />
          <FeaturedProjects />
        </ProjectModalProvider>
        <AISystems />
        <Philosophy />
        <QuestLog />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
