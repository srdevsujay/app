import { TitleHelvetica } from "../../../../styled-components/Title/index";
import ButtonReturnSelect from "./ButtonReturnSelect";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../FormBilling/CheckoutForm";

const FontStripePay = ({
  selectedPayment,
  onReturnSelect,
  stripePromise,
  setSubscription,
}: any) => {
  return (
    <div
      className={`${
        selectedPayment === "2"
          ? "container mt-4 d-block"
          : "container mt-4 d-none"
      } `}
    >
      <div className="row">
        <TitleHelvetica fontSize="35px" className="text-center mt-4 w-100">
          Fuente de pago Stripe
        </TitleHelvetica>
        <ButtonReturnSelect onReturnSelect={onReturnSelect} backStep={"1"} />
        <div className="col-md-6 offset-md-3 mt-5">
          <Elements stripe={stripePromise}>
            <CheckoutForm setSubscription={setSubscription} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default FontStripePay;
