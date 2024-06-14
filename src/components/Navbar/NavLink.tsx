// NavLink.tsx
import { Link } from "react-scroll";
import { NavLinkProps } from './types';

const NavLink = ({ link, handleClose }: NavLinkProps) => (
  <li className="border-b-2 border-zinc-300 w-full">
    <Link
      onClick={handleClose}
      to={link.to}
      smooth
      offset={link.offset}
      duration={500}
      rel="noopener noreferrer"
      role="link"
      title={link.title}
      aria-label={link.title}
    >
      {link.title}
    </Link>
  </li>
);

export default NavLink;