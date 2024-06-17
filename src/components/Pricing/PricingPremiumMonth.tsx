import { PricingTail } from "./PricingTail";

/* monthly price */
export function PricingPremiumMonth(): JSX.Element {
  return (
    <div>
      <p className="text-6xl font-bold py-4 flex">
        $999
        <PricingTail text={"/ Mo"} />
      </p>
    </div>
  );
}
