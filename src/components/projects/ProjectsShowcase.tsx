"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsShowcase = () => {
  return (
    // reducedMotion="user": při prefers-reduced-motion vypne framer-motion posuny, zůstane jen fade.
    <MotionConfig reducedMotion="user">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-12 xl:pb-24 xl:pt-8"
      >
        <div className="container mx-auto">
          {/* úvod */}
          <header className="mb-16 flex max-w-[640px] flex-col gap-6 xl:mb-24">
            <p className="text-sm uppercase tracking-[2px] text-accent">
              {"// vybrané projekty"}
            </p>
            <h1 className="text-[40px] font-bold leading-[1.1] xl:text-[56px]">
              Projekty<span className="text-accent">.</span>
            </h1>
            <p className="text-white/60">
              Ukázky projektů, které jsem navrhl a&nbsp;postavil od prvního
              řádku kódu až po hotový web. Každý si můžete sami vyzkoušet
              a&nbsp;prohlédnout si jeho zdrojový kód na GitHubu.
            </p>
          </header>

          {/* seznam */}
          <div className="flex flex-col gap-24 xl:gap-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          {/* závěrečná výzva */}
          <div className="mt-24 flex flex-col gap-6 rounded-xl bg-[#27272c] p-6 sm:flex-row sm:p-8 sm:items-center sm:justify-between xl:mt-32 xl:p-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold leading-tight xl:text-3xl">
                Máte podobný nápad<span className="text-accent">?</span>
              </h2>
              <p className="max-w-[520px] text-white/60">
                Rád s&nbsp;vámi proberu, jak ho převést do funkčního webu nebo
                aplikace.
              </p>
            </div>
            <Link
              href="/contact"
              className="group/cta inline-flex h-[48px] shrink-0 items-center justify-center gap-2 self-start rounded-full border border-accent px-6 font-semibold text-accent transition-colors hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-[#27272c] sm:self-auto"
            >
              Napište mi
              <BsArrowRight
                aria-hidden="true"
                className="transition-transform duration-300 motion-safe:group-hover/cta:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </motion.section>
    </MotionConfig>
  );
};

export default ProjectsShowcase;
