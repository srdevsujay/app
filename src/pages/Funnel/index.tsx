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
import { FunnelStep } from "../Dashboard/models/steps.model";
import { AdAccountType } from "../Dashboard/models/adAccount.model";
import { createFunnel } from "../../redux/state/slices/dashboard/dashboardThunk";

const Funnel = () => {
  const dispatch = useAppDispatch();
  const { data: dataFunnel, filters: filterJSON }: any = useAppSelector(
    (state) => state.dashboard.dataFunnel
  );
  const { id: user_funel } = useAppSelector((state) => state.user.user);

  const [currentEdit, setCurrentEdit] = useState();
  const [idEditCurrent, setIdEditCurrent] = useState(0);
  const step1: FunnelStep = {
    id: 1,
    step_name: "",
    step_url: "",
    step_description: "",
  };
  const [currentSteps, setCurrentSteps] = useState([step1]);
  const adAccounts1: AdAccountType = {
    id: 0,
    trafficSource: "1",
    connectionType: "1",
    adAccountName: "",
    adAccountIdentification: "",
  };
  const [adAccounts, setAdAccounts] = useState([adAccounts1]);
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
    funnel_name: yup.string().required("El nombre del Funnel es requerido"),
    funnel_url: yup.string().required("La URL del Funnel es requerida"),
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
    funnel_status: yup.string().required(),
    product_id: yup.string().required(),
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
  //     setValue("funnel_name", currentEdit.name);
  //     setValue("funnel_url", currentEdit.funnel_url);
  //     setValue("funnel_status", currentEdit.funnel_id);
  //     // setIdEditLead(currentEdit.id);
  //   }
  // }, [currentEdit, setValue]);

  const onSubmit = (data: any) => {
    console.log(data);
    const campaings = adAccounts.map((accounts) => {
      return [
        {
          campaing_plataform: accounts.trafficSource,
          campaing_type: accounts.connectionType,
          campaing_name: accounts.adAccountName,
          campaing_identify: accounts.adAccountIdentification,
          campaing_status: 1,
          campaing_budget: 0,
          id: 1,
        },
      ];
    });
    console.log("campaings.", campaings[0]);
    const steps = currentSteps;
    const form: any = {
      funnel_name: data.funnel_name,
      type_dashboard: parseInt(data.funnel_status),
      funnel_status: 1,
      funnel_url: data.funnel_url,
      product_id: parseInt(data.product_id),
      campaings: campaings[0],
      steps,
      user_funel,
      id: null,
    };
    console.log("formDataFunnel", form);
    // if (idEditLead !== 0) {
    //   dispatch(editLead(data, idEditLead));
    //   setCurrentEdit();
    //   setIdEditLead(0);
    // } else {
    dispatch(createFunnel(form));
    // }
    toggleModal();
  };

  console.log("currentSteps", currentSteps);
  console.log("adAccounts", adAccounts);

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
          <StepsFunnel
            currentSteps={currentSteps}
            setCurrentSteps={setCurrentSteps}
          />
          <AdAccount adAccounts={adAccounts} setAdAccounts={setAdAccounts} />
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
