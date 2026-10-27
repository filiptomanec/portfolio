import { BsArrowUpRight, BsPhone } from "react-icons/bs";

import { focusRing } from "@/components/projects/shared";
import { cn } from "@/lib/utils";

interface IAppStoreButtonProps {
  title: string;
  /** Odkaz do App Storu; bez něj jde o neklikací štítek „Připravuji“. */
  href?: string;
}

/** Odkaz na mobilní verzi projektu v App Storu (nad „stretched link“ karty). */
const AppStoreButton = ({ title, href }: IAppStoreButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative z-[2] inline-flex h-[48px] items-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white transition-colors hover:border-accent hover:text-accent",
          focusRing,
        )}
      >
        <BsPhone aria-hidden="true" className="text-lg" />
        App Store
        <BsArrowUpRight aria-hidden="true" />
        <span className="sr-only">
          {" "}
          – aplikace {title} pro iPhone (otevře se v nové záložce)
        </span>
      </a>
    );
  }

  return (
    <span className="relative z-[2] inline-flex h-[48px] cursor-default items-center gap-2.5 rounded-full border border-dashed border-white/30 pl-[18px] pr-2 text-white/75">
      <BsPhone aria-hidden="true" className="text-lg" />
      App Store
      <span className="rounded-full bg-accent/10 px-2.5 py-1.5 text-[11px] font-semibold uppercase leading-none tracking-[1px] text-accent">
        Připravuji
      </span>
      <span className="sr-only"> – aplikace {title} pro iPhone</span>
    </span>
  );
};

export default AppStoreButton;
