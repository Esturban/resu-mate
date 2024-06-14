// types.ts
export type NavLinkType = {
    to: string;
    offset: number;
    title: string;
  };
  
  export type NavLinkProps = {
    link: NavLinkType;
    handleClose: () => void;
  };
  
  export type NavButtonProps = {
    className: string;
    children: React.ReactNode;
  };
  
  export type NavHandlersProps = {
    nav: boolean;
    handleClose: () => void;
  };