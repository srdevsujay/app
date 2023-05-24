// import React, { useEffect, useState } from "react";
// import Stripe from "stripe";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { createSubscriptionStripe } from "../../../../redux/state/slices/configuration/configurationThunk";

// const CheckoutForm = ({ setSubscription }: any) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [cardError, setCardError] = useState<string | null>(null);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (!stripe || !elements) return;

//     const cardElement = elements.getElement(CardElement);
//     if (!cardElement) return;

//     const { error, token } = await stripe.createToken(cardElement);
//     console.log("token", token);
//     setSubscription(token);
//     if (error) {
//       // setCardError(error.message);
//       console.log(error);
//       return;
//     }

//     // /payment-sheet method post enviar el id fel token desestucturado
//     // useEffect(() => {
//     //   createSubscriptionStripe({ token: token.id });
//     // }, [token]);

//     // const response = await fetch("/create-customer", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify({ token: token.id }),
//     // });

//     // const data = await response.json();
//     // console.log("data", data);

//     // const customerId = data.customerId;
//     // console.log("customerId", customerId);

//     // Aquí puedes utilizar el customerId para crear una suscripción o realizar otro tipo de operación en Stripe
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label>Número de la tarjeta</label>
//         <CardElement className="form-control" />
//       </div>
//       {cardError && <div>{cardError}</div>}
//       <button type="submit">Pagar</button>
//     </form>
//   );
// };

// export default CheckoutForm;

///////////////////////////////////

import React, { useEffect, useState } from "react";
import Stripe from "stripe";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createSubscriptionStripe } from "../../../../redux/state/slices/configuration/configurationThunk";
import { ButtonCreate } from "../../../../styled-components/button/index";
import { useAppSelector } from "../../../../hooks/appDispatch";
import Swal from "sweetalert2";

const CheckoutForm = ({ setSubscription }: any) => {
  const {
    email: emailPerfil,
    last_name,
    name,
  } = useAppSelector((state) => state.user.user);
  const [email, setEmail] = useState(emailPerfil);
  const [fullName, setFullName] = useState(`${name} ${last_name}`);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState<any>("");

  useEffect(() => {
    setEmail(emailPerfil);
    setFullName(`${name} ${last_name}`);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;
    console.log("cardElement", cardElement);

    const { error, token } = await stripe.createToken(cardElement, {
      email,
      name: fullName,
    } as any);
    console.log("token", token);
    setSubscription(token);
    if (error) {
      setCardError(error.message);
      Swal.fire(cardError, "", "info");
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
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-sm-12">
            <label>Nombre completo</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="form-control"
              placeholder="Ingresa tu nombre completo"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-12">
            <label>Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
              placeholder="Ingresa tu correo electronico"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-12">
            <label>Tarjeta de crédito</label>
            <CardElement />
          </div>
        </div>
        <ButtonCreate
          className="btn btn-add mr-2 font-14 mt-2"
          type="submit"
          disabled={!stripe}
        >
          Paga Ahora
        </ButtonCreate>
        {cardError && <div>{cardError}</div>}
        {/* <button type="submit">Pagar</button> */}
      </form>
    </div>
  );
};

export default CheckoutForm;
