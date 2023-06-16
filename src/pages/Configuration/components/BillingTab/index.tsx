import { useContext, useEffect, useState } from "react";
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
import {
  createSubscriptionUser,
  obtainUserTotalSaleMonth,
} from "../../../../redux/state/slices/configuration/configurationThunk";
import MaterialTable from "material-table";
import { Bar } from "../../../Dashboard/styled-components/dashboardStyled";
import { TableStyle } from "../../../../styled-components/Table/index";
import FontPaypalPay from "./FontPaypalPay";
import "../../styled-components/style.css";
import { ButtonsProfile } from "../../../../styled-components/button/index";
import { FormatNumber } from "../../../../utilities/FormatNumber";
import {
  obtainCancelSubscription,
  updateSubscriptionStripe,
} from "../../../../redux/state/slices/configuration/configurationThunk";
import axios from "axios";
import { Buffer } from "buffer";
import EditCardFormStripe from "./EditCardFormStripe";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import visa from "../../../../assets/images/visa.svg";
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";
import { IngresosRastreados } from "../../styled-components/Plataform/index";

// const stripePromise = loadStripe(
//   "pk_test_51Kha17DfKIMhwzEG7hdRFjUIO0soTyO2SAbgTLBOCwOcmXkWqa1m39C4IsHg0tyOMeCHozQGLx8DQSA7Epx5cMDG00Lhb4nYoI"
// );

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_KEY as any
);

const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY as any, {
  apiVersion: "2022-11-15",
});

// const stripe = new Stripe(
//   "sk_test_51Kha17DfKIMhwzEGl6wR1eXgP3DIjDtQBwbu1QguP9tiJUdvxY5hyp8l0Uzthwbn8xqpFptbqwJS40MqZRg71gSz00NYzytTTs",
//   {
//     apiVersion: "2022-11-15",
//   }
// );

