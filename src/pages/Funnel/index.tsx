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
import {
  ButtonsModal,
  ContainerSticky,
} from "../../styled-components/button/index";

const Funnel = () => {
  const { data: dataFunnel }: any = useAppSelector(
    (state) => state.dashboard.dataFunnel
  );
  const [isModalOpen, setModalState] = useState<boolean>(false);
  const [currentColumnsTotal, setCurrentColumnsTotal] = useState();

  const toggleModal = () => setModalState(!isModalOpen);
  console.log("currentColumnsTotal", currentColumnsTotal);

  useEffect(() => {
    if (dataFunnel?.length > 0) {
      totalFunnel(dataFunnel, currentColumnsTotal);
    }
  }, [dataFunnel, currentColumnsTotal]);

  return (
    <Main>
      <Card height="75vh" borderRadius="16px 16px 0 0">
        <Title fontSize="17px" color="#123249">
          Funnel
        </Title>
        <div className="row">
          <Bar></Bar>
          <div className="col-sm-12">
            <AccordionFunnel setCurrentColumnsTotal={setCurrentColumnsTotal} />
          </div>
        </div>
      </Card>
      <NewFunnel>
        <ButtonFunnel onClick={toggleModal}>+</ButtonFunnel>
      </NewFunnel>
      <Modal
        title={"Crear Funnel"}
        isOpen={isModalOpen}
        onClose={toggleModal}
        width="60%"
        height="543px"
        padding="12px 2.25rem 16px"
        btnClose={1}
      >
        <AddFunnelInput />
        <StepsFunnel />
        <AdAccount />
        <ContainerSticky className="row">
          <Bar className="mb-3"></Bar>
          <div className="form-group col-sm-6">
            <ButtonsModal className="btn btn-close" onClick={toggleModal}>
              Cerrar
            </ButtonsModal>
          </div>
          <div className="form-group col-sm-6">
            <ButtonsModal className="btn btn-add" type="submit">
              {/* {idEditBooking !== 0 ? "Editar" : "Guardar"} */}
              Guardar
            </ButtonsModal>
          </div>
        </ContainerSticky>
      </Modal>
      <FooterMenu />
    </Main>
  );
};

export default Funnel;
