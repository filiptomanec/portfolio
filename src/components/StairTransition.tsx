"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation"; // components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          {/* Safari 26 na iPhonu ořízne úplně neprůhledné fixní vrstvy nad plovoucí lištou s adresou, proto krytí 99 % */}
          <div className="fixed inset-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div
            className="fixed inset-0 bg-primary/[0.99] pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
