import { Link } from "react-scroll";

/* button in navbar */
export function NavbarLinksProcess(): JSX.Element {
  return (
    <Link
      to="process"
      smooth
      offset={-100}
      duration={500}
      rel="noopener noreferrer"
      role="link"
      title="Process"
      aria-label="Process"
    >
      Process
    </Link>
  );
}
