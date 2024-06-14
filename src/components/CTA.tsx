/**
 * navbar login buttons on right when not in hamburger view
 */
import { Link } from 'react-scroll';

export function CTA(): JSX.Element {
  return (
    <div className="hidden md:flex pr-4">
      <Link to="pricing" smooth duration={500}>
        <button type="button" className="px-8 py-3 bg-indigo-700 rounded-full">
          Dream Job Awaits
        </button>
      </Link>
    </div>
  );
}