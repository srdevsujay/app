import React, { useState, useEffect } from "react";
import { Main, Card } from "../../styled-components/main/index";
import { Title, Bar } from "../Dashboard/styled-components/dashboardStyled";
import FooterMenu from "../../components/Footer/index";
import AccordionFunnel from "./components/AccordionFunnel/index";
import Modal from "../../components/modal/Modal.component";
import AddFunnelInput from "./components/AddFunnellnput/index";
import StepsFunnel from "./components/Steps/index";
import AdAccount from "./components/AdAccount/index";
import "../../styled-components/Table/style.css";
import { NewFunnel, ButtonFunnel } from "./styled-components/funnel-styled";
import { useAppSelector } from "../../hooks/appDispatch";
import { totalFunnel } from "./components/TotalTableFunnel";

const Funnel = () => {
  const [isModalOpen, setModalState] = useState<boolean>(false);
  const toggleModal = () => setModalState(!isModalOpen);
  const { data: dataFunnel }: any = useAppSelector(
    (state) => state.dashboard.dataFunnel
  );
  const [currentToggleTotal, setCurrentToggleTotal] = useState();

  useEffect(() => {
    if (dataFunnel?.length > 0 || currentToggleTotal !== undefined) {
      totalFunnel(dataFunnel, currentToggleTotal);
    }
  }, [dataFunnel, currentToggleTotal]);

  return (
    <Main>
      <Card height="75vh" borderRadius="16px 16px 0 0">
        <Title fontSize="17px" color="#123249">
          Funnel
        </Title>
        <div className="row">
          <Bar></Bar>
          <div className="col-sm-12">
            <AccordionFunnel setCurrentToggleTotal={setCurrentToggleTotal} />
          </div>
        </div>
      </Card>
      <NewFunnel>
        <ButtonFunnel onClick={toggleModal}>+</ButtonFunnel>
      </NewFunnel>
      <Modal
        title={"Agregar Funnel"}
        isOpen={isModalOpen}
        onClose={toggleModal}
        width="55vw"
        padding="50px"
        btnClose={1}
      >
        <AddFunnelInput />
        <StepsFunnel />
        <AdAccount />
      </Modal>
      <FooterMenu />
    </Main>
  );
};

export default Funnel;
