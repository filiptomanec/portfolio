"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  {
    name: "domů",
    path: "/",
  },
  {
    name: "služby",
    path: "/services",
  },
  {
    name: "projekty",
    path: "/projects",
    highlight: true,
  },
  {
    name: "životopis",
    path: "/resume",
  },
  // {
  //     name: "práce",
  //     path: "/work",
  // },
  {
    name: "kontakt",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* skrytý nadpis a popis pro čtečky obrazovky (vyžaduje Radix Dialog) */}
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigace mezi stránkami webu
        </SheetDescription>
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h2 className="text-4xl font-semibold">
              Filip<span className="text-accent">.</span>
            </h2>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={() => setIsOpen(false)}
                className={
                  link.highlight
                    ? `${
                        link.path === pathname &&
                        "ring-2 ring-accent ring-offset-4 ring-offset-primary"
                      } text-xl capitalize font-semibold rounded-full bg-accent text-primary px-6 py-2 hover:bg-accent-hover transition-all`
                    : `${
                        link.path === pathname &&
                        "text-accent border-b-2 border-accent"
                      } text-xl capitalize hover:text-accent transition-all`
                }
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
