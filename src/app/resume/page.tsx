"use client";

import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJava,
  FaReact,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { getYearsOfExperience } from "@/lib/utils";

// about data
const about = {
  title: "O mně",
  description: "",
  info: [
    {
      fieldName: "Jméno",
      fieldValue: "Filip Tomanec",
    },
    {
      fieldName: "Titul",
      fieldValue: "Ing.",
    },
    {
      fieldName: "Zkušenosti",
      fieldValue: `${getYearsOfExperience("2020-03-01")}+ let`,
    },
    {
      fieldName: "Stát",
      fieldValue: "Česká republika",
    },
    {
      fieldName: "Email",
      fieldValue: "tomanec.f@gmail.com",
    },
    {
      fieldName: "Spolupráce na IČO",
      fieldValue: "Ano",
    },
    {
      fieldName: "Jazyky",
      fieldValue: "Čeština, Angličtina",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Moje zkušenosti",
  description:
    "Mám více než 5 let zkušeností s vývojem webových a mobilních aplikací. Pracuji s moderními technologiemi jako React, React Native a Spring Boot, a zaměřuji se na efektivní a škálovatelná řešení.",
  items: [
    {
      company: "React",
      position: "Medior Frontend Developer",
      duration: "2024 - současnost",
    },
    {
      company: "React, React Native, Spring Boot",
      position: "Medior Full Stack Developer",
      duration: "2022 - 2024",
    },
    {
      company: "React Native",
      position: "Junior Mobile Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Java - Spring Boot",
      position: "Junior Backend Developer",
      duration: "2020 - 2021",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Moje vzdělání",
  description:
    "Mám akademické vzdělání v oblasti řídicích a informačních systémů a odbornou přípravu v oblasti informačních technologií.",
  items: [
    {
      institution: "VŠB-TUO, Fakulta elektrotechniky a informatiky",
      degree: "Navazující magisterské studium",
      duration: "2021 – 2023",
    },
    {
      institution: "VŠB-TUO, Fakulta elektrotechniky a informatiky",
      degree: "Bakalářské studium",
      duration: "2018 – 2021",
    },
    {
      institution: "Střední průmyslová škola elektrotechniky a informatiky",
      degree: "Střední odborné vzdělání s maturitou",
      duration: "2014 – 2018",
    },
  ],
};

// skills data
const skills = {
  title: "Moje dovednosti",
  description:
    "Pracuji s moderními technologiemi a nástroji, které mi umožňují vytvářet interaktivní, responzivní a výkonné aplikace. Od HTML a CSS po pokročilé frameworky jako React a Next.js.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiJavascript />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <RiNextjsFill />,
      name: "Next.js",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <BiLogoSpringBoot />,
      name: "spring boot",
    },
    {
      icon: <SiMui />,
      name: "Material-UI",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Zkušenosti</TabsTrigger>
            <TabsTrigger value="education">Vzdělání</TabsTrigger>
            <TabsTrigger value="skills">Dovednosti</TabsTrigger>
            <TabsTrigger value="about">O mně</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[244px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
