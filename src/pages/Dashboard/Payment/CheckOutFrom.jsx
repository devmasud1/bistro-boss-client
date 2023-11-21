import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import useCart from "./../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const CheckOutFrom = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecureUrl = useAxiosSecure();
  const [, cart] = useCart();
  const { user } = useAuth();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecureUrl
        .post("/create-payment-intent", { price: totalPrice })
        .then((data) => {
          //console.log(data.data.clientSecret);
          setClientSecret(data.data.clientSecret);
        });
    }
  }, [axiosSecureUrl, totalPrice]);

  const handleCheckOut = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
     // console.log("[paymentMethod]", paymentMethod);
    }
    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "none",
            email: user?.email || "none",
          },
        },
      });
    if (confirmError) {
      console.log("confirmError");
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const paymentInfo = {
          name: user?.displayName,
          email: user?.email,
          transactionId: paymentIntent.id,
          cartId: cart.map((item) => item._id),
          menuId: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecureUrl.post("/payments", paymentInfo);

        // console.log("save payment info", res.data);
        if (res.data?.paymentResult?.insertedId) {
          toast("Thanks for your payment", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
    }
  };

  return (
    <form onSubmit={handleCheckOut}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-neutral my-5 btn-sm"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        pay now
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-blue-500">
          Your transaction id is - <strong>{transactionId}</strong>
        </p>
      )}
    </form>
  );
};
export default CheckOutFrom;
