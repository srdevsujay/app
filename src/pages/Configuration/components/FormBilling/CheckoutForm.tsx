import React, { useEffect, useState } from "react";
import Stripe from "stripe";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createSubscriptionStripe } from "../../../../redux/state/slices/configuration/configurationThunk";

const CheckoutForm = ({ setSubscription }: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { error, token } = await stripe.createToken(cardElement);
    console.log("token", token);
    setSubscription(token);
    if (error) {
      // setCardError(error.message);
      console.log(error);
      return;
    }

    // /payment-sheet method post enviar el id fel token desestucturado
    // useEffect(() => {
    //   createSubscriptionStripe({ token: token.id });
    // }, [token]);

    // const response = await fetch("/create-customer", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ token: token.id }),
    // });

    // const data = await response.json();
    // console.log("data", data);

    // const customerId = data.customerId;
    // console.log("customerId", customerId);

    // Aquí puedes utilizar el customerId para crear una suscripción o realizar otro tipo de operación en Stripe
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Número de la tarjeta</label>
        <CardElement className="form-control" />
      </div>
      {cardError && <div>{cardError}</div>}
      <button type="submit">Pagar</button>
    </form>
  );
};

export default CheckoutForm;
