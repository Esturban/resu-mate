import { NavbarLinksAbout } from "./NavbarLinksAbout";
import { NavbarLinksPlatforms } from "./NavbarLinksPlatforms";
import { NavbarLinksPricing } from "./NavbarLinksPricing";
import { NavbarLinksSupport } from "./NavbarLinksSupport";
import { Link } from "react-scroll";

/**
 * create links found in leftside of navbar when expanded
 */
export function NavbarLinks(): JSX.Element {
  return (
    <div className="flex items-center">
      <Link to="home"
        smooth
        duration={500}
        rel="noopener noreferrer"
        role="link"
        title="Home"
        aria-label="Home">
        <h1 className="text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">
          Resumate
        </h1>
      </Link>
      <ul className="hidden md:flex cursor-pointer">
        
        <li>{NavbarLinksAbout()}</li>
        <li>{NavbarLinksSupport()}</li>
        <li>{NavbarLinksPlatforms()}</li>
        <li>{NavbarLinksPricing()}</li>
      </ul>
    </div>
  );
}