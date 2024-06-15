// NavHandlers.tsx
import NavLink from './NavLink';
// import NavButton from './NavButton';
import { NavLinkType, NavHandlersProps } from './types';

const navLinks: NavLinkType[] = [
  { to: "about", offset: -200, title: "Who We Help" },
  { to: "features", offset: -50, title: "How It Works" },
  { to: "platforms", offset: -100, title: "Results First" },
  { to: "pricing", offset: -50, title: "Pricing" },
];

export function NavHandlers({ nav, handleClose }: NavHandlersProps): JSX.Element {
  return (
    <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
      {navLinks.map((link) => (
        <NavLink key={link.to} link={link} handleClose={handleClose} />
      ))}
      <div className="flex flex-col my-4">
        
        <NavLink key = "pricing" link={{ to: "pricing", offset: -50, title: "Dream Job Awaits"}} handleClose={handleClose} className="px-8 py-3 xxs:bg-indigo-700 text-white rounded-md text-center .rounded">
          {/* <NavButton className="px-8 py-3 bg-indigo-700">Sign Up</NavButton> */}
        </NavLink>
      </div>
    </ul>
  );
}