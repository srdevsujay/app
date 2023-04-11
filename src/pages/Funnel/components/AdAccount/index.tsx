import React, { useState, useEffect } from "react";
import { AdAccountType } from "../../../Dashboard/models";
import AdAccountFunnel from "../../../Dashboard/components/AdAccountFunnel";
import { Option } from "../../../../components/Select";
import { Title } from "../../../Dashboard/styled-components/dashboardStyled";
import { ButtonsModal } from "../../../../styled-components/button/index";

const AdAccount = () => {
  const [adAccounts, setAdAccounts] = useState<AdAccountType[]>([
    {
      id: 0,
      trafficSource: "facebook",
      connectionType: "adAccount",
      adAccountName: "",
      adAccountIdentification: "",
    },
  ]);

  const configOptions = [
    {
      label: "Facebook",
      value: "facebook",
      disabled: false,
      connectionTypes: [
        { label: "Cuenta Publicitaria", value: "adAccount", disabled: false },
        { label: "Campaña", value: "campaign", disabled: false },
      ],
    },
    {
      label: "Google",
      value: "google",
      disabled: false,
      connectionTypes: [
        { label: "Cuenta Publicitaria", value: "adAccount", disabled: false },
      ],
    },
  ];

  useEffect(() => {
    handleSetAdAccountConfig();
    console.log("adAccount", adAccounts);
  }, [adAccounts]);

  const [adAccountConfig, setAdAccountConfig] = useState<any>(configOptions);

  const handleSetAdAccountConfig = () => {
    let bloquearFacebook = false;
    let bloquearGoogle = false;
    let bloquearCampana = false;
    let bloquearPublicitaria = false;
    adAccounts.map((elem) => {
      const facebookTraffic = adAccounts.filter(
        (elem) => elem.trafficSource === "facebook"
      );
      if (
        elem.trafficSource === "facebook" &&
        elem.connectionType === "adAccount"
      ) {
        //bloquear facebook
        bloquearFacebook = true;
        if (facebookTraffic.length > 1) {
          //bloquear campaña
          bloquearCampana = true;
        }
      }
      if (
        elem.trafficSource === "facebook" &&
        elem.connectionType === "campaign"
      ) {
        if (facebookTraffic.length > 1) {
          //bloquear cuenta publicitaria para facebook
          bloquearPublicitaria = true;
        }
      }
      if (elem.trafficSource === "google") {
        //bloquear google
        bloquearGoogle = true;
      }
    });
    setAdAccountConfig([
      {
        label: "Facebook",
        value: "facebook",
        disabled: bloquearFacebook,
        connectionTypes: [
          {
            label: "Cuenta Publicitaria",
            value: "adAccount",
            disabled: bloquearPublicitaria,
          },
          { label: "Campaña", value: "campaign", disabled: bloquearCampana },
        ],
      },
      {
        label: "Google",
        value: "google",
        disabled: bloquearGoogle,
        connectionTypes: [{ label: "Cuenta Publicitaria", value: "adAccount" }],
      },
    ]);
  };

  const addAdAccount = () => {
    //Validar si se puede crear y en caso de que sí entonces ¿qué se puede crear?
    let newAdAccount = {
      id: adAccounts.length,
      trafficSource: "",
      connectionType: "",
      adAccountName: "",
      adAccountIdentification: "",
    };
    let canContinue = true;
    adAccounts.forEach((adAccount) => {
      if (!adAccount.trafficSource || !adAccount.connectionType) {
        canContinue = false;
      }
    });
    if (!canContinue) return;
    const facebookSet = adAccountConfig.find(
      (elem: any) => elem.value === "facebook"
    );
    // const cuentaPublicitaria = facebookSet.connectionTypes.find(
    //   (elem: any) => elem.value === "adAccount"
    // );
    // const campana = facebookSet.connectionTypes.find(
    //   (elem: any) => elem.value === "campaign"
    // );
    const googleSet = adAccountConfig.find(
      (elem: any) => elem.value === "google"
    );
    if (googleSet.disabled) {
      if (facebookSet.disabled) {
        console.log("NO PODEMOS CREAR NADA MAS");
        return;
      } else {
        newAdAccount.trafficSource = "facebook";
        const adAccountsFacebook = adAccounts.filter(
          (elem: any) => elem.trafficSource === "facebook"
        );
        const campaignExists = adAccountsFacebook.find(
          (elem: any) => elem.connectionType === "campaign"
        );
        const adAccountExists = adAccountsFacebook.find(
          (elem: any) => elem.connectionType === "adAccount"
        );
        if (campaignExists) {
          newAdAccount.connectionType = "campaign";
        } else if (adAccountExists) {
          return;
        }
      }
    } else {
      newAdAccount.trafficSource = "google";
      newAdAccount.connectionType = "adAccount";
    }
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

  return (
    <>
      <div className="row">
        <div className="col-md-10">
          <Title fontSize="17px" color="#123249">
            Cuenta Publicitaria
          </Title>
        </div>
      </div>
      <button
        className="btn btn succes"
        onClick={() => alert(JSON.stringify(adAccounts))}
      >
        Ver
      </button>

      {adAccounts.map((adAccount: any, i: number) => (
        <AdAccountFunnel
          key={i}
          setAdAccounts={handleChangeAdAccount}
          adAccount={adAccount}
          adAccountConfig={adAccountConfig}
          handleSetAdAccountConfig={handleSetAdAccountConfig}
        />
      ))}
      <div className="d-flex justify-content-center">
        <ButtonsModal
          className="btn btn-add w-25 mb-3"
          type="submit"
          onClick={addAdAccount}
        >
          Agregar Cuenta
        </ButtonsModal>
      </div>
    </>
  );
};

export default AdAccount;
