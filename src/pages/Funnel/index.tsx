import React, { useState, useEffect, useContext } from "react";
import { Main, Card } from "../../styled-components/main/index";
import { Bar } from "../Dashboard/styled-components/dashboardStyled";
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
import {
  createFunnel,
  editFunnel,
} from "../../redux/state/slices/dashboard/dashboardThunk";
import { Title } from "../../styled-components/Title/index";
import { ThemeContext } from "../../utilities/theme/ThemeContext";
import { IntegrationAlert } from "../../components/alerts/IntegrationAlert";
import { useNavigate } from "react-router-dom";

const Funnel = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: dataFunnel, filters: filterJSON }: any = useAppSelector(
    (state) => state.dashboard.dataFunnel
  );
  const { id: user_funel } = useAppSelector((state) => state.user.user);
  const { toggleSlider, tokenFacebookFunnel, tokenGoogleFunnel } =
    useAppSelector((state) => state.dashboard);

  const [currentEdit, setCurrentEdit] = useState(0);
  const [idEditCurrent, setIdEditCurrent] = useState(0);
  const step1: FunnelStep = {
    id: 0,
    step_name: "",
    step_url: "",
    step_description: "",
  };
  const [currentSteps, setCurrentSteps] = useState<FunnelStep[]>([]);
  const adAccounts1: AdAccountType = {
    id: 0,
    campaing_plataform: "1",
    campaing_type: "1",
    campaing_name: "",
    campaing_identify: "",
  };
  // id: campaign.id,
  //     trafficSource: campaign.campaing_plataform,
  //     connectionType: campaign.campaing_type,
  //     adAccountName: campaign.campaing_name,
  //     adAccountIdentification: campaign.campaing_identify,
  const [adAccounts, setAdAccounts] = useState<AdAccountType[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [currentDataEditFunnel, setCurrentDataEditFunnel] = useState<any>();
  const [showLodash, setShowLodash] = useState([]);
  const [title, setTitle] = useState("");

  const toggleModal = () => setModalOpen(!isModalOpen);

  useEffect(() => {
    dispatch(obtainApiProduct());
  }, []);

  // useEffect(() => {
  //   if (currentEdit) {
  //     toggleModal();
  //   }
  // }, [currentEdit]);

  useEffect(() => {
    if (!isModalOpen) {
      setCurrentEdit(0);
    }
  }, [isModalOpen]);

  const openModal = () => {
    if (!isModalOpen) {
      setModalOpen(true);
    }
  };
  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);
  // Total que se agrega con las clases de la Table
  // useEffect(() => {
  //   if (showLodash?.length > 0) {
  //     const filters = JSON.parse(filterJSON);
  //     totalFunnel(dataFunnel, filters, themeState);
  //     console.log("entra a totalFunnel");
  //     console.log("dataFunnelTotal", dataFunnel);
  //     console.log("showLodashTotal", showLodash);
  //   }
  // }, [dataFunnel, showLodash, themeState]);

  const schema = yup.object().shape({
    funnel_name: yup.string().required("El nombre del Funnel es requerido"),
    funnel_url: yup.string().required("La URL del Funnel es requerida"),
    funnel_status: yup.string().required("El tipo del Funnel es requerida"),
    product_id: yup.string().required("El producto es requerida"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // useEffect(() => {
  //   if (currentEdit) {
  //     console.log("currentEditLead", currentEdit);
  //     setValue("funnel_name", currentEdit.funnel_name);
  //     setValue("funnel_url", currentEdit.funnel_url);
  //     // setIdEditLead(currentEdit.id);
  //   }
  // }, [currentEdit, setValue]);

  const onSubmit = (data: any) => {
    const steps = currentSteps;
    const form: any = {
      funnel_name: data.funnel_name,
      type_dashboard: parseInt(data.funnel_status),
      funnel_status: 1,
      funnel_url: data.funnel_url,
      product_id: parseInt(data.product_id),
      user_funel,
      id: null,
    };

    if (currentEdit !== 0) {
      form.steps = currentSteps.map((accounts, i) => {
        const sumId = 1 + i;
        return {
          step_description: "",
          step_name: accounts.step_name,
          step_url: accounts.step_url,
          id: sumId,
          funnel_id: currentEdit,
        };
      });
      form.campaings = adAccounts.map((accounts, i) => {
        const sumId = 1 + i;
        return {
          campaing_plataform: accounts.campaing_plataform,
          campaing_type: parseInt(accounts.campaing_type),
          campaing_name: accounts.campaing_name,
          campaing_identify: accounts.campaing_identify,
          campaing_status: 1,
          campaing_budget: 0,
          id: sumId,
          funnel_id: currentEdit,
        };
      });
      form.id = currentEdit;
      dispatch(editFunnel(form, user_funel));
      setCurrentEdit(0);
      // setIdEditLead(0);
    } else {
      form.steps = currentSteps.map((accounts, i) => {
        const sumId: any = 1 + i;
        return {
          step_description: "",
          step_name: accounts.step_name,
          step_url: accounts.step_url,
          id: sumId,
        };
      });
      form.campaings = adAccounts.map((accounts, i) => {
        const sumId: any = 0 + i;
        return {
          campaing_plataform: accounts.campaing_plataform,
          campaing_type: accounts.campaing_type,
          campaing_name: accounts.campaing_name,
          campaing_identify: accounts.campaing_identify,
          campaing_status: 1,
          campaing_budget: 0,
          id: sumId,
          // funnel_id: currentEdit,
        };
      });
      dispatch(createFunnel(form, user_funel));
    }
    toggleModal();
  };

  useEffect(() => {
    if (!isModalOpen) return;
    reset();
    setCurrentDataEditFunnel("");
  }, [isModalOpen]);

  const obtainFunnelEdit = (editDataTracking: any) => {
    setCurrentDataEditFunnel(editDataTracking);
    toggleModal();
    setCurrentEdit(editDataTracking.id);
  };

  const addNewFunnel = () => {
    setCurrentSteps([step1]);
    setAdAccounts([adAccounts1]);
    toggleModal();
  };

  const removeStep = (id: number) => {
    const obtainStep = currentSteps.filter((step: any) => step.id !== id);
    setCurrentSteps(obtainStep);
    // setCurrentSteps((currentSteps) =>
    //   currentSteps.filter((step: any) => step.id !== id)
    // );
  };

  const removeCampaign = (id: number) => {
    const currentCampaign = adAccounts.filter(
      (campaign: any) => campaign.id !== id
    );
    setAdAccounts(currentCampaign);
  };
  console.log("adAccounts--", adAccounts);
  const { theme, themeDarkLight, themeBackNewFunnel, themeFilterFunnel } =
    useContext(ThemeContext);

  useEffect(() => {
    if (tokenFacebookFunnel === true || tokenGoogleFunnel === true) {
      if (tokenFacebookFunnel === true && tokenGoogleFunnel === true) {
        setTitle(
          "Por favor iniciar sesion en FacebookAds y GoogleAds para actualizar los tokens"
        );
      } else if (tokenFacebookFunnel === true && tokenGoogleFunnel === false) {
        setTitle(
          "Por favor iniciar sesion en FacebookAds para actualizar el token"
        );
      } else if (tokenFacebookFunnel === false && tokenGoogleFunnel === true) {
        setTitle(
          "Por favor iniciar sesion en GoogleAds para actualizar el token"
        );
      }
    }
  }, [tokenFacebookFunnel, tokenGoogleFunnel]);

  useEffect(() => {
    if (title === "") return;
    IntegrationAlert(title, navigate);
  }, [title]);

  return (
    <Main
      width={toggleSlider === true ? "87vw" : "96vw"}
      theme={themeDarkLight}
    >
      <Modal
        title={"Crear Funnel"}
        isOpen={isModalOpen}
        onClose={toggleModal}
        width="60%"
        height="543px"
        padding="12px 2.25rem 16px"
        btnClose={1}
        overflowY="auto"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <AddFunnelInput
            register={register}
            errors={errors}
            isModalOpen={isModalOpen}
            currentDataEditFunnel={currentDataEditFunnel}
          />
          <StepsFunnel
            currentSteps={currentSteps}
            setCurrentSteps={setCurrentSteps}
            currentDataEditFunnel={currentDataEditFunnel}
            removeStep={removeStep}
          />
          <AdAccount
            adAccounts={adAccounts}
            setAdAccounts={setAdAccounts}
            isModalOpen={isModalOpen}
            currentDataEditFunnel={currentDataEditFunnel}
            removeCampaign={removeCampaign}
          />
          <ContainerSticky className="row" theme={theme}>
            <Bar className="mb-3"></Bar>
            <div className="form-group col-sm-6">
              <ButtonsModal
                className="btn btn-close"
                onClick={toggleModal}
                theme={themeFilterFunnel}
              >
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
      <Card height="84vh" borderRadius="16px 16px 0 0" theme={theme}>
        <Title fontSize="17px">Funnel</Title>
        <div className="row">
          <Bar></Bar>
          <div className="col-sm-12">
            <AccordionFunnel
              obtainFunnelEdit={obtainFunnelEdit}
              setCurrentSteps={setCurrentSteps}
              showLodash={showLodash}
              setShowLodash={setShowLodash}
              isModalOpen={isModalOpen}
              toggleModal={toggleModal}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              errors={errors}
              currentDataEditFunnel={currentDataEditFunnel}
              currentSteps={currentSteps}
              removeStep={removeStep}
              adAccounts={adAccounts}
              setAdAccounts={setAdAccounts}
              removeCampaign={removeCampaign}
            />
          </div>
        </div>
      </Card>
      <NewFunnel theme={themeBackNewFunnel}>
        <ButtonFunnel theme={themeDarkLight} onClick={addNewFunnel}>
          + Nuevo
        </ButtonFunnel>
      </NewFunnel>
      {/* <FooterMenu /> */}
    </Main>
  );
};

export default Funnel;
