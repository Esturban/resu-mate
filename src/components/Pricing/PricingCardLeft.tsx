import  GetStarted  from "../GetStarted";
import { standard } from "../Pricing";

/**
 * create pricing card on the top/left side (based on viewpoint)
 * 
 */
export function PricingCardLeft(): JSX.Element {
  
  return (
    <div className="text-2xl">
      <p className="text-2xl py-4 text-slate-500 text-center mb-0">
      Urgent Resume?
      </p>
      <p className="text-2xl py-0 text-slate-500 text-center mb-2">
      We've Got You Covered!
      </p>
      <hr></hr>
      {standard}
      
      <GetStarted productId={process.env.REACT_APP_STANDARD_PRICE || ''} productMode={'payment'}/>
      
    </div>
  );
}
