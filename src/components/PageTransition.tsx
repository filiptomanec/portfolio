"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

// Po doběhnutí zmizí ze stránky, jinak by podle ní Safari 26 barvil své lišty.
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
      className="fixed inset-0 bg-primary/[0.99] pointer-events-none"
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
