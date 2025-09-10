import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + '/order/success'
      }
    });
    if (error) setMessage(error.message || 'Payment failed');
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <PaymentElement />
      <button disabled={!stripe || loading} className="mt-4 w-full bg-black text-white py-2 rounded">
        {loading ? 'Processing...' : 'Pay now'}
      </button>
      {message && <div className="mt-2 text-red-600">{message}</div>}
    </form>
  );
}

export default function Checkout() {
  const { items } = useSelector((s: RootState) => s.cart);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    (async () => {
      const { data } = await api.post('/checkout/create-payment-intent', { items });
      setClientSecret(data.clientSecret);
    })();
  }, [items]);

  if (!clientSecret) return <div className="p-4">Loading payment...</div>;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}