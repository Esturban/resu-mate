import GetStarted from "../GetStarted";
import { premium } from "../Pricing";

/**
 * create pricing card on the right/bottom side (based on viewpoint)
 */
export function PricingCardRight(): JSX.Element {
  return (
    <div className="text-2xl">
      <p className="text-2xl py-4 text-slate-500 text-center mb-0">
      Unlimited Resumes.
      </p>
      <p className="text-2xl py-0 font-bold text-slate-500 text-center mb-2">
      Unlimited Opportunities.
      </p>
      <hr></hr>
      {premium}
      <GetStarted productId={process.env.REACT_APP_PREMIUM_PRICE || ''}  productMode={'subscription'}/>
    </div>
  );
}
