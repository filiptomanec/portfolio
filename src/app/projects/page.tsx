import type { Metadata } from "next";

import ProjectsShowcase from "@/components/projects/ProjectsShowcase";

export const metadata: Metadata = {
  title: "Projekty | Filip Tomanec",
  description:
    "Projekty Filipa Tomance: vlastní webové aplikace, interaktivní 3D modely a práce s daty. Prohlédněte si živé ukázky i zdrojový kód na GitHubu.",
};

export default function ProjectsPage() {
  return <ProjectsShowcase />;
}
