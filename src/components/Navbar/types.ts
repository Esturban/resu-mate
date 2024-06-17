import { ReactNode } from 'react';

/**
 * Props for the NavLink component.
 */
export interface NavLinkProps {
  link: NavLinkType;
  handleClose: () => void;
  children?: ReactNode; 
  className?: string; // Add this line
}

export type NavLinkType = {
    to: string;
    offset: number;
    title: string;
  };
  
  export type NavButtonProps = {
    className: string;
    children: React.ReactNode;
  };
  
  export type NavHandlersProps = {
    nav: boolean;
    handleClose: () => void;
  };

  