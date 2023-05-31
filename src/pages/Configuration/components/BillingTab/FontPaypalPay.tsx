import {
  PayPalScriptProvider,
  PayPalButtons,
  // usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { Title } from "../../../../styled-components/Title/index";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ButtonReturnSelect from "./ButtonReturnSelect";
import { Bar } from "../../../Dashboard/styled-components/dashboardStyled";
import { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { PayPalButton } from "react-paypal-button-v2";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import { createSubscriptionUser } from "../../../../redux/state/slices/configuration/configurationThunk";
import ButtonPaypalCreate from "./ButtonPaypalCreate";

const FontPaypalPay = ({
  selectedPayment,
  onReturnSelect,
  totalMonth,
  idSubscription,
  idSubscriptionPlan,
}: any) => {
  // const [{ isPending }] = usePayPalScriptReducer();
  // console.log("isPending", isPending);
  const dispatch = useAppDispatch();
  const { customerId } = useAppSelector((state) => state.configuration);
  const [plans, setPlans] = useState([]);
  const [idPaypal, setIdPaypal] = useState(0);
  const [idPlanPaypal, setIdPlanPaypal] = useState("");
  console.log(
    "process.env.REACT_APP_PAYPAL_MODE",
    process.env.REACT_APP_PAYPAL_MODE
  );
  const hadlePlansPaypal = (accessToken: string) => {
    console.log("entra AccesToken");
    const fetchPlans = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PAYPAL_MODE}/v1/billing/plans`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("responsePlans", response);
        setPlans(response.data.plans);
      } catch (error) {
        console.error("Error al obtener los planes de PayPal", error);
      }
    };

    fetchPlans();
  };

  useEffect(() => {
    if (selectedPayment !== "3") return;
    obtainAccessToken();
  }, [selectedPayment]);

  const getAccessToken = async () => {
    const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;
    const secret = process.env.REACT_APP_PAYPAL_SECRET_ID;

    const authString = `${clientId}:${secret}`;
    const encodedAuthString = Buffer.from(authString).toString("base64");

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded;charset=ISO-8859-1",
      Authorization: `Basic ${encodedAuthString}`,
    };

    const data = "grant_type=client_credentials";

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PAYPAL_MODE}/v1/oauth2/token`,
        data,
        { headers }
      );
      console.log("responseToken", response);

      const accessToken = response.data.access_token;
      console.log("Token de acceso de PayPal:", accessToken);
      return accessToken;
    } catch (error) {
      console.error("Error al obtener el token de acceso de PayPal", error);
      return null;
    }
  };

  // Llama a la función para obtener el token de acceso dentro de una función async
  const obtainAccessToken = async () => {
    const accessToken = await getAccessToken();
    hadlePlansPaypal(accessToken);
  };

  useEffect(() => {
    if (plans.length === 0) return;
    const planId = `${idSubscription.income}${idSubscriptionPlan.name}`;
    console.log("planId", planId);

    const currentPlan: any = plans.find(
      (elem: any) => elem.name === planId && elem.status === "ACTIVE"
    );
    console.log("plans--", currentPlan);
    setIdPlanPaypal(currentPlan?.id);
  }, [plans]);

  useEffect(() => {
    if (!idPaypal) return;
    const currentFont = selectedPayment === "2" ? "Stripe" : "Paypal";
    const timestamp: any = new Date();
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

    const data = {
      status: "APPROVAL_PENDING",
      payment_gateway: currentFont,
      subscription_gateway: idPaypal,
      start_date: formattedDate,
      id_subscription: idSubscription.id,
      id_subscription_plan: idSubscriptionPlan.id,
      customer_id: customerId,
    };
    console.log("dataStatusPaypal", data);

    dispatch(createSubscriptionUser(data));
  }, [idPaypal]);

  console.log("idPlanPaypal", idPlanPaypal);

  // const handleSubsCreate = (actions: any) => {
  //   console.log("idPlanPaypal---", idPlanPaypal);
  // };

  const handleCreateSubscription = (data: any, actions: any) => {
    return actions.subscription.create({
      plan_id: idPlanPaypal,
      auto_renewal: true,
    });
  };

  const handleApprove = (data: any, actions: any) => {
    console.log("created subscription:", data.orderID, data.subscriptionID);
    setIdPaypal(data.subscriptionID);
  };

  return (
    <div
      className={`${
        selectedPayment === "3"
          ? "container mt-4 d-block"
          : "container mt-4 d-none"
      } `}
    >
      <div className="d-flex justify-content-center w-100 mt-2">
        <Title fontSize="35px" color="#123249" className="text-center w-100">
          Fuente de pago Paypal
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
        <PayPalButton
          createSubscription={handleCreateSubscription}
          onApprove={handleApprove}
          options={{
            clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
            vault: true,
          }}
          onButtonReady={() => console.log("Button is ready")}
        />
        {/* {idPlanPaypal === "" ? (
          ""
        ) : (
          <ButtonPaypalCreate
            idPlanPaypal={idPlanPaypal}
            setIdPaypal={setIdPaypal}
          />
        )} */}
        {/* <PayPalButton
          createSubscription={(data: any, actions: any) => {
            handleSubsCreate(actions);
          }}
          onApprove={(data: any, actions: any) => {
            setIdPaypal(data.subscriptionID);
          }}
          options={{
            clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
            vault: true,
          }}
        /> */}
      </div>
    </div>
  );
};

export default FontPaypalPay;

{
  /* <div id="paypal-button-container-P-9PA33938Y1580135UMR2PE2A"></div>
<script src="https://www.paypal.com/sdk/js?client-id=AVMPc7CwzosKVzOr5MkZ9UHwo7Xa0k-x5BTQ10wIjXywpriAwV3A7SJ-LFD_8Pi4HciXnLl9CFlxjhMr&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
<script>
  paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'gold',
          layout: 'horizontal',
          label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          
          plan_id: 'P-9PA33938Y1580135UMR2PE2A'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID); // You can add optional success message for the subscriber here
      }
  }).render('#paypal-button-container-P-9PA33938Y1580135UMR2PE2A'); // Renders the PayPal button
</script> */
}
