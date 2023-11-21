import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";


const stripePromise = loadStripe(import.meta.env.VITE_payment_api_key);

const Payment = () => {
  return (
    <div className="border-2 p-10 m-5 space-y-5">
      <h2 className="text-2xl font-semibold">PAYMENT</h2>

      <div>
        <Elements stripe={stripePromise}>
          <CheckOutFrom />
        </Elements>
      </div>
    </div>
  );
};
export default Payment;