const BillingTab = () => {
  // const stripe = new Stripe('TU_CLAVE_API_PRIVADA');
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.user.user);
  const { customerId } = useAppSelector((state) => state.configuration);
  const { status, subscription_plan, subscription_user, payment_gateway } =
    useAppSelector((state) => state.configuration.subscriptionUser);
  const subscriptionUser = useAppSelector(
    (state) => state.configuration.subscriptionUser
  );
  const { amount } = useAppSelector((state) => state.configuration.amount);
  console.log("amount", amount);
  console.log("subscription_plan", subscription_plan);
  console.log("subscription_user", subscription_user);
  const [subscription, setSubscription] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("0");
  const [selectedPlanProduct, setSelectedPlanProduct] = useState("0");
  const [idSubscription, setIdSubscription] = useState<any>({});
  const [idSubscriptionPlan, setIdSubscriptionPlan] = useState<any>({});
  const [transactionDetails, setTransactionDetails] = useState([]);
  console.log("idSubscription", idSubscription);
  console.log("idSubscriptionPlan", idSubscriptionPlan);
  console.log("customerId---", customerId);
  console.log("transactionDetails---", transactionDetails);

  useEffect(() => {
    dispatch(obtainApiStripe());
  }, []);

  useEffect(() => {
    consultarEstadoUsuarioEnStripe(customerId);
    dispatch(obtainUserTotalSaleMonth());
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
            29-May-2023
          </Title>
        </TableStyle>
      ),
    },
    {
      title: "Email",
      render: () => (
        <div className="widthDateLead">
          <Title fontSize="13px" className="font-HelveticaNeueL">
            {email}
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

  const cancelSubs = () => {
    dispatch(obtainCancelSubscription());
  };

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    if (selectedPayment !== "3") return;
    obtainAccessToken();
  }, [selectedPayment]);

  useEffect(() => {
    if (payment_gateway === "Stripe") {
      obtainAccessToken();
    }
  }, [payment_gateway]);

  // Llama a la función para obtener el token de acceso dentro de una función async
  const obtainAccessToken = async () => {
    const accessToken = await getAccessToken();
    hadlePlansPaypal(accessToken);
  };

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

    const fetchPayPalTransactions = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PAYPAL_MODE}/v1/reporting/transactions?fields=transaction_info,payer_info,shipping_info,auction_info,cart_info,incentive_info,store_info&start_date=2023-04-30T23:59:59.999Z&end_date=2023-05-30T00:00:00.000Z`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log("responsePlans", response.data.transaction_details);
        setTransactionDetails(response.data.transaction_details);
      } catch (error) {
        console.error("Error retrieving PayPal transactions:", error);
      }
    };

    fetchPlans();
    fetchPayPalTransactions();
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const paymentIntents = await stripe.paymentIntents.list();
        // setTransactions(paymentIntents.data);
        console.log("responsetransactionsStripe", paymentIntents); // Puedes almacenar los datos en un estado o utilizarlos de otra manera
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  const [toggleEditSubscription, setToggleEditSubscription] = useState(0);
  console.log("status--", status);
  console.log("subscriptionUser--", subscriptionUser);
  console.log("toggleEditSubscription--", toggleEditSubscription);

  useEffect(() => {
    if (Object.keys(subscriptionUser).length !== 0) {
      console.log("entra al length");
      setSelectedPayment("5");
    }
  }, [subscriptionUser]);

  const hanldeUpdateSubscriptionStripe = () => {
    setToggleEditSubscription(0);
    const nameSubs = `${idSubscription.income}${idSubscriptionPlan.name}`;
    const data = {
      plan_name: nameSubs,
      id_subscription: idSubscription.id,
      id_subscription_plan: idSubscriptionPlan.id,
    };
    dispatch(updateSubscriptionStripe(data));
  };

  const [editCardStripe, setEditCardStripe] = useState(false);

  const toggleEditCardStripe = () => {
    setEditCardStripe(!editCardStripe);
  };

  const { theme } = useContext(ThemeContext);

  const tableStyles = {
    backgroundColor: theme.background,
    color: theme.text,
    // Agrega más estilos según sea necesario
  };

  return (
    <div className="p-4">
      <div className="row">
        {toggleEditSubscription === 1 || selectedPayment === "0" ? (
          <SelectSubscriptionsPlans
            selectedPayment={selectedPayment}
            handlePlanProduct={handlePlanProduct}
            setIdSubscription={setIdSubscription}
            setIdSubscriptionPlan={setIdSubscriptionPlan}
            setTotalMonth={setTotalMonth}
            toggleEditSubscription={toggleEditSubscription}
            hanldeUpdateSubscriptionStripe={hanldeUpdateSubscriptionStripe}
            setToggleEditSubscription={setToggleEditSubscription}
          />
        ) : (
          ""
        )}
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
          plans={plans}
        />
      </div>
      <div
        className={
          status === "APPROVAL_PENDING" ||
          status === "APPROVED" ||
          status === "ACTIVE" ||
          status === "canceled" ||
          status === "COMPLETED" ||
          status === "trialing"
            ? "row d-block"
            : "d-none"
        }
      >
        <IngresosRastreados className="row" theme={theme}>
          <div className="col-sm-8">
            <Title fontSize="20px">
              Ingreso rastreado del mes en curso{" "}
              {amount ? <FormatNumber number={amount} /> : 0}
            </Title>
            <br />
            {/* <span>$3490</span>
            <span> anuales</span> */}
          </div>
          <div className="col-sm-4">
            <span>Nombre del plan: {subscription_plan?.name}</span>
            <br />
            <span>
              Meta: <FormatNumber number={subscription_user?.income} />
            </span>
          </div>
        </IngresosRastreados>
        {payment_gateway === "Stripe" && (
          <div className="row mt-4 mb-5">
            <div className="col-sm-5">
              <Title
                textDecorationLine="underline"
                cursor="pointer"
                onClick={toggleEditCardStripe}
              >
                {editCardStripe === true ? "-" : "+"} Editar Tarjeta
              </Title>
              <div className="mt-4">
                {editCardStripe === true && (
                  <Elements stripe={stripePromise}>
                    <div>
                      <Title fontSize="20px">Editar Tarjeta de Crédito</Title>
                      <Bar width="19vw"></Bar>
                      <EditCardFormStripe customerId={customerId} />
                    </div>
                  </Elements>
                )}
              </div>
            </div>
            {/* {editCardStripe === true && (
              <div className="col-sm-7 d-flex justify-content-end align-items-center">
                <div
                  style={{
                    width: "400px",
                    height: "118px",
                    background: "rgba(255, 255, 255, 0.3)",
                    border: "1px solid #FFFFFF",
                    boxShadow: "30px 70px 120px rgba(27, 49, 66, 0.13)",
                    borderRadius: "50px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <label>Tarjeta Principal</label>
                    <img src={visa} height="12" className="" />
                  </div>
                  <div>
                    <label>**** *** **** 2007</label>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        )}
        <h3 className="title-table-billing font-helvetica zIndex mt-3">
          Historial de pagos
        </h3>
        <Bar></Bar>
        <div className="row">
          <div className="col-sm-8">
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
                    // headerStyle: { position: "sticky", top: 0 },
                    maxBodyHeight: "45vh",
                    headerStyle: {
                      backgroundColor: theme.background,
                      color: theme.text,
                      position: "sticky",
                      top: 0,
                    },
                  }}
                  localization={{
                    pagination: {
                      labelRowsSelect: "Filas",
                    },
                    body: {
                      emptyDataSourceMessage: "No hay Datos...",
                    },
                  }}
                  style={tableStyles}
                />
              </div>
            </div>
          </div>
          <div className="offset-1 col-sm-3 d-flex flex-column mt-5">
            <ButtonsProfile
              className="btn w-100 mt-3"
              onClick={() => setToggleEditSubscription(1)}
            >
              Actualizar Suscripción
            </ButtonsProfile>
            {status === "SUSPENDED" ||
              status === "EXPIRED" ||
              status === "canceled" ||
              (status === "COMPLETED" && (
                <ButtonsProfile className="btn w-100 mt-3" onClick={cancelSubs}>
                  Cancelar Suscripción
                </ButtonsProfile>
              ))}
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
