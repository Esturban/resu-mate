import { CloudArrowUpIcon, ArrowDownOnSquareStackIcon, PaperAirplaneIcon, ServerIcon } from "@heroicons/react/24/solid";
import uuid from "react-uuid";
import { HeroResume } from "./HeroResume";
import { HeroHeading } from "./HeroHeading";
import { HeroImage } from "./HeroImage";

const data = [
  { component: <CloudArrowUpIcon />, p: "ATS Compatible" },
  { component: <ArrowDownOnSquareStackIcon />, p: "Achievement-based" },
  { component: <ServerIcon />, p: "Goal-oriented" },
  { component: <PaperAirplaneIcon />, p: "Proven" },
] as const;

export const mappedData = data.map((e) => (
  <div className="flex px-4 py-2 text-gray-900" key={uuid()}>
    <div className="h-6 text-indigo-600">{e.component}</div>
    <p className="text-gray-900">{e.p}</p>
  </div>
));

/* hero component */
export default function Hero(): JSX.Element {
  return (
    <div
      id="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1280px] m-auto">
        <HeroHeading />
        <HeroImage />
          <HeroResume />
      </div>
    </div>
  );
}
