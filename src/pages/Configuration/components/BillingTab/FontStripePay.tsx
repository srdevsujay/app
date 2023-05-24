import { Title } from "../../../../styled-components/Title/index";
import ButtonReturnSelect from "./ButtonReturnSelect";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../FormBilling/CheckoutForm";
import { Bar } from "../../../Dashboard/styled-components/dashboardStyled";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

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
      <div className="d-flex justify-content-center w-100 mt-2">
        <Title fontSize="35px" color="#123249" className="text-center w-100">
          Fuente de pago Stripe
        </Title>
        <Tooltip title="Volver al metodo de pago">
          <IconButton className="return-select">
            <ButtonReturnSelect
              onReturnSelect={onReturnSelect}
              backStep={"1"}
            />
          </IconButton>
        </Tooltip>
      </div>
      <div className="d-flex justify-content-center w-100 mt-2">
        <Bar width="28vw"></Bar>
      </div>
      <div className="col-md-6 offset-md-3 mt-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm setSubscription={setSubscription} />
        </Elements>
      </div>
    </div>
  );
};

export default FontStripePay;
