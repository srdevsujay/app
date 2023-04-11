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
import { useAppSelector, useAppDispatch } from "../../hooks/appDispatch";
import { totalFunnel } from "./components/TotalTableFunnel";
import { useForm } from "react-hook-form";
import {
  ButtonsModal,
  ContainerSticky,
} from "../../styled-components/button/index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { obtainApiProduct } from "../../redux/state/slices/tracking/trackingThunk";

const Funnel = () => {
  const dispatch = useAppDispatch();
  const { data: dataFunnel, filters: filterJSON }: any = useAppSelector(
    (state) => state.dashboard.dataFunnel
  );
  const [currentEdit, setCurrentEdit] = useState();
  const [idEditCurrent, setIdEditCurrent] = useState(0);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  useEffect(() => {
    dispatch(obtainApiProduct());
  }, []);

  useEffect(() => {
    if (currentEdit) {
      toggleModal();
    }
  }, [currentEdit]);

  useEffect(() => {
    if (!isModalOpen) {
      setCurrentEdit(null as any);
    }
  }, [isModalOpen]);

  const openModal = () => {
    if (!isModalOpen) {
      setModalOpen(true);
    }
  };

  useEffect(() => {
    if (dataFunnel?.length > 0) {
      const filters = JSON.parse(filterJSON);
      console.log("filterJSON", filters);
      totalFunnel(dataFunnel, filters);
    }
  }, [dataFunnel]);

  const schema = yup.object().shape({
    funnelName: yup.string().required("El nombre del Funnel es requerido"),
    funnelURL: yup.string().required("La URL del Funnel es requerida"),
    stepName: yup.string().required("El nombre del paso es requerido"),
    stepUrl: yup.string().required("La URL del paso es requerido"),
    // email: yup
    //   .string()
    //   .email("El correo electrónico debe ser un correo electrónico válido")
    //   .required("El correo electronico es requerido"),
    // telephone: yup
    //   .number()
    //   .positive("This field must contain a positive number")
    //   .integer("This field should contain an integer")
    //   .min(10)
    //   .required("El numero de telefono es requerido"),
    selectFunnel: yup.string().required(),
    selectProduct: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // useEffect(() => {
  //   if (currentEdit) {
  //     console.log("currentEditLead", currentEdit);
  //     setValue("funnelName", currentEdit.name);
  //     setValue("funnelURL", currentEdit.funnelURL);
  //     setValue("selectFunnel", currentEdit.funnel_id);
  //     // setIdEditLead(currentEdit.id);
  //   }
  // }, [currentEdit, setValue]);

  const onSubmit = (data: any) => {
    console.log(data);
    // if (idEditLead !== 0) {
    //   dispatch(editLead(data, idEditLead));
    //   setCurrentEdit();
    //   setIdEditLead(0);
    // } else {
    //   dispatch(createLead(data));
    // }
    toggleModal();
  };

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
        title={"Crear Funnel"}
        isOpen={isModalOpen}
        onClose={toggleModal}
        width="60%"
        height="543px"
        padding="12px 2.25rem 16px"
        btnClose={1}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <AddFunnelInput register={register} errors={errors} />
          <StepsFunnel register={register} errors={errors} />
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
        </form>
      </Modal>
      <FooterMenu />
    </Main>
  );
};

export default Funnel;
