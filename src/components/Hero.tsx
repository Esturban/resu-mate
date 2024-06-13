import { CloudArrowUpIcon, ArrowDownOnSquareStackIcon, PaperAirplaneIcon, ServerIcon } from "@heroicons/react/24/solid";
import {v4 as uuid} from "uuid";
import { HeroResume } from "./Hero/HeroResume";
import { HeroHeading } from "./Hero/HeroHeading";
import { HeroImage } from "./Hero/HeroImage";

const data = [
  { component: <CloudArrowUpIcon />, p: "ATS Compatible" },
  { component: <ArrowDownOnSquareStackIcon />, p: "Achievement-based" },
  { component: <ServerIcon />, p: "Goal-oriented" },
  { component: <PaperAirplaneIcon />, p: "Proven" },
] as const;

export const mappedData = data.map((e) => (
  <div className="flex flex-col items-center px-4 py-2" key={uuid()}>
    <div className="w-24 p-4 bg-indigo-600 text-white rounded-lg">{e.component}</div>
    <p className="text-gray-900 mt-2">{e.p}</p>
  </div>
));

/* hero component */
export default function Hero(): JSX.Element {
  return (
    <div
      id="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1280px] m-auto px-12">
        <HeroHeading />
        <HeroImage />
          <HeroResume />
      </div>
    </div>
  );
}
