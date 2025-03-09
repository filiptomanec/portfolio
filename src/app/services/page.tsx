"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Webové aplikace",
    description:
      "Vytvářím moderní, rychlé a škálovatelné webové aplikace na míru. Používám nejnovější technologie jako React, Next.js a Tailwind CSS pro dosažení maximálního výkonu a uživatelského zážitku.",
    href: "",
  },
  {
    num: "02",
    title: "Mobilní aplikace",
    description:
      "Navrhuji a vyvíjím mobilní aplikace pro iOS i Android s důrazem na intuitivní ovládání a vysokou výkonnost. Využívám frameworky jako React Native, abych zajistil plynulý chod na všech zařízeních.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Stylování",
    description:
      "Design není jen o vzhledu, ale i o funkčnosti. Optimalizuji uživatelské rozhraní a zkušenost (UI/UX) tak, aby byla aplikace responzivní, přehledná, přívětivá a snadno použitelná.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Pomáhám webům získat lepší pozice ve vyhledávačích díky optimalizaci obsahu, rychlosti načítání a technickému SEO. Zajišťuji, aby váš web byl viditelný pro správné publikum.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          <>
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            ))}
          </>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
