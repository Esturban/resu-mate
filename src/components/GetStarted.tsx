import getStripe from '../lib/getStripe';
import { useEffect } from 'react';

interface GetStartedProps {
  productId: string;
  productMode: "payment" | "subscription" | undefined;
}

function handleSuccess() {
  window.alert('Thank you, we received your purchase. Look for a receipt in your email with further instructions.');
  window.history.replaceState({}, document.title, "/"); // Remove 'success' from the URL
}

export default function GetStarted({ productId, productMode }: GetStartedProps) {
  async function handleCheckout() {
    const stripe = await getStripe();
    if (!stripe) {
      console.error('Stripe is not initialized');
      return;
    }
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: productId,
          quantity: 1,
        },
      ],
      mode: productMode,
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });
    if (error) {
      console.warn(error.message);
    }
  }

  useEffect(() => {
    if (window.location.href.includes('success')) {
      handleSuccess();
    }
  }, []);

  return (
    <button type="button" className="w-full py-4 -my-1 bottom-0 bg-sky-700 rounded-full mt-2" onClick={handleCheckout}>Your Best Resume</button>
  );
}