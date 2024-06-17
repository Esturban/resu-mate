import { PricingTail } from "./PricingTail";

/* container for monthly standard price */
export function PricingStandardMonth(): JSX.Element {
  return (
    <div>
      <p className="text-6xl font-bold py-4 flex">
        $249
        <PricingTail text={"/ Resume"} />
      </p>
    </div>
  );
}
