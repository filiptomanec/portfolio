"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation"; // components
import Stairs from "./Stairs";

/*
  Safari 26 na iPhonu ořízne úplně neprůhledné fixní vrstvy nad plovoucí lištou
  s adresou, proto krytí 99 %. Zároveň si z fixních vrstev u okrajů bere barvu
  svých lišt, takže po doběhnutí animace vrstvy ze stránky úplně mizí.

  Aby lišty během animace nezbělaly od schodů, leží nad nimi u horního a spodního
  okraje úzké pruhy v barvě stránky (Safari čte fixní prvky do ~4 px od okraje,
  široké aspoň 80 %). Do obrazovky zasahují jen 4 px pod stavovým řádkem a lištou.
*/
const toolbarTint =
  "fixed inset-x-0 z-[41] h-3 bg-primary/[0.99] pointer-events-none";

const Transition = () => {
  const [done, setDone] = useState(false);
  if (done) return null;

  return (
    <div>
      <div className="fixed inset-0 pointer-events-none z-40 flex">
        <Stairs />
      </div>
      <div aria-hidden="true" className={`${toolbarTint} -top-2`} />
      <div aria-hidden="true" className={`${toolbarTint} -bottom-2`} />

      <motion.div
        className="fixed inset-0 bg-primary/[0.99] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        onAnimationComplete={() => setDone(true)}
      />
    </div>
  );
};

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <Transition key={pathname} />
    </AnimatePresence>
  );
};

export default StairTransition;
