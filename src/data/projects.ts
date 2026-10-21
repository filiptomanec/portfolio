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
  /** Aspoň jeden odkaz. Bez živé ukázky (např. hardware) je hlavním odkazem GitHub. */
  links: { live: string; github?: string } | { live?: undefined; github: string };
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
  {
    slug: "investio",
    title: "Investio",
    category: "Web · finance · grafy",
    year: "2026",
    description:
      "Investio je sada tří finančních kalkulaček pro web a mobil. Spočítáte si, kolik můžete mít za pár let naspořeno, kolik měsíčně odkládat na budoucí rentu nebo jestli se při hypotéce víc vyplatí splácet rychleji, nebo investovat. Výpočty zohledňují inflaci a probíhají přímo ve vašem zařízení, takže zadaná čísla nikam neodesíláte.",
    highlights: [
      {
        title: "Výsledek se mění s každým posunem",
        text: "Posuňte hodnotu nebo zadejte přesné číslo a výsledek se hned přepočítá. Grafy se plynule mění a hlavní částku máte na očích i na telefonu.",
      },
      {
        title: "Inflace podle skutečných dat",
        text: "Průměrnou inflaci v ČR načtete jedním tlačítkem z dat Světové banky. Hned uvidíte, jakou hodnotu budou mít vaše peníze v dnešních cenách.",
      },
      {
        title: "Doplácet hypotéku, nebo investovat?",
        text: "Porovnejte tři způsoby, jak naložit s penězi navíc. Kalkulačka ukáže, která strategie vychází lépe a kdy hodnota investic dorovná zbývající dluh.",
      },
      {
        title: "Výpočty pokryté testy",
        text: "Všechny výpočty jsou v samostatném balíčku pokrytém testy, odděleně od vzhledu aplikace. Aplikace nabízí češtinu i angličtinu a světlý i tmavý režim.",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "TanStack Start",
      "Tailwind CSS",
      "Recharts",
      "Vitest",
      "Vercel",
    ],
    image: {
      src: "/assets/projects/investio.webp",
      alt: "Investiční kalkulačka Investio v tmavém režimu. Vlevo jsou posuvníky pro vklady, úrok a dobu investování, vpravo výsledek 2 924 650 Kč za 20 let, přehled vkladů a výnosu a sloupcový graf růstu úspor po jednotlivých letech.",
    },
    links: {
      live: "https://investio.filiptomanec.cz",
      github: "https://github.com/filiptomanec/investio",
    },
  },
  {
    slug: "vzduch-doma",
    title: "Vzduch doma",
    category: "IoT · WEB · PWA",
    year: "2026",
    description:
      "Vzduch doma hlídá, kdy je v mém obýváku čas vyvětrat. Vlastní zařízení se senzorem měří každé tři minuty množství CO₂, teplotu a vlhkost a posílá naměřené hodnoty přes Wi-Fi do aplikace. Ta sleduje vývoj CO₂, odhaduje, kdy překročí nastavenou hranici, a může poslat upozornění na telefon. Bez přihlášení si můžete vyzkoušet simulovaný byt s vymyšlenými daty.",
    highlights: [
      {
        title: "Od senzoru až na obrazovku",
        text: "Zařízení s čipem ESP32 a senzorem SCD30 posílá měření na server, kde se ukládají do databáze Postgres. Celý systém od vlastního hardwaru až po webovou aplikaci jsem postavil sám.",
      },
      {
        title: "Poradí, kdy otevřít okno",
        text: "Podle vývoje CO₂ odhadne, za kolik minut překročí 1 000 ppm. Zároveň sama rozpozná, kdy se naposledy větralo.",
      },
      {
        title: "Upozornění přímo na telefon",
        text: "Aplikaci si přidáte na plochu telefonu a nastavíte vlastní limit CO₂. Když ho hodnoty překročí, přijde vám push notifikace.",
      },
      {
        title: "Živá ukázka pro návštěvníky",
        text: "Moje skutečná data jsou chráněná heslem. V ukázce běží čas 72× rychleji, takže během chvilky uvidíte, jak CO₂ stoupá a jak rychle klesne po vyvětrání.",
      },
    ],
    stack: [
      "ESP32",
      "Sensirion SCD30",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Postgres (Neon)",
      "Web Push",
      "Vercel",
    ],
    image: {
      src: "/assets/projects/vzduch-doma.webp",
      alt: "Aplikace Vzduch doma v tmavém režimu. Uprostřed je barevný prstenec s hodnotou CO₂ 691 ppm a hodnocením „Výborný“, pod ním text „Vzduch je svěží“. Vpravo jsou karty s teplotou 21,2 °C a vlhkostí 50 %, každá s grafem za posledních 24 hodin.",
    },
    links: {
      live: "https://air.filiptomanec.cz",
    },
  },
  {
    slug: "domaci-panel",
    title: "Domácí ovládací panel",
    category: "Hardware · C++ · IoT",
    year: "2026",
    description:
      "Kulatý dotykový displej na zdi, přes který doma ovládám pět žaluzií a sleduju teplotu, vlhkost, CO₂ i spotřebu elektřiny. Ukáže také meteoradar ČHMÚ a letadla, která zrovna letí nad námi, i s trasou. Běží úplně samostatně, bez serveru a bez cloudu. S chytrými zařízeními doma i s veřejnými službami komunikuje napřímo.",
    highlights: [
      {
        title: "Plynulý, i když síť zdržuje",
        text: "Stažení dat trvalo až\u00a03\u00a0s a displej mezitím nereagoval na dotyk. Síť jsem přesunul do vlastního vlákna na druhém jádře a nejdelší zásek klesl z 2,7\u00a0s na 0,14\u00a0s.",
      },
      {
        title: "Radar letadel nad domem",
        text: "Letadla mají barvu podle výšky a ikonu podle velikosti, vrtulníky vlastní. Mapu přiblížíte od 28 do 296\u00a0km a po klepnutí uvidíte volací znak, typ, trasu a u většiny letadel i fotku.",
      },
      {
        title: "Mapu si panel kreslí sám",
        text: "Hranice států jsem zjednodušil ze 17\u00a0644 bodů na 1\u00a0899, takže se vejdou do 7,6\u00a0kB. Panel z nich vykreslí mapu pro jakékoli místo, které vyberete klepnutím.",
      },
      {
        title: "Wi-Fi bez hesla v kódu",
        text: "Nový panel ukáže QR kód. Telefon se k němu připojí, vyberete domácí síť a zadáte heslo. V konfiguraci ani v repozitáři tak nejsou žádné přístupové údaje.",
      },
    ],
    stack: [
      "ESP32-S3",
      "C++",
      "ESPHome",
      "LVGL",
      "FreeRTOS",
      "Python",
      "Vercel",
    ],
    image: {
      src: "/assets/projects/esp-home-panel.webp",
      alt: "Tři kulaté obrazovky domácího panelu. Vlevo teplota 23,4 °C a 1090 ppm CO₂ v obýváku, uprostřed radar s 26 letadly nad mapou Česka, vpravo ovládání žaluzie otevřené na 75 %.",
    },
    links: {
      github: "https://github.com/filiptomanec/esp-home-panel",
    },
  },
];
