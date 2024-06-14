// NavHandlers.tsx
import NavLink from './NavLink';
import NavButton from './NavButton';
import { NavLinkType, NavHandlersProps } from './types';

const navLinks: NavLinkType[] = [
  { to: "home", offset: 0, title: "Home" },
  { to: "about", offset: -200, title: "About" },
  { to: "support", offset: -50, title: "Support" },
  { to: "platforms", offset: -100, title: "Platforms" },
  { to: "pricing", offset: -50, title: "Pricing" },
];

export function NavHandlers({ nav, handleClose }: NavHandlersProps): JSX.Element {
  return (
    <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
      {navLinks.map((link) => (
        <NavLink key={link.to} link={link} handleClose={handleClose} />
      ))}
      <div className="flex flex-col my-4">
        
        <NavLink key = "pricing" link={{ to: "pricing", offset: -50, title: "Dream Job Awaits" }} handleClose={handleClose}>
          <NavButton className="px-8 py-3 bg-indigo-700">Sign Up</NavButton>
        </NavLink>
      </div>
    </ul>
  );
}