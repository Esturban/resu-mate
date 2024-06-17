import { Link } from "react-scroll";

/* button in navbar */
export function NavbarLinksFeatures(): JSX.Element {
  return (
    <Link
      to="features"
      smooth
      offset={-50}
      duration={500}
      rel="noopener noreferrer"
      role="link"
      title="How It Works"
      aria-label="Support"
    >
      How It Works
    </Link>
  );
}
