import React, { useState, useEffect } from "react";
import { AdAccountType } from "../../../Dashboard/models";
import AdAccountFunnel from "../../../Dashboard/components/AdAccountFunnel";
import { Option } from "../../../../components/Select";
import { Title } from "../../../Dashboard/styled-components/dashboardStyled";
import { ButtonsModal } from "../../../../styled-components/button/index";

const AdAccount = ({ adAccounts, setAdAccounts }: any) => {
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
    console.log("adAccount", adAccounts);
  }, [adAccounts]);

  const [adAccountConfig, setAdAccountConfig] = useState<any>(configOptions);

  const handleSetAdAccountConfig = () => {
    let bloquearFacebook = false;
    let bloquearGoogle = false;
    let bloquearCampana = false;
    let bloquearPublicitaria = false;
    adAccounts.map((elem: any) => {
      const facebookTraffic = adAccounts.filter(
        (elem: any) => elem.trafficSource === "1"
      );
      if (elem.trafficSource === "1" && elem.connectionType === "1") {
        //bloquear facebook
        bloquearFacebook = true;
        if (facebookTraffic.length > 1) {
          //bloquear campaña
          bloquearCampana = true;
        }
      }
      if (elem.trafficSource === "1" && elem.connectionType === "2") {
        if (facebookTraffic.length > 1) {
          //bloquear cuenta publicitaria para facebook
          bloquearPublicitaria = true;
        }
      }
      if (elem.trafficSource === "2") {
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
        connectionTypes: [{ label: "Cuenta Publicitaria", value: "1" }],
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
    adAccounts.forEach((adAccount: any) => {
      if (!adAccount.trafficSource || !adAccount.connectionType) {
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
        return;
      } else {
        newAdAccount.trafficSource = "1";
        const adAccountsFacebook = adAccounts.filter(
          (elem: any) => elem.trafficSource === "1"
        );
        const campaignExists = adAccountsFacebook.find(
          (elem: any) => elem.connectionType === "2"
        );
        const adAccountExists = adAccountsFacebook.find(
          (elem: any) => elem.connectionType === "1"
        );
        if (campaignExists) {
          newAdAccount.connectionType = "2";
        } else if (adAccountExists) {
          return;
        }
      }
    } else {
      newAdAccount.trafficSource = "2";
      newAdAccount.connectionType = "1";
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
