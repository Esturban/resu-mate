import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import  GetStarted  from "../GetStarted";
import { standard } from "../Pricing";

const stripePromise = loadStripe(process.env.REACT_APP_REACT_APP_PUBLIC_PRODUCT_KEY || '');
/**
 * create pricing card on the top/left side (based on viewpoint)
 * 
 */
export function PricingCardLeft(): JSX.Element {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
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
      <Elements stripe={stripePromise} options={options}>
      <GetStarted productId={process.env.REACT_APP_STANDARD_PRICE || ''} productMode={'payment'}/>
      </Elements>
    </div>
  );
}
