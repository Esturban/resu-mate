import { PricingCardLeft } from "./PricingCardLeft";
import { PricingStandardMonth } from "./PricingStandardMonth";

/* create pricing element */
export function PricingStandard(): JSX.Element {
  return (
    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
      <span className="uppercase px-3 py-1 bg-sky-200 text-sky-900 rounded-2xl text-sm">
        One-Time
      </span>
      <PricingStandardMonth />
      <PricingCardLeft />
    </div>
  );
}
