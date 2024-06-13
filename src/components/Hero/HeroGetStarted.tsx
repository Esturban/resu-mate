/* get started button in hero element */
import { Link } from 'react-scroll';

export function HeroGetStarted(): JSX.Element {
  return (
    <Link to="pricing" smooth={true} duration={500} type="button" className="py-3 sm:w-[70%] pr-4 pl-4 my-4 bg-indigo-700 hover:bg-indigo-300 rounded-full transform hover:scale-110 transition-all duration-200 ease-in-out text-white hover:text-white text-center text-lg">
      Dream Job Awaits
    </Link>
  );
}