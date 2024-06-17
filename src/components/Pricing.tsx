import {v4 as uuid} from "uuid";
import { CheckMark } from "./CheckMark";
import { PricingCards } from "./Pricing/PricingCards";
import { PricingText } from "./Pricing/PricingText";

/* create lorem text */
export function paraLorem({ text }: { text: string }): void {
  <p className="text-2xl py-8 text-slate-500">{text}</p>;
}

const standardFeatures = [
  "Receive your resume in 48 hours",
  "1 Dedicated resume writer",
  "ATS Optimized",
  "Unlimited revisions",
  "Achievement-based",
  "Include up to 10 target jobs"
] as const;


const premiumFeatures = [
  "2 Dedicated resume writers",
  "Unlimited drafts",
  "Unlimited revisions",
  "Unlimited dream job targets",
  "Dedicated career coach",
] as const;


export const standard = standardFeatures.map((e) => (
  <div key={uuid()} className="text-2xl">
    <CheckMark text={e} />
  </div>
));

export const premium = premiumFeatures.map((e) => (
  <div key={uuid()} className="text-2xl">
    <CheckMark text={e} />
  </div>
));

/* pricing component */
export default function Pricing(): JSX.Element {
  return (
    <div id="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay" />
      <div className="max-w-[1280px] mx-auto py-12">
        <PricingText />
        <PricingCards />
      </div>
    </div>
  );
}
