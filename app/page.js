"use client";
import Hero from "@/Components/Hero.jsx";
import SkillsPage from "./skills/page";
import ProjectsPage from "./projects/page";
import AboutPage from './about/page';
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <>
        <Hero />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
    </>
  );
}
