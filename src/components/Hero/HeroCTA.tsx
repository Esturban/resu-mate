import { useState } from 'react';
import { Link } from 'react-scroll';

export function HeroCTA(): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000); // Reset after 1 second
  };

  return (
    <Link onClick={handleClick} to="pricing" smooth={true} duration={500} type="button" className={`mx-auto inline-flex justify-center items-center py-3 px-6 min-w-[160px] bg-sky-700 hover:bg-sky-300 xl:w-3/4 xl:float-left rounded-full transform hover:scale-110 transition-all duration-200 ease-in-out hover:text-gray-800 text-white text-lg ${isClicked ? 'animate-bounce' : ''}`}>
      Dream Job Awaits
    </Link>
  );
}