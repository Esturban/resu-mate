import { mappedData } from "../Hero";

/**
 * create card with data services in hero
 */
export function HeroResume(): JSX.Element {
  return (
    <div className="absolute flex flex-col sm:py-8 md:min-w-[768px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl -my-8 sm:my-0">
      <h1 className="text-4xl font-bold text-indigo-500 mb-4">Resume Magic</h1>
      
      <div className="flex justify-between flex-wrap px-4">{mappedData}</div>
    </div>
  );
}
