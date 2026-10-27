"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import type { Project } from "@/data/projects";
import AppStoreButton from "@/components/projects/AppStoreButton";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { focusRing, nbsp } from "@/components/projects/shared";
import { cn } from "@/lib/utils";

interface IProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: IProjectCardProps) => {
  const num = String(index + 1).padStart(2, "0");
  const { live, github } = project.links;
  const { mobile } = project;
  const host = live && new URL(live).host;
  // Bez živé ukázky (např. hardware) přebírá roli hlavního odkazu GitHub.
  const githubIsPrimary = !live;
  const reversed = index % 2 === 1;
  const titleId = `project-${project.slug}`;

  return (
    <motion.article
      id={project.slug}
      aria-labelledby={titleId}
      // První projekt se objeví s fade-inem celé stránky, další při doscrollování.
      initial={index === 0 ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative"
    >
      {/* horní řádek: náhled + úvod (u sudých projektů prohozené strany) */}
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-12 xl:gap-[60px]">
        {/* náhled */}
        <div
          className={cn(
            "relative xl:col-span-7",
            reversed && "lg:order-2",
            // místo pro telefon přesahující přes pravý dolní roh prohlížeče
            mobile && "pb-9 pr-9 sm:pb-12 sm:pr-16",
          )}
        >
          {/* mátový glow při hoveru / fokusu */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 rounded-[28px] bg-accent/10 opacity-0 blur-3xl transition-opacity duration-700 group-focus-within:opacity-100 group-hover:opacity-100 motion-reduce:transition-none"
          />
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#232329] transition-colors duration-500 group-focus-within:border-accent/40 group-hover:border-accent/40">
            {/* lišta prohlížeče – jen u projektů s živým webem */}
            {host && (
              <div
                aria-hidden="true"
                className="flex h-9 items-center gap-2 border-b border-white/10 px-4"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent/70" />
                <span className="ml-3 truncate text-xs leading-none text-white/60">
                  {host}
                </span>
              </div>
            )}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1200px) 680px, (min-width: 960px) 465px, 100vw"
                className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span
                aria-hidden="true"
                className={cn(
                  "absolute bottom-4 hidden items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold leading-none text-primary opacity-0 transition-all duration-500 group-hover:opacity-100 motion-safe:translate-y-2 motion-safe:group-hover:translate-y-0 sm:flex",
                  // vpravo by ho zakryl telefon
                  mobile ? "left-4" : "right-4",
                )}
              >
                {githubIsPrimary ? "Zobrazit kód" : "Otevřít web"}{" "}
                <BsArrowUpRight />
              </span>
            </div>
          </div>

          {/* mobilní verze: iPhone přes pravý dolní roh, tenký rámeček */}
          {mobile && (
            <div className="absolute bottom-0 right-0 w-[100px] rounded-[19px] border border-white/20 bg-[#0b0b0e] p-[2px] shadow-[0_28px_60px_rgba(0,0,0,0.6)] ring-2 ring-primary transition-transform duration-700 ease-out motion-safe:group-hover:-translate-y-1.5 sm:w-[140px] sm:rounded-[26px] sm:p-[2.5px] sm:ring-[3px] lg:w-[120px] xl:w-[164px] xl:rounded-[30px]">
              <div className="relative aspect-[1320/2868] overflow-hidden rounded-[17px] sm:rounded-[23px] xl:rounded-[27px]">
                <Image
                  src={mobile.image.src}
                  alt={mobile.image.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1200px) 160px, (min-width: 960px) 116px, (min-width: 640px) 135px, 96px"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* úvod */}
        <div className="flex flex-col gap-6 xl:col-span-5">
          <div className="flex items-end justify-between gap-4">
            <span
              aria-hidden="true"
              className="text-6xl font-extrabold leading-none text-transparent text-outline transition-all duration-500 group-hover:text-outline-hover xl:text-8xl"
            >
              {num}
            </span>
            {project.year && (
              <span className="text-sm text-white/60">{project.year}</span>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[2px] text-accent">
              {project.category}
            </p>
            <h2
              id={titleId}
              className="text-[32px] font-bold leading-none text-white transition-colors duration-500 group-hover:text-accent sm:text-[42px]"
            >
              {project.title}
            </h2>
          </div>

          <p className="leading-relaxed text-white/60">
            {nbsp(project.description)}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {/*
              Hlavní odkaz (živá ukázka, jinak GitHub) je „stretched link“: jeho ::after
              překrývá celou kartu, takže je klikatelná celá karta, ale v DOM nejsou
              vnořené odkazy.
            */}
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex h-[48px] items-center gap-2 rounded-full bg-accent px-6 font-semibold text-primary transition-colors hover:bg-accent-hover",
                  "after:absolute after:inset-0 after:z-[1] after:content-['']",
                  focusRing,
                )}
              >
                Živá ukázka
                <BsArrowUpRight
                  aria-hidden="true"
                  className="transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                />
                <span className="sr-only">
                  {" "}
                  projektu {project.title} (otevře se v nové záložce)
                </span>
              </a>
            ) : (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex h-[48px] items-center gap-2 rounded-full bg-accent px-6 font-semibold text-primary transition-colors hover:bg-accent-hover",
                  "after:absolute after:inset-0 after:z-[1] after:content-['']",
                  focusRing,
                )}
              >
                <BsGithub aria-hidden="true" className="text-lg" />
                Zdrojový kód
                <span className="sr-only">
                  {" "}
                  projektu {project.title} na GitHubu (otevře se v nové záložce)
                </span>
              </a>
            )}
            <ProjectDetails project={project} num={num} />
            {mobile && (
              <AppStoreButton title={project.title} href={mobile.appStore} />
            )}
            {/* vedle dvou tlačítek s textem se GitHub vejde jen jako ikona */}
            {live && github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                title="Zdrojový kód na GitHubu"
                className={cn(
                  "relative z-[2] inline-flex h-[48px] w-[48px] items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent",
                  focusRing,
                )}
              >
                <BsGithub aria-hidden="true" className="text-xl" />
                <span className="sr-only">
                  Zdrojový kód projektu {project.title} na GitHubu (otevře se
                  v nové záložce)
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
