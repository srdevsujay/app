import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { createSubscription } from "../FormBilling/createSubscriptionForm";
import { PaymentElement } from "@stripe/react-stripe-js";
import {
  TitleHelvetica,
  Title,
} from "../../../../styled-components/Title/index";
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
import MaterialTable from "material-table";
import { Bar } from "../../../Dashboard/styled-components/dashboardStyled";
import { TableStyle } from "../../../../styled-components/Table/index";
import FontPaypalPay from "./FontPaypalPay";

const stripePromise = loadStripe(
  "pk_test_51Kha17DfKIMhwzEG7hdRFjUIO0soTyO2SAbgTLBOCwOcmXkWqa1m39C4IsHg0tyOMeCHozQGLx8DQSA7Epx5cMDG00Lhb4nYoI"
);

// const stripePromise = loadStripe(
//   process.env.REACT_APP_STRIPE_PUBLIC_KEY as any
// );

// const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY as any, {
//   apiVersion: "2022-11-15",
// });

const stripe = new Stripe(
  "sk_test_51Kha17DfKIMhwzEGl6wR1eXgP3DIjDtQBwbu1QguP9tiJUdvxY5hyp8l0Uzthwbn8xqpFptbqwJS40MqZRg71gSz00NYzytTTs",
  {
    apiVersion: "2022-11-15",
  }
);

const BillingTab = () => {
  // const stripe = new Stripe('TU_CLAVE_API_PRIVADA');
  const dispatch = useAppDispatch();
  const { customerId } = useAppSelector((state) => state.configuration);
  const [subscription, setSubscription] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("0");
  const [selectedPlanProduct, setSelectedPlanProduct] = useState("0");
  const [idSubscription, setIdSubscription] = useState<any>({});
  const [idSubscriptionPlan, setIdSubscriptionPlan] = useState<any>({});
  console.log("idSubscription", idSubscription);
  console.log("idSubscriptionPlan", idSubscriptionPlan);
  console.log("customerId---", customerId);

  useEffect(() => {
    dispatch(obtainApiStripe());
  }, []);

  useEffect(() => {
    consultarEstadoUsuarioEnStripe(customerId);
  }, [customerId]);

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
    console.log("subscriptionClientSecret", subscription);

    const timestamp = subscription.start_date;
    const date = new Date(timestamp * 1000);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

    const data = {
      status: subscription.status,
      payment_gateway: currentFont,
      subscription_gateway: subscription.id,
      start_date: formattedDate,
      id_subscription: idSubscription.id,
      id_subscription_plan: idSubscriptionPlan.id,
      customer_id: customerId,
    };

    dispatch(createSubscriptionUser(data));
  };

  const [billingState, setBillingState] = useState({});
  const [currentCreate, setCurrentCreate] = useState<any>();
  const [dataTable, setDataTable] = useState([billingState]);
  const [totalMonth, setTotalMonth] = useState<any>(0);
  const { balance, create, description }: any = billingState;
  console.log("totalMonth", totalMonth);

  useEffect(() => {
    console.log("entra al efect");

    if (!create) return;
    const timestamp = create;
    const date = new Date(timestamp * 1000);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    console.log("formattedDate", formattedDate);

    setCurrentCreate(formattedDate);
  }, [billingState]);

  async function consultarEstadoUsuarioEnStripe(customerId: any) {
    console.log("customerId", customerId);

    try {
      console.log("dfdfdfdfd");

      const customer = await stripe.customers.retrieve(customerId);
      console.log("Estado del usuario:", customer);
      setBillingState(customer);
      // Realiza las operaciones necesarias con la información del usuario en Stripe
    } catch (error) {
      console.error(
        "Error al consultar el estado del usuario en Stripe:",
        error
      );
    }
  }
  console.log("billingState", billingState);

  const handleChange = (event: any) => {
    setSelectedPayment(event);
  };

  const handlePlanProduct = (plan: string) => {
    setSelectedPlanProduct(plan);
    setSelectedPayment("1");
  };
  console.log("selectedPlanProduct", selectedPlanProduct);

  const onReturnSelect = (resetSelect: any) => {
    setSelectedPayment(resetSelect);
  };

  const TablePabbly: any = [
    {
      title: "Fecha Creación",
      field: "currentCreate",
      render: () => (
        <TableStyle className="widthDateLead">
          <Title fontSize="13px" color="" className="font-HelveticaNeueL">
            18-May-2023
          </Title>
        </TableStyle>
      ),
    },
    {
      title: "Email",
      render: () => (
        <div className="widthDateLead">
          <Title fontSize="13px" className="font-HelveticaNeueL">
            m@bluehackmediagroup.com
          </Title>
        </div>
      ),
    },
    // {
    //   title: "Email",
    // },
    {
      title: "Descripción",
      field: `${description}`,
    },
    // {
    //   title: "Enlace",
    //   render: () => (
    //     <div className="widthDateLead">
    //       <span className="font-HelveticaNeueL">{""}</span>
    //     </div>
    //   ),
    // },
    // {
    //   title: "Monto",
    //   render: () => (
    //     <div className="widthDateLead">
    //       <span className="font-HelveticaNeueL">{`${balance}`}</span>
    //     </div>
    //   ),
    // },
    {
      title: "Monto",
      render: () => (
        <div className="widthDateLead">
          <Title fontSize="13px" className="font-HelveticaNeueL">
            0.00
          </Title>
        </div>
      ),
    },
  ];

  return (
    <div className="">
      <div className={customerId ? "d-none" : "row d-block"}>
        <SelectSubscriptionsPlans
          selectedPayment={selectedPayment}
          handlePlanProduct={handlePlanProduct}
          setIdSubscription={setIdSubscription}
          setIdSubscriptionPlan={setIdSubscriptionPlan}
          setTotalMonth={setTotalMonth}
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
        <FontPaypalPay
          selectedPayment={selectedPayment}
          onReturnSelect={onReturnSelect}
          totalMonth={totalMonth}
          idSubscription={idSubscription}
          idSubscriptionPlan={idSubscriptionPlan}
        />
      </div>
      <div className={!customerId ? "d-none" : "row d-block"}>
        <h3 className="title-table-billing font-helvetica zIndex mt-3">
          Historial de pagos
        </h3>
        <Bar></Bar>
        <div className="row">
          <div className="col-sm-6">
            <div className="dataTables_wrapper dt-bootstrap4 no-footer">
              <div className="table-responsive">
                <MaterialTable
                  title=""
                  data={dataTable}
                  columns={TablePabbly}
                  options={{
                    columnsButton: false,
                    search: false,
                    pageSizeOptions: [5, 10, 25, 50, 100],
                    pageSize: 5,
                    headerStyle: { position: "sticky", top: 0 },
                    maxBodyHeight: "45vh",
                  }}
                  localization={{
                    pagination: {
                      labelRowsSelect: "Filas",
                    },
                    body: {
                      emptyDataSourceMessage: "No hay Datos...",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default BillingTab;
