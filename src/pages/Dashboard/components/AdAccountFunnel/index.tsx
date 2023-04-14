import React, { useEffect, useState } from "react";
import SelectComponent from "../../../../components/Select";
import { InputComponent } from "../../../../components/input";
import { AdAccountProps } from "../../models";

const AdAccountFunnel = ({
  setAdAccounts,
  adAccount,
  adAccountConfig,
  handleSetAdAccountConfig,
  isModalOpen,
  initialAccounts,
}: any) => {
  const [select, setSelect] = useState(adAccount);

  useEffect(() => {
    setAdAccounts(select);
  }, [select]);

  useEffect(() => {
    if (!isModalOpen) return;
    setSelect(initialAccounts);
  }, [isModalOpen]);

  const handleChangeTrafficSource = (trafficSource: any) => {
    setSelect({
      id: select.id,
      trafficSource,
      connectionType: "",
      adAccountName: select.adAccountName,
      adAccountIdentification: select.adAccountIdentification,
    });
  };

  const handleChangeConnectionType = (connectionType: any) => {
    setSelect({
      id: select.id,
      trafficSource: select.trafficSource,
      connectionType: connectionType,
      adAccountName: select.adAccountName,
      adAccountIdentification: select.adAccountIdentification,
    });
  };

  const handleChangeAdAccountName = (adAccountName: string) => {
    setSelect({
      id: select.id,
      trafficSource: select.trafficSource,
      connectionType: select.connectionType,
      adAccountName,
      adAccountIdentification: select.adAccountIdentification,
    });
  };

  const handleChangeAdAccountIdentification = (
    adAccountIdentification: string
  ) => {
    setSelect({
      id: select.id,
      trafficSource: select.trafficSource,
      connectionType: select.connectionType,
      adAccountName: select.adAccountName,
      adAccountIdentification,
    });
  };

  useEffect(() => {
    setAdAccounts(select);
  }, [select]);

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <SelectComponent
            label="Fuente de tráfico"
            options={adAccountConfig}
            value={select.trafficSource}
            onChange={handleChangeTrafficSource}
          />
        </div>
        <div className="col-sm-6">
          <SelectComponent
            label="Tipo de conexión"
            options={
              select.trafficSource === "2"
                ? adAccountConfig[1].connectionTypes
                : adAccountConfig[0].connectionTypes
            }
            value={select.connectionType}
            onChange={handleChangeConnectionType}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <InputComponent
            max={5}
            placeholder="Nombre cuenta publicitaria"
            label="Nombre cuenta publicitaria"
            id="5"
            type="text"
            min={3}
            value={select.adAccountName}
            onChange={handleChangeAdAccountName}
          />
        </div>
        <div className="col-sm-6">
          <InputComponent
            max={5}
            placeholder="Identificación cuenta publicitaria"
            label="Identificación cuenta publicitaria"
            id="6"
            type="text"
            min={3}
            value={select.adAccountIdentification}
            onChange={handleChangeAdAccountIdentification}
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default AdAccountFunnel;
