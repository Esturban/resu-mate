import { HeroGetStarted } from "./HeroGetStarted";

/* container to hold text and button for hero */
export function HeroHeading(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center md:items-start w-full px-0 md:px-2 py-8">
      <p className="text-2xl mt-2 sm:mt-0">Resumes that make you shine ✨</p>
      <h1 className="py-3 text-5xl md:text-7xl font-bold">Resumate</h1>
      <p className="text-2xl">Get the jobs you deserve</p>
      <HeroGetStarted />
    </div>
  );
}