import { CloudArrowUpIcon, ArrowDownOnSquareStackIcon, PaperAirplaneIcon, ServerIcon } from "@heroicons/react/24/solid";
import {v4 as uuid} from "uuid";
// import { HeroResume } from "./Hero/HeroResume";
import { HeroHeading } from "./Hero/HeroHeading";
import { HeroImage } from "./Hero/HeroImage";
import HeroLogos  from "./Hero/HeroLogos";
const data = [
  { component: <CloudArrowUpIcon />, p: "ATS Compatible" },
  { component: <ArrowDownOnSquareStackIcon />, p: "Achievement-based" },
  { component: <ServerIcon />, p: "Goal-oriented" },
  { component: <PaperAirplaneIcon />, p: "Proven" },
] as const;

export const mappedData = data.map((e) => (
  <div className="flex flex-col items-center px-4 py-2" key={uuid()}>
    <div className="w-24 p-4 bg-sky-600 text-white rounded-lg">{e.component}</div>
    <p className="text-gray-900 mt-2">{e.p}</p>
  </div>
));

/* hero component */
export default function Hero(): JSX.Element {
  return (
    <div
      id="home"
      className="relative h-screen overflow-hidden bg-sky-100"
    >
      <HeroImage />
      <div className="absolute inset-0 bg-white opacity-25"></div>
      {/* <header className="absolute top-0 left-0 right-0 z-20"> */}
        {/* Your Navbar goes here */}
      {/* </header> */}
      <div className="container relative z-10 flex items-center py-32 mx-2 md:px-12 xl:py-40 xxl:mb-50 xl:mb-80 xl:py-auto">
        <HeroHeading />
        
      </div>
      
      <HeroLogos />
    </div>
  );
}
