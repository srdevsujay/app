import React, { useContext, useEffect, useState } from "react";
import {
  TitleHelvetica,
  Title,
} from "../../../../styled-components/Title/index";
import { Select } from "../../../../styled-components/select/index";
import _ from "lodash";
import { ContainerBilling } from "../../styled-components/Plataform/index";
import { Bar } from "../../../Dashboard/styled-components/dashboardStyled";
import { ButtonsProfile } from "../../../../styled-components/button/index";
import { FormatNumber } from "../../../../utilities/FormatNumber";
import { FormatNumberSum } from "../../../../utilities/FormatNumberSum";
import "../../styled-components/style.css";
import { useAppSelector } from "../../../../hooks/appDispatch";
import { ModalClose } from "../../../../styled-components/modal/index";
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";

const SelectSubscriptionsPlans = ({
  selectedPayment,
  handlePlanProduct,
  setIdSubscription,
  setIdSubscriptionPlan,
  setTotalMonth,
  toggleEditSubscription,
  hanldeUpdateSubscriptionStripe,
  setToggleEditSubscription,
}: any) => {
  const { subscriptionsPlans } = useAppSelector((state) => state.configuration);
  const { plans, subscriptions } = subscriptionsPlans;
  console.log("subscriptionsPlans", subscriptionsPlans);

  const [dataPlans, setDataPlans] = useState([]);
  const [dataSubscriptions, setDataSubscriptions] = useState([]);
  console.log("dataPlans", dataPlans);

  useEffect(() => {
    if (!plans) return;
    const plansAddSelect: any = [].concat(plans);
    plansAddSelect.push({ id: 0, name: "Seleccione", percentage: 0 });
    const currentPlans: any = _.orderBy(plansAddSelect, "id", "asc");
    console.log("currentPlans", currentPlans);

    const subsAddSelect: any = [].concat(subscriptions);
    subsAddSelect.push({
      id: 0,
      income: "Selecciona",
      name: "Roalytics 1",
      price: 0,
    });
    const currentSubs: any = _.orderBy(subsAddSelect, "id", "asc");

    setDataPlans(currentPlans);
    setDataSubscriptions(currentSubs);
  }, [plans]);

  const [selectedPlan, setSelectedPlan] = useState("0");
  const [selectedSubs, setSelectedSubs] = useState("0");
  const [currentPlan, setCurrentPlan] = useState({});
  const [currentSub, setCurrentSub] = useState({});
  const [totalSub, setTotalSub] = useState(0);

  const { percentage, id: idPlan, name }: any = currentPlan;
  const { income, price, id: idSub }: any = currentSub;

  const handlePlan = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const valuePlan = event.target.value;
    console.log("valuePlan", valuePlan);

    const dataPlan: any = dataPlans.filter(
      (data: any) => data.name === valuePlan
    );
    console.log("dataPlan", dataPlan);
    setSelectedPlan(valuePlan);
    setCurrentPlan(dataPlan[0]);
  };

  useEffect(() => {
    if (!currentPlan) return;
    const data = {
      id: idPlan,
      name,
    };
    setIdSubscriptionPlan(data);
  }, [currentPlan]);

  useEffect(() => {
    if (!currentSub) return;
    const data = {
      id: idSub,
      income,
    };
    setIdSubscription(data);
  }, [currentSub]);

  const handleSubs = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const valueSub = event.target.value;
    const dataSub = dataSubscriptions.filter(
      (data: any) => data.income === parseInt(valueSub)
    );
    setSelectedSubs(valueSub);
    setCurrentSub(dataSub[0]);
  };

  useEffect(() => {
    if (selectedPlan === "0" || selectedSubs === "0") return;
    // handlePlanProduct(`${selectedSubs}${selectedPlan}`);
    const total = price - (percentage / 100) * price;
    setTotalSub(total);
    setTotalMonth(total.toFixed(2));
  }, [selectedPlan, selectedSubs]);

  const handleNextStep = () => {
    if (selectedPlan === "0" || selectedSubs === "0") return;
    handlePlanProduct(`${selectedSubs}${selectedPlan}`);
  };

  console.log("selectedPayment", selectedPayment);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* {toggleEditSubscription === 1 || selectedPayment === "0" ? ( */}
      <div className="container mb-3 mt-4">
        {toggleEditSubscription === 1 && (
          <ModalClose
            top="121px"
            right="35px"
            onClick={() => setToggleEditSubscription(0)}
          >
            x
          </ModalClose>
        )}
        <div className="d-flex justify-content-center w-100 mt-2">
          <Title fontSize="35px" color="#123249" className="text-center w-100">
            Objetivo de facturación
          </Title>
        </div>
        <div className="d-flex justify-content-center w-100 mt-2">
          <Bar width="30vw"></Bar>
        </div>
        <div className="row d-flex mt-5">
          <div className="col-sm-6">
            <div className="row col-sm-12">
              <TitleHelvetica fontSize="16px" className="mt-4 w-100">
                Seleccionar meta en ventas mensuales
              </TitleHelvetica>
              <Select
                value={selectedSubs}
                onChange={handleSubs}
                className="container w-100 d-flex justify-content-center"
                theme={theme}
              >
                {dataSubscriptions?.map((data: any) => (
                  <option key={data?.id} value={data?.income}>
                    {data?.income === "Selecciona" ? (
                      "Seleccione"
                    ) : (
                      <FormatNumber number={data?.income} />
                    )}
                  </option>
                ))}
              </Select>
            </div>
            <div className="row col-sm-12">
              <TitleHelvetica fontSize="16px" className="mt-4 w-100">
                Seleccionar plan de permanencia
              </TitleHelvetica>
              <Select
                value={selectedPlan}
                onChange={handlePlan}
                disabled={selectedSubs === "0" ? true : false}
                className={
                  selectedSubs === "0"
                    ? "cursor-noDrop container w-100 d-flex justify-content-center"
                    : "container w-100 d-flex justify-content-center"
                }
                theme={theme}
              >
                {dataPlans?.map(({ id, name, percentage }: any) => (
                  <option key={id} value={name}>
                    {name === "Seleccione" ? (
                      "Seleccione"
                    ) : (
                      <FormatNumberSum
                        price={price}
                        percentage={percentage}
                        name={name}
                      />
                    )}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <div className="col-sm-6 d-flex justify-content-end">
            <div className="row">
              <ContainerBilling className="container" theme={theme}>
                <h3
                  style={{
                    fontSize: "16px",
                    fontFamily: "Helvetica-NeueL-Title",
                    marginTop: "10px",
                  }}
                >
                  Suscripción
                </h3>
                <Bar style={{ width: "100%" }}></Bar>
                <div className="d-flex mt-5 justify-content-between">
                  <div>
                    <span
                      className="d-flex"
                      style={{ fontFamily: "Helvetica-NeueL-Title" }}
                    >
                      Plan:{" "}
                      <p
                        style={{
                          color: "#8f8f8f",
                          fontFamily: "Helvetica-NeueL",
                          fontSize: "15px",
                          marginLeft: "11px",
                          marginBottom: "5px",
                        }}
                      >
                        {selectedPlan}
                      </p>
                    </span>
                    <span
                      className="d-flex"
                      style={{ fontFamily: "Helvetica-NeueL-Title" }}
                    >
                      Meta:{" "}
                      <p
                        style={{
                          color: "#8f8f8f",
                          fontFamily: "Helvetica-NeueL",
                          fontSize: "15px",
                          marginLeft: "5px",
                        }}
                      >
                        <FormatNumber number={selectedSubs} />
                      </p>
                    </span>
                  </div>
                  <div className="d-flex">
                    <h1
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        flexDirection: "column",
                        fontSize: "15px",
                        fontFamily: "Helvetica-NeueL-Title",
                        marginBottom: "15px",
                      }}
                    >
                      {totalSub.toFixed(2)} US$ / mes
                    </h1>
                  </div>
                </div>
              </ContainerBilling>
            </div>
          </div>
        </div>
        <div className="row mt-3 justify-content-end">
          <div className="form-group col-sm-2 pr-0">
            {toggleEditSubscription === 1 ? (
              <ButtonsProfile
                className="btn w-100"
                onClick={hanldeUpdateSubscriptionStripe}
              >
                Actualizar
              </ButtonsProfile>
            ) : (
              <ButtonsProfile className="btn w-100" onClick={handleNextStep}>
                Siguiente Paso
              </ButtonsProfile>
            )}
          </div>
        </div>
      </div>
      {/* ) : (
        ""
      )} */}
    </>
  );
};

export default SelectSubscriptionsPlans;
