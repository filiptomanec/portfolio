"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

// Absolutní, ne fixní, a po doběhnutí zmizí – viz komentář ve StairTransition.
const Cover = () => {
  const [done, setDone] = useState(false);
  if (done) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      }}
      onAnimationComplete={() => setDone(true)}
      className="pointer-events-none absolute inset-x-0 top-0 h-[100lvh] bg-primary"
    />
  );
};

const PageTransition = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <Cover />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
