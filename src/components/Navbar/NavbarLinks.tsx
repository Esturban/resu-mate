import { NavbarLinksAbout } from "../Navbar/NavbarLinksAbout";
import { NavbarLinksProcess } from "../Navbar/NavbarLinksProcess";
import { NavbarLinksPricing } from "../Navbar/NavbarLinksPricing";
import { NavbarLinksFeatures } from "../Navbar/NavbarLinksFeatures";
import { ReactComponent as Logo } from "../../assets/resumate.svg";
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
        <h1 className="flex items-center text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">
          <Logo className="w-6 h-6 sm:w-8 sm:h-8 mr-2" /> 
          Resumate
        </h1>
      </Link>
      <ul className="hidden md:flex cursor-pointer">
        
        <li>{NavbarLinksAbout()}</li>
        <li>{NavbarLinksFeatures()}</li>
        <li>{NavbarLinksProcess()}</li>
        <li>{NavbarLinksPricing()}</li>
      </ul>
    </div>
  );
}