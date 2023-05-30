import { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";

const ButtonPaypalCreate = ({ idPlanPaypal, setIdPaypal }: any) => {
  const [xxxxx, setxxxxx] = useState(idPlanPaypal);

  return (
    <>
      <PayPalButton
        style={{ layout: "horizontal" }}
        createSubscription={(data: any, actions: any) => {
          console.log("idPlanPaypal---", xxxxx);
          return actions.subscription.create({
            plan_id: xxxxx,
            auto_renewal: true,
          });
        }}
        onApprove={(data: any, actions: any) => {
          setIdPaypal(data.subscriptionID);
        }}
        options={{
          clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
          vault: true,
        }}
      />
    </>
  );
};

export default ButtonPaypalCreate;
