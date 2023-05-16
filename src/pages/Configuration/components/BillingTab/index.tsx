import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { createSubscription } from "../FormBilling/createSubscriptionForm";
import { PaymentElement } from "@stripe/react-stripe-js";
import { TitleHelvetica } from "../../../../styled-components/Title/index";
import SelectStateBooking from "../../../Contacts/components/SelectStateBooking/index";
import { FormControl, FormHelperText } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "../../../../styled-components/select/index";
import ButtonReturnSelect from "./ButtonReturnSelect";
import {
  createSubscriptionStripe,
  obtainApiStripe,
} from "../../../../redux/state/slices/configuration/configurationThunk";
import { useAppDispatch, useAppSelector } from "../../../../hooks/appDispatch";
import Stripe from "stripe";
import SelectFontPay from "./SelectFontPay";
import FontStripePay from "./FontStripePay";
import SelectSubscriptionsPlans from "./SelectSubscriptionsPlans";
import { createSubscriptionUser } from "../../../../redux/state/slices/configuration/configurationThunk";

const stripePromise = loadStripe(
  "pk_test_51Kha17DfKIMhwzEG7hdRFjUIO0soTyO2SAbgTLBOCwOcmXkWqa1m39C4IsHg0tyOMeCHozQGLx8DQSA7Epx5cMDG00Lhb4nYoI"
);

// const stripePromise = loadStripe(
//   process.env.REACT_APP_STRIPE_PUBLIC_KEY
// ) as any;

const stripe = new Stripe(
  "sk_test_51Kha17DfKIMhwzEGl6wR1eXgP3DIjDtQBwbu1QguP9tiJUdvxY5hyp8l0Uzthwbn8xqpFptbqwJS40MqZRg71gSz00NYzytTTs",
  {
    apiVersion: "2022-11-15",
  }
);

const BillingTab = () => {
  // const stripe = new Stripe('TU_CLAVE_API_PRIVADA');
  const dispatch = useAppDispatch();
  const { customerId, subscriptionsPlans } = useAppSelector(
    (state) => state.configuration
  );
  const [subscription, setSubscription] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("0");
  const [selectedPlanProduct, setSelectedPlanProduct] = useState("0");
  const [idSubscription, setIdSubscription] = useState<any>({});
  const [idSubscriptionPlan, setIdSubscriptionPlan] = useState<any>({});
  console.log("idSubscription", idSubscription);
  console.log("idSubscriptionPlan", idSubscriptionPlan);
  useEffect(() => {
    dispatch(obtainApiStripe());
  }, []);

  useEffect(() => {
    if (!subscription) return;
    dispatch(createSubscriptionStripe(subscription));
  }, [subscription]);

  useEffect(() => {
    if (!customerId) return;
    console.log("customerId", customerId);
    const planId = `${idSubscription.income}${idSubscriptionPlan.name}`;
    createSubscription(customerId, planId);
  }, [customerId]);

  const createSubscription = async (customerId: string, planId: string) => {
    const subscription: any = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ plan: planId }],
      trial_period_days: 14,
    });
    const currentFont = selectedPayment === "2" ? "Stripe" : "Paypal";

    const timestamp = subscription.start_date;
    const date = new Date(timestamp * 1000);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

    const data = {
      status: 1,
      payment_gateway: currentFont,
      subscription_gateway: subscription.id,
      start_date: formattedDate,
      id_subscription: idSubscription.id,
      id_subscription_plan: idSubscriptionPlan.id,
    };

    dispatch(createSubscriptionUser(data));
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPayment(event.target.value);
  };

  const handlePlanProduct = (plan: string) => {
    setSelectedPlanProduct(plan);
    setSelectedPayment("1");
  };
  console.log("selectedPlanProduct", selectedPlanProduct);

  const onReturnSelect = (resetSelect: any) => {
    setSelectedPayment(resetSelect);
  };

  return (
    <>
      <SelectSubscriptionsPlans
        selectedPayment={selectedPayment}
        handlePlanProduct={handlePlanProduct}
        subscriptionsPlans={subscriptionsPlans}
        setIdSubscription={setIdSubscription}
        setIdSubscriptionPlan={setIdSubscriptionPlan}
      />
      <SelectFontPay
        selectedPayment={selectedPayment}
        onReturnSelect={onReturnSelect}
        handleChange={handleChange}
      />
      <FontStripePay
        selectedPayment={selectedPayment}
        onReturnSelect={onReturnSelect}
        stripePromise={stripePromise}
        setSubscription={setSubscription}
      />
      {/* <div
        className={`${
          selectedPayment === "2"
            ? "container mt-4 d-block"
            : "container mt-4 d-none"
        } `}
      >
        <div className="row">
          <TitleHelvetica fontSize="35px" className="text-center mt-4 w-100">
            Fuente de pago Paypal
          </TitleHelvetica>
          <ButtonReturnSelect onReturnSelect={onReturnSelect} backStep={1} />
          <div className="col-md-6 offset-md-3 mt-5">
            <Elements stripe={stripePromise}>{<CheckoutForm />}</Elements>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default BillingTab;
