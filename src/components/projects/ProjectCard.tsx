"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/** Česká typografie: jednopísmenné předložky a spojky nenechá na konci řádku. */
const nbsp = (text: string) =>
  text.replace(/(?<=^|[\s(])([aikosuvzAIKOSUVZ])\s+/g, "$1\u00a0");

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-primary";

interface IProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: IProjectCardProps) => {
  const num = String(index + 1).padStart(2, "0");
  const host = new URL(project.links.live).host;
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
      className="group relative flex flex-col gap-10 xl:gap-12"
    >
      {/* horní řádek: náhled + úvod (u sudých projektů prohozené strany) */}
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-12 xl:gap-[60px]">
        {/* náhled */}
        <div className={cn("relative xl:col-span-7", reversed && "lg:order-2")}>
          {/* mátový glow při hoveru / fokusu */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 rounded-[28px] bg-accent/10 opacity-0 blur-3xl transition-opacity duration-700 group-focus-within:opacity-100 group-hover:opacity-100 motion-reduce:transition-none"
          />
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#232329] transition-colors duration-500 group-focus-within:border-accent/40 group-hover:border-accent/40">
            {/* lišta prohlížeče */}
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
                className="absolute bottom-4 right-4 hidden items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold leading-none text-primary opacity-0 transition-all duration-500 group-hover:opacity-100 motion-safe:translate-y-2 motion-safe:group-hover:translate-y-0 sm:flex"
              >
                Otevřít web <BsArrowUpRight />
              </span>
            </div>
          </div>
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
              Živá ukázka je „stretched link“: její ::after překrývá celou kartu,
              takže je klikatelná celá karta, ale v DOM nejsou vnořené odkazy.
            */}
            <a
              href={project.links.live}
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
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "relative z-[2] inline-flex h-[48px] items-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white transition-colors hover:border-accent hover:text-accent",
                  focusRing,
                )}
              >
                <BsGithub aria-hidden="true" className="text-lg" />
                GitHub
                <span className="sr-only">
                  {" "}
                  – zdrojový kód projektu {project.title} (otevře se v nové
                  záložce)
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* spodní řádek: technické body + stack */}
      <div className="grid grid-cols-1 gap-8 border-t border-white/20 pt-10 xl:grid-cols-12 xl:gap-[60px]">
        <div className="flex flex-col gap-4 xl:col-span-8">
          <h3 className="text-sm uppercase tracking-[2px] text-white/60">
            Co je na tom zajímavé
          </h3>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.highlights.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-2 rounded-xl bg-[#232329] p-6 md:[&:last-child:nth-child(odd)]:col-span-2 transition-colors duration-500 group-hover:bg-[#27272c]"
              >
                <h4 className="flex items-start gap-3 font-semibold leading-snug text-white">
                  {/* tečka zarovnaná na střed prvního řádku (leading-snug = 1.375em) */}
                  <span
                    aria-hidden="true"
                    className="mt-[calc(0.6875em-3px)] h-[6px] w-[6px] shrink-0 rounded-full bg-accent"
                  />
                  {nbsp(item.title)}
                </h4>
                <p className="text-[15px] leading-relaxed text-white/70">
                  {nbsp(item.text)}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 xl:col-span-4">
          <h3 className="text-sm uppercase tracking-[2px] text-white/60">
            Použité technologie
          </h3>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs leading-normal text-white/80"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
