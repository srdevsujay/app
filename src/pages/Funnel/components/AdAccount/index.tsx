import React, { useState, useEffect, useContext } from "react";
import { AdAccountType } from "../../../Dashboard/models";
import AdAccountFunnel from "../../../Dashboard/components/AdAccountFunnel";
import { Option } from "../../../../components/Select";

import { ButtonsModal } from "../../../../styled-components/button/index";
import { Title } from "../../../../styled-components/Title/index";
import Swal from "sweetalert2";
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";
import { ModalSubTitleFunnel } from "../../../../styled-components/modal/index";

const AdAccount = ({
  adAccounts,
  setAdAccounts,
  isModalOpen,
  currentDataEditFunnel,
  removeCampaign,
}: any) => {
  const configOptions = [
    {
      label: "Facebook",
      value: "1",
      disabled: false,
      connectionTypes: [
        { label: "Cuenta Publicitaria", value: "1", disabled: false },
        { label: "Campaña", value: "2", disabled: false },
      ],
    },
    {
      label: "Google",
      value: "2",
      disabled: false,
      connectionTypes: [
        { label: "Cuenta Publicitaria", value: "1", disabled: false },
      ],
    },
  ];

  useEffect(() => {
    handleSetAdAccountConfig();
  }, [adAccounts]);

  const [adAccountConfig, setAdAccountConfig] = useState<any>(configOptions);
  console.log("adAccountConfig", adAccountConfig);

  const handleSetAdAccountConfig = () => {
    let bloquearFacebook = false;
    let bloquearGoogle = false;
    let bloquearCampana = false;
    let bloquearPublicitaria = false;
    adAccounts.map((elem: any) => {
      const facebookTraffic = adAccounts.filter(
        (elem: any) => elem.campaing_plataform === "1"
      );
      if (elem.campaing_plataform === "1" && elem.campaing_type === 1) {
        //bloquear facebook
        bloquearFacebook = true;
        if (facebookTraffic.length > 1) {
          //bloquear campaña
          bloquearCampana = true;
        }
      }
      if (elem.campaing_plataform === "1" && elem.campaing_type === 2) {
        if (facebookTraffic.length > 1) {
          //bloquear cuenta publicitaria para facebook
          bloquearPublicitaria = true;
        }
      }
      if (elem.campaing_plataform === "2") {
        //bloquear google
        bloquearGoogle = true;
      }
    });
    setAdAccountConfig([
      {
        label: "Facebook",
        value: "1",
        disabled: bloquearFacebook,
        connectionTypes: [
          {
            label: "Cuenta Publicitaria",
            value: "1",
            disabled: bloquearPublicitaria,
          },
          { label: "Campaña", value: "2", disabled: bloquearCampana },
        ],
      },
      {
        label: "Google",
        value: "2",
        disabled: bloquearGoogle,
        connectionTypes: [
          {
            label: "Cuenta Publicitaria",
            value: "1",
            disabled: bloquearPublicitaria,
          },
        ],
      },
    ]);
  };

  const word = `Recuerda</br> -si seleccionas Fuente de tráfico 'Facebook' y Tipo de conexión 'Cuenta Publicitaria', nada más podras agregarla una sola vez </br> -si seleccionas Fuente de tráfico 'Facebook' y Tipo de conexión 'Campaña' podras agregarla las veces que desees. </br> -si seleccionas Fuente de tráfico 'Google' podras seleccionar una vez Tipo de conexión 'Cuenta Publicitaria`;

  const [onAlertCampaign, setOnAlertCampaign] = useState(1);
  const [current, setcurrent] = useState<any>({});
  console.log("adAccounts", adAccounts);

  const addAdAccount = () => {
    const currentFlag: any = Object.values(current);

    if (currentFlag.length > 0) {
      if (
        current?.campaings[0]?.campaing_type === 1 &&
        current?.campaings[1]?.campaing_type === 1
      ) {
        Swal.fire(
          "",
          "Recuerda, nada más se puede una cuenta publicitaria por campaña",
          "info"
        );
        return;
      }
    }
    if (
      (adAccounts[0]?.campaing_type === 1 ||
        adAccounts[0]?.campaing_type === "1") &&
      (adAccounts[1]?.campaing_type === 1 ||
        adAccounts[1]?.campaing_type === "1")
    ) {
      Swal.fire(
        "",
        "Recuerda, nada más se puede una cuenta publicitaria por campaña",
        "info"
      );
      return;
    }
    if (onAlertCampaign) {
      Swal.fire("", word, "info");
      setOnAlertCampaign(0);
    }
    //Validar si se puede crear y en caso de que sí entonces ¿qué se puede crear?
    let newAdAccount = {
      id: adAccounts.length,
      campaing_plataform: "",
      campaing_type: "",
      campaing_name: "",
      campaing_identify: "",
    };
    let canContinue = true;
    adAccounts.forEach((adAccount: any) => {
      if (!adAccount.campaing_plataform || !adAccount.campaing_type) {
        canContinue = false;
      }
    });
    if (!canContinue) return;
    const facebookSet = adAccountConfig.find((elem: any) => elem.value === "1");
    // const cuentaPublicitaria = facebookSet.connectionTypes.find(
    //   (elem: any) => elem.value === "adAccount"
    // );
    // const campana = facebookSet.connectionTypes.find(
    //   (elem: any) => elem.value === "campaign"
    // );
    const googleSet = adAccountConfig.find((elem: any) => elem.value === "2");
    if (googleSet.disabled) {
      if (facebookSet.disabled) {
        console.log("NO PODEMOS CREAR NADA MAS");
        Swal.fire(
          "",
          "Recuerda, nada más se puede una cuenta publicitaria por campaña",
          "info"
        );
        return;
      } else {
        newAdAccount.campaing_plataform = "1";
        const adAccountsFacebook = adAccounts.filter(
          (elem: any) => elem.campaing_plataform === "1"
        );
        const campaignExists = adAccountsFacebook.find(
          (elem: any) => elem.campaing_type === 2
        );
        const adAccountExists = adAccountsFacebook.find(
          (elem: any) => elem.campaing_type === 1
        );
        if (campaignExists) {
          newAdAccount.campaing_type = "2";
        } else if (adAccountExists) {
          return;
        }
      }
    } else {
      newAdAccount.campaing_plataform = "2";
      newAdAccount.campaing_type = "1";
    }
    // Swal.fire("Correcto", "Funnel actualizado correctamente!!", "success");

    setAdAccounts([...adAccounts, newAdAccount]);
  };

  const handleChangeAdAccount = (adAccount: any) => {
    const newAdAccounts = adAccounts.map((elem: any) => {
      if (elem.id === adAccount.id) {
        return adAccount;
      } else {
        return elem;
      }
    });
    setAdAccounts(newAdAccounts);
  };

  useEffect(() => {
    if (!currentDataEditFunnel) return;
    setcurrent(currentDataEditFunnel);
    setAdAccounts(currentDataEditFunnel?.campaings);
  }, [currentDataEditFunnel]);

  const { theme, themeTitleModal } = useContext(ThemeContext);

  return (
    <>
      <div className="row mb-4">
        <div className="col-md-10">
          <ModalSubTitleFunnel theme={theme}>
            Cuenta Publicitaria
          </ModalSubTitleFunnel>
        </div>
      </div>
      {adAccounts.map((adAccount: any, i: number) => (
        <AdAccountFunnel
          key={adAccount.id}
          setAdAccounts={handleChangeAdAccount}
          adAccount={adAccount}
          adAccountConfig={adAccountConfig}
          handleSetAdAccountConfig={handleSetAdAccountConfig}
          isModalOpen={isModalOpen}
          removeCampaign={removeCampaign}
        />
      ))}
      <div className="d-flex justify-content-center">
        <ButtonsModal
          className="btn btn-add w-25 mb-3"
          type="button"
          onClick={addAdAccount}
        >
          Agregar Cuenta
        </ButtonsModal>
      </div>
    </>
  );
};

export default AdAccount;
