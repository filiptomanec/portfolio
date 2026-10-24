"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation"; // components
import Stairs from "./Stairs";

/*
  Vrstvy přechodu jsou záměrně `absolute`, ne `fixed`. Safari 26 na iPhonu
  barví stavový řádek a lištu s adresou podle fixních vrstev u okrajů obrazovky,
  takže bílé schody a mizející závoj by lišty přebarvovaly podle toho, v jaké
  fázi animace je zrovna zachytí. Neprůhledné fixní vrstvy navíc ořízne nad
  lištou s adresou. Absolutní vrstva nahoře dokumentu (po načtení i navigaci
  je stránka nahoře) pokryje celou obrazovku včetně místa pod lištou (100lvh)
  a lišty zůstanou v barvě pozadí stránky. Po doběhnutí animace vrstvy mizí.
*/
const layer = "pointer-events-none absolute inset-x-0 top-0 h-[100lvh]";

const Transition = () => {
  const [done, setDone] = useState(false);
  if (done) return null;

  return (
    <div>
      <div className={`${layer} z-40 flex overflow-hidden`}>
        <Stairs />
      </div>

      <motion.div
        className={`${layer} bg-primary`}
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
