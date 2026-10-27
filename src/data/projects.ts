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
    slug: "nadhled",
    title: "Nadhled",
    category: "Web · mapy · data",
    year: "2026",
    description:
      "Nadhled vám pomůže poznat místo v Česku dřív, než si tam koupíte pozemek nebo dům. Stačí zadat adresu nebo kliknout do mapy a zjistíte, jak daleko to máte do práce, co je v okolí a jaká rizika nebo omezení se s místem pojí. Uvidíte také terén, zeleň, čistotu ovzduší, kriminalitu v okolí nebo místo ve 3D se stíny podle denní doby. Vše shrnuje skóre od 0 do 100 s konkrétními důvody a krátkým AI shrnutím. Až tři místa můžete porovnat vedle sebe a výsledek si uložit do PDF.",
    highlights: [
      {
        title: "Dojezdové zóny a trasy",
        text: "Zóny dostupnosti počítá síťová analýza Esri podle skutečných cest, ne vzdušnou čarou. Aplikace spočítá i dojíždění až čtyř členů domácnosti včetně typického provozu v danou hodinu a ukáže, kolik hodin a peněz za palivo to stojí za měsíc i za rok. Školy a praktické lékaře beru z oficiálních registrů MŠMT a ÚZIS, takže nechybí ani v malých obcích.",
      },
      {
        title: "Rizika a ovzduší z veřejných dat",
        text: "Záplavy, hluk u fasád domu včetně tiché strany, radon, poddolování, sesuvy, kriminalita, průmysl nebo skládky v okolí, střelnice, větrné elektrárny a letiště a průměrné znečištění ovzduší za pět let. Údaje načítám přímo od státních institucí, například VÚV, ČHMÚ, ČÚZK, České geologické služby a Policie ČR.",
      },
      {
        title: "Terén, katastr a 3D",
        text: "Zobrazuji sklon svahu, výškový profil, údaje o parcele a stavbě, památkovou ochranu, bonitu půdy i odhad poplatku za vynětí ze zemědělského půdního fondu. Ve 3D pohledu uvidíte terén s budovami a stíny podle roční doby a hodiny.",
      },
      {
        title: "Skóre s důvody a AI shrnutím",
        text: "Každá kategorie má vlastní body a vysvětlení, třeba „Obchod 2 min pěšky“ nebo „Hluk 70–75 dB“. AI z výsledků napíše krátké shrnutí a kontroluje se, že nepřidá čísla, která v datech nejsou. Výpočty běží přes vlastní server s mezipamětí, který šetří bezplatné limity služeb.",
      },
    ],
    stack: [
      "ArcGIS Maps SDK for JavaScript",
      "Esri routing",
      "Groq API",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Vitest",
      "Vercel",
    ],
    image: {
      src: "/assets/projects/nadhled-v3.webp",
      alt: "Aplikace Nadhled nad leteckou mapou Hlučína. Vlevo je karta místa se skóre 85 ze 100 a hodnocením „Výborné místo k bydlení“. Otevřená záložka Dostupnost zobrazuje režim Pěšky a zóny dostupnosti za 5, 10 a 15 minut. V mapě jsou kolem špendlíku na náměstí vyznačené fialové zóny.",
    },
    links: {
      live: "https://www.nadhled-lokalit.cz",
    },
  },
  {
    slug: "dum-pod-orechem",
    title: "Dům pod ořechem",
    category: "Web · 3D · výpočty · vizualizace",
    year: "2026",
    description:
      "Dům pod ořechem je návrh fiktivního přízemního rodinného domu se zahradou na jižní Moravě. Cílem projektu je ukázat, jak může dům vypadat ještě před stavbou, aby měl investor lepší představu o tom, co ho čeká. Na webu si ho můžete projít ve 3D, prohlédnout si, jak do místností během dne dopadá slunce, a spočítat energetickou náročnost domu nebo očekávanou výrobu fotovoltaiky.",
    highlights: [
      {
        title: "Jeden model, více výstupů",
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
    slug: "airsense",
    title: "Airsense",
    category: "IoT · WEB · PWA",
    year: "2026",
    description:
      "Airsense hlídá, kdy je v mém obýváku čas vyvětrat. Vlastní zařízení se senzorem měří každé tři minuty množství CO₂, teplotu a vlhkost a posílá naměřené hodnoty přes Wi-Fi do aplikace. Ta sleduje vývoj CO₂, odhaduje, kdy překročí nastavenou hranici, a může poslat upozornění na telefon. Bez přihlášení si můžete vyzkoušet simulovaný byt s vymyšlenými daty.",
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
      src: "/assets/projects/airsense.webp",
      alt: "Aplikace Airsense v tmavém režimu. Uprostřed je barevný prstenec s hodnotou CO₂ 884 ppm a hodnocením „Dobrý“, pod ním text „Vzduch je v pořádku“. Vpravo jsou karty s teplotou 21,4 °C a vlhkostí 46 %, každá s grafem za posledních 24 hodin.",
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
      "Na zdi mi visí kulatý dotykový panel, přes který ovládám pět žaluzií a sleduju teplotu, vlhkost, CO₂ i spotřebu elektřiny. Najdu na něm také animovaný meteoradar ČHMÚ a živou mapu letadel nad Českem, včetně jejich tras a podrobností o letech. Panel funguje úplně samostatně, bez serveru a cloudu. S domácími zařízeními i veřejnými službami komunikuje přímo.",
    highlights: [
      {
        title: "Displej reaguje i při stahování dat",
        text: "Stahování přes síť blokovalo dotyk až 2,7\u00a0sekundy. Přesunul jsem ho do samostatného vlákna na druhém jádře procesoru. Nejdelší zásek pak klesl na 0,14\u00a0sekundy.",
      },
      {
        title: "Radar letadel s podrobnými informacemi",
        text: "Barva letadla prozradí jeho výšku, ikona jeho velikost. Po klepnutí panel zobrazí volací znak, typ, trasu, rychlost a výšku. U zhruba dvou třetin letadel je k dispozici i fotka.",
      },
      {
        title: "Vlastní mapa, méně dat",
        text: "Mapu si panel vykresluje sám pro libovolné místo. Hranice států jsem zjednodušil ze 17\u00a0644 bodů na 1\u00a0899, takže se vejdou do pouhých 7,6\u00a0kB.",
      },
      {
        title: "Wi-Fi bez hesla v kódu",
        text: "Při prvním spuštění panel zobrazí QR kód. Telefonem se připojíte, vyberete domácí Wi-Fi a zadáte heslo. Přístupové údaje tak nemusí být uložené v kódu ani v repozitáři.",
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
      alt: "Tři kulaté obrazovky domácího ovládacího panelu vedle sebe. Vlevo je teplota 23,4 °C a CO₂ 1 090 ppm, uprostřed radar s 26 letadly nad mapou Česka a vpravo ovládání žaluzie nastavené na 75 %.",
    },
    links: {
      github: "https://github.com/filiptomanec/esp-home-panel",
    },
  },
];
