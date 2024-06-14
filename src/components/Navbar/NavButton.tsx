// NavButton.tsx
import { NavButtonProps } from './types';

const NavButton = ({ className, children }: NavButtonProps) => (
  <button type="button" className={className}>
    {children}
  </button>
);

export default NavButton;