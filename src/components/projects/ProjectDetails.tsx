"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  AnimatePresence,
  motion,
  useDragControls,
  type PanInfo,
} from "framer-motion";
import { BsArrowUpRight, BsGithub, BsPlusLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import type { Project } from "@/data/projects";
import { focusRing, nbsp } from "@/components/projects/shared";
import { cn } from "@/lib/utils";

/** Od `md` (768 px) je detail dialog uprostřed, pod tím panel vysouvaný zespodu. */
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return isDesktop;
};

interface IProjectDetailsProps {
  project: Project;
  num: string;
}

const ProjectDetails = ({ project, num }: IProjectDetailsProps) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useIsDesktop();
  const dragControls = useDragControls();
  const { live, github } = project.links;

  // Panel na telefonu jde zavřít stažením dolů za úchyt.
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y > 120 || info.velocity.y > 600) setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className={cn(
          "group/details relative z-[2] inline-flex h-[48px] items-center gap-2 rounded-full border border-accent/60 px-6 font-semibold text-accent transition-colors hover:border-accent hover:bg-accent hover:text-primary",
          focusRing,
        )}
      >
        Podrobnosti
        <BsPlusLg
          aria-hidden="true"
          className="transition-transform duration-300 motion-safe:group-hover/details:rotate-90"
        />
        <span className="sr-only"> projektu {project.title}</span>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </Dialog.Overlay>

            {/* rozložení: zespodu na telefonu, uprostřed od md */}
            <div className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center md:items-center md:p-6">
              <Dialog.Content asChild forceMount>
                <motion.div
                  className="pointer-events-auto relative flex max-h-[88dvh] w-full flex-col overflow-hidden rounded-t-2xl border border-b-0 border-white/10 bg-primary shadow-2xl focus:outline-none md:max-h-[85vh] md:max-w-[880px] md:rounded-2xl md:border-b"
                  initial={
                    isDesktop ? { opacity: 0, scale: 0.96, y: 16 } : { y: "100%" }
                  }
                  animate={isDesktop ? { opacity: 1, scale: 1, y: 0 } : { y: 0 }}
                  exit={
                    isDesktop ? { opacity: 0, scale: 0.96, y: 16 } : { y: "100%" }
                  }
                  transition={{ type: "spring", damping: 32, stiffness: 320 }}
                  drag={isDesktop ? false : "y"}
                  dragControls={dragControls}
                  dragListener={false}
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={{ top: 0, bottom: 0.6 }}
                  onDragEnd={handleDragEnd}
                >
                  {/* úchyt pro stažení panelu (jen telefon) */}
                  <div
                    aria-hidden="true"
                    onPointerDown={(event) => dragControls.start(event)}
                    className="flex shrink-0 cursor-grab touch-none justify-center pb-1 pt-3 md:hidden"
                  >
                    <span className="h-1.5 w-12 rounded-full bg-white/20" />
                  </div>

                  {/* hlavička */}
                  <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-6 pb-5 pt-3 md:px-10 md:pb-6 md:pt-8">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm uppercase tracking-[2px] text-accent">
                        <span className="text-white/40">{num} · </span>
                        {project.category}
                      </p>
                      <Dialog.Title className="text-[28px] font-bold leading-tight text-white md:text-[36px]">
                        {project.title}
                      </Dialog.Title>
                      <Dialog.Description className="sr-only">
                        Zajímavosti a použité technologie projektu {project.title}
                      </Dialog.Description>
                    </div>
                    <Dialog.Close
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-2xl text-white/80 transition-colors hover:border-accent hover:text-accent",
                        focusRing,
                      )}
                    >
                      <IoMdClose aria-hidden="true" />
                      <span className="sr-only">Zavřít</span>
                    </Dialog.Close>
                  </div>

                  {/* obsah */}
                  <div className="flex min-h-0 flex-1 flex-col gap-10 overflow-y-auto overscroll-contain px-6 py-8 md:px-10">
                    <section className="flex flex-col gap-4">
                      <h3 className="text-sm uppercase tracking-[2px] text-white/60">
                        Co je na tom zajímavé
                      </h3>
                      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {project.highlights.map((item) => (
                          <li
                            key={item.title}
                            className="flex flex-col gap-2 rounded-xl bg-[#232329] p-6 md:[&:last-child:nth-child(odd)]:col-span-2"
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
                    </section>

                    <section className="flex flex-col gap-4">
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
                    </section>

                  </div>
                {/* patička s odkazy, mimo posuvnou část, ať je vždy vidět */}
                <div className="flex shrink-0 flex-wrap gap-3 border-t border-white/10 px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:px-10 md:py-5">
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex h-[48px] items-center gap-2 rounded-full bg-accent px-6 font-semibold text-primary transition-colors hover:bg-accent-hover",
                        focusRing,
                      )}
                    >
                      Živá ukázka
                      <BsArrowUpRight aria-hidden="true" />
                      <span className="sr-only"> (otevře se v nové záložce)</span>
                    </a>
                  )}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        live
                          ? "inline-flex h-[48px] items-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                          : "inline-flex h-[48px] items-center gap-2 rounded-full bg-accent px-6 font-semibold text-primary transition-colors hover:bg-accent-hover",
                        focusRing,
                      )}
                    >
                      <BsGithub aria-hidden="true" className="text-lg" />
                      {live ? "GitHub" : "Zdrojový kód"}
                      <span className="sr-only"> (otevře se v nové záložce)</span>
                    </a>
                  )}
                </div>
                </motion.div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default ProjectDetails;
