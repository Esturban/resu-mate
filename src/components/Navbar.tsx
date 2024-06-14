import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { CTA } from "./CTA";
import { NavbarLinks } from "./Navbar/NavbarLinks";
import { NavHandlers } from "./Navbar/NavHandlers";

function Navbar(): JSX.Element {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const hamburgerMenu = !nav ? <Bars4Icon className="h-6 w-6" /> : <XMarkIcon className="h-6 w-6" />;
  const hamburger = <div className="w-8 h-8">{hamburgerMenu}</div>;

  return (
    <div className="w-screen sm:h-20 z-10 bg-zinc-200 fixed drop-shadow-lg absolute top-0 left-0 right-0 z-20 p-4 sm:p-0">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <NavbarLinks />
        <CTA />
        <div className="md:hidden mr-4" onClick={handleClick}>
          {hamburger}
        </div>
      </div>
      <NavHandlers nav={nav} handleClose={handleClose} />
    </div>
  );
}

export default Navbar;