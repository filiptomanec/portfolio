import Link from "next/link";

// components
import MobileNav from "./MobileNav";
import Nav from "@/components/Nav";

const Header = () => {
  return (
    <header className="pb-8 pt-[calc(2rem+env(safe-area-inset-top))] xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h2 className="text-4xl font-semibold">
            Filip<span className="text-accent">.</span>
          </h2>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/*<Link href="/contact">*/}
          {/*    <Button>Hire me</Button>*/}
          {/*</Link>*/}
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
