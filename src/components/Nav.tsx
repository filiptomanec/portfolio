"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

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

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={
                            link.highlight
                                ? `${
                                    link.path === pathname && "ring-2 ring-accent ring-offset-4 ring-offset-primary"
                                } capitalize font-semibold rounded-full bg-accent text-primary px-5 py-2 hover:bg-accent-hover transition-all`
                                : `${
                                    link.path === pathname && "text-accent border-b-2 border-accent"
                                } capitalize font-medium hover:text-accent transition-all`
                        }
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
