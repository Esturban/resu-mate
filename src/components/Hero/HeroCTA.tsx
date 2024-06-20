import { useState } from 'react';
import { Link } from 'react-scroll';

/* get started button in hero element */
export function HeroCTA(): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000); // Reset after 1 second
  };

  return (
    <Link onClick={handleClick} to="pricing" smooth={true} duration={500} type="button" className={`py-3 sm:w-[70%] pr-4 pl-4 my-4 bg-sky-700 hover:bg-sky-300 rounded-full transform hover:scale-110 transition-all duration-200 ease-in-out hover:text-gray-800 text-white text-center text-lg ${isClicked ? 'animate-bounce' : ''}`}>
      Dream Job Awaits
    </Link>
  );
}