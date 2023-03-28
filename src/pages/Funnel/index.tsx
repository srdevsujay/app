import React, { useState } from "react";
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

const Funnel = () => {
  const [isModalOpen, setModalState] = useState<boolean>(false);
  const toggleModal = () => setModalState(!isModalOpen);
  return (
    <Main>
      <Card height="75vh" borderRadius="16px 16px 0 0">
        <Title fontSize="17px" color="#123249">
          Funnel
        </Title>
        <div className="row">
          <Bar></Bar>
          <div className="col-sm-12">
            <AccordionFunnel />
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
