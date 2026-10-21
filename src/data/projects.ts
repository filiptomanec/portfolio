/**
 * Projekty zobrazené na stránce /projects.
 *
 * Přidání projektu = přidat záznam do pole `projects` a náhled do
 * `public/assets/projects/` (WebP, šířka ~1600 px, poměr 16 : 9, do ~250 kB).
 * Pořadové číslo se dopočítá z pozice v poli, první záznam je nahoře.
 */
export type Project = {
  /** Unikátní klíč (kebab-case), použije se jako React key a id kotvy. */
  slug: string;
  title: string;
  /** Krátký štítek nad názvem, např. „Web · 3D · data“. */
  category: string;
  year?: string;
  /** 2–3 věty o tom, co projekt je. */
  description: string;
  /** Co je na projektu zajímavé – ideálně 4 body (krátký nadpis + 1–2 věty). */
  highlights: { title: string; text: string }[];
  stack: string[];
  image: {
    /** Cesta od `public/`, např. `/assets/projects/nazev.webp`. */
    src: string;
    /** Popis toho, co je na obrázku vidět (ne „screenshot projektu“). */
    alt: string;
  };
  links: {
    live: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "dum-pod-orechem",
    title: "Dům pod ořechem",
    category: "Web · 3D · výpočty",
    year: "2026",
    description:
      "Dům pod ořechem je návrh fiktivního přízemního rodinného domu se zahradou na jižní Moravě. Všechno vychází z jednoho souboru dat, ze kterého se automaticky vytváří půdorys, 3D model, rendery i výpočty. Když v datech změním třeba okno, promítne se změna do všech částí projektu. Na webu si můžete dům prohlédnout ve 3D, prozkoumat jeho vlastnosti a spočítat třeba oslunění místností nebo náklady na stavbu.",
    highlights: [
      {
        title: "Všechno vychází z jedněch dat",
        text: "Změním okno v modelu a změna se promítne do půdorysu, 3D modelu, renderů i rozpočtu. Každá část tak odpovídá stejnému návrhu.",
      },
      {
        title: "Dům si můžete projít ve 3D",
        text: "Procházejte místnostmi, odkryjte střechu nebo vyzkoušejte jinou fasádu. Model lze také exportovat pro 3D tisk nebo rozšířenou realitu na iPhonu.",
      },
      {
        title: "Slunce a energie v číslech",
        text: "Vyberte den a hodinu a zjistěte, kam dopadá slunce a jak dlouho svítí do jednotlivých místností. Výpočty zahrnují také fotovoltaiku a spotřebu energie.",
      },
      {
        title: "Rozpočet podle skutečného modelu",
        text: "Množství materiálu se počítá přímo z geometrie domu. Ceny si můžete prohlédnout v rozpočtu a výkaz výměr exportovat do CSV.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "three.js",
      "Blender (Python)",
      "Zod",
      "Vitest",
      "Vercel",
    ],
    image: {
      src: "/assets/projects/dum-pod-orechem.webp",
      alt: "Úvodní stránka webu Dům pod ořechem s nadpisem a tlačítkem 3D prohlídky. Denní render fiktivního přízemního domu s fotovoltaikou na střeše, terasou a bazénem.",
    },
    links: {
      live: "https://house-sample.filiptomanec.cz",
      github: "https://github.com/filiptomanec/house-sample",
    },
  },
];
