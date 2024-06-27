import { HeroCTA } from "./HeroCTA";

/* container to hold text and button for hero */
export function HeroHeading(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center w-full pl-0 py-12 sm:px-6 sm:pt-16 md:w-1/2 md:items-start md:px-0 md:py-8 ">
      <p className="text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-0 justify-center text-center">Resumes that make you shine ✨</p>
      <h1 className="py-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">Resumates</h1>
      <p className="text-lg sm:text-xl md:text-2xl italic text-center">Your friends helping you in the job search</p>
      <div className="mt-8 mb-8 w-3/4 text-center">
        <HeroCTA />
      </div>
    </div>
  );
}