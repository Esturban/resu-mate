import {v4 as uuid} from "uuid";
import { PhoneIcon, UserGroupIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { FeatureText } from "./Features/FeatureText";

/* support component */
function Features(): JSX.Element {
  const data = [
    {
      component: <PhoneIcon />,
      span: "1. Buy or subscribe",
      p: "Get a subscription or buy one-time resume update. If you subscribe, you get as many resumes as you'd like with your dream jobs as targets. The more you share, the better we can target your resume",
    },
    {
      component: <UserGroupIcon />,
      span: "2. Receive your resume",
      p: "Receive your resume within 48 hours, on average.",
    },
    {
      component: <HandThumbUpIcon />,
      span: "3. Get revisions",
      p: "We'll revise your resume until you're 100% satisfied.",
    },
  ] as const;

  const columns = data.map((e) => (
    <div className="bg-white rounded-xl shadow-2xl relative" key={uuid()}>
      <div className="p-8">
        <div className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] mb-4">
          {e.component}
        </div>
        <span className="font-bold text-2xl my-18">{e.span}</span>
        <p className="text-gray-600 text-xl  mb-12 mt-4">{e.p}</p>
      </div>

    </div>
  ));

  return (
    <div id="features" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src="/support.webp"
          alt="Support"
        />
      </div>

      <div className="max-w-[1280px] mx-auto text-white relative">
        <FeatureText />
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          {columns}
        </div>
      </div>
    </div>
  );
}

export default Features;
