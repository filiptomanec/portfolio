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
          {/* 120lvh: Safari na iPhonu kreslí stránku i pod plovoucí lištou s adresou, kam 100vh nesahá */}
          <div className="fixed inset-x-0 top-0 h-[120lvh] pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div
            className="fixed inset-x-0 top-0 h-[120lvh] bg-primary pointer-events-none"
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
