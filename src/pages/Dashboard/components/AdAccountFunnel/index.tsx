import React, { useEffect, useState } from "react";
import SelectComponent from "../../../../components/Select";
import { InputComponent } from "../../../../components/input";
import RemoveIcon from "@material-ui/icons/Remove";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import "../../styled-components/style.css";

const AdAccountFunnel = ({
  setAdAccounts,
  adAccount,
  adAccountConfig,
  handleSetAdAccountConfig,
  isModalOpen,
  removeCampaign,
}: any) => {
  const theme: any = localStorage.getItem("Theme");
  const themeDark = JSON.parse(theme);
  const [select, setSelect] = useState(adAccount);

  useEffect(() => {
    setAdAccounts(select);
  }, [select]);

  useEffect(() => {
    if (!isModalOpen) return;
    // setSelect(initialAccounts);
  }, [isModalOpen]);

  const handleChangeTrafficSource = (campaing_plataform: any) => {
    setSelect({
      id: select.id,
      campaing_plataform,
      campaing_type: "",
      campaing_name: select.campaing_name,
      campaing_identify: select.campaing_identify,
    });
  };

  const handleChangeConnectionType = (campaing_type: any) => {
    setSelect({
      id: select.id,
      campaing_plataform: select.campaing_plataform,
      campaing_type: campaing_type,
      campaing_name: select.campaing_name,
      campaing_identify: select.campaing_identify,
    });
  };

  const handleChangeAdAccountName = (campaing_name: string) => {
    setSelect({
      id: select.id,
      campaing_plataform: select.campaing_plataform,
      campaing_type: select.campaing_type,
      campaing_name,
      campaing_identify: select.campaing_identify,
    });
  };

  const handleChangeAdAccountIdentification = (campaing_identify: string) => {
    setSelect({
      id: select.id,
      campaing_plataform: select.campaing_plataform,
      campaing_type: select.campaing_type,
      campaing_name: select.campaing_name,
      campaing_identify,
    });
  };

  useEffect(() => {
    setAdAccounts(select);
  }, [select]);

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="d-flex" style={{ position: "relative" }}>
            <p>Fuente de tráfico</p>
            <Tooltip anchorSelect=".fontTraffic" place="top">
              Seleccione el origen de su fuente de tráfico.
            </Tooltip>
            <a
              className={`${
                themeDark === true
                  ? "fontTraffic icon-help-funnel-dark"
                  : "fontTraffic icon-help-funnel-light"
              }`}
            >
              <HelpOutlineIcon className="mt-3 color" fontSize="small" />
            </a>
          </div>
          <SelectComponent
            options={adAccountConfig}
            value={
              select?.campaing_plataform
                ? select?.campaing_plataform
                : select?.campaing_plataform
            }
            onChange={handleChangeTrafficSource}
          />
        </div>
        <div className="col-sm-5">
          <div className="d-flex" style={{ position: "relative" }}>
            <p>Tipo de conexión</p>
            <Tooltip anchorSelect=".typeConnection" place="top">
              Seleccione el tipo de conexión de la fuente de tráfico.
            </Tooltip>
            <a
              className={`${
                themeDark === true
                  ? "typeConnection icon-help-funnel-dark"
                  : "typeConnection icon-help-funnel-light"
              }`}
            >
              <HelpOutlineIcon className="mt-3 color" fontSize="small" />
            </a>
          </div>
          <SelectComponent
            options={
              select?.campaing_plataform === "2"
                ? adAccountConfig[1].connectionTypes
                : adAccountConfig[0].connectionTypes
            }
            value={
              select?.campaing_type
                ? select?.campaing_type
                : select?.campaing_type
            }
            onChange={handleChangeConnectionType}
          />
        </div>
        <div className="col-sm-1 flex-two-icon d-flex">
          <HighlightOffIcon
            className={`${
              themeDark === true
                ? "icon-close-funnel-dark"
                : "icon-close-funnel-light"
            }`}
            onClick={() => removeCampaign(adAccount.id)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6">
          <div className="d-flex" style={{ position: "relative" }}>
            <p>Nombre cuenta publicitaria</p>
            <Tooltip anchorSelect=".nameAccount" place="top">
              Nombre de la campaña de su fuente de tráfico.
            </Tooltip>
            <a
              className={`${
                themeDark === true
                  ? "nameAccount icon-help-funnel-dark"
                  : "nameAccount icon-help-funnel-light"
              }`}
            >
              <HelpOutlineIcon className="mt-3 color" fontSize="small" />
            </a>
          </div>
          <InputComponent
            max={5}
            placeholder="Nombre cuenta publicitaria"
            id="5"
            type="text"
            min={3}
            value={
              select?.campaing_name
                ? select?.campaing_name
                : select?.campaing_name
            }
            onChange={handleChangeAdAccountName}
          />
        </div>
        <div className="col-sm-5">
          <div className="d-flex" style={{ position: "relative" }}>
            <p>Identificación cuenta publicitaria</p>
            <Tooltip anchorSelect=".accountPublish" place="top">
              Identificación: Para las cuentas publicitarias de facebook
              ingresar el número de la siguiente manera act_234235453543, para
              las campañas de facebook se ingresa en número normalmente al igual
              que la cuentas publicitarias de google.
            </Tooltip>
            <a
              className={`${
                themeDark === true
                  ? "accountPublish icon-help-funnel-dark"
                  : "accountPublish icon-help-funnel-light"
              }`}
            >
              <HelpOutlineIcon className="mt-3 color" fontSize="small" />
            </a>
          </div>
          <InputComponent
            max={5}
            placeholder="Identificación cuenta publicitaria"
            id="6"
            type="text"
            min={3}
            value={
              select?.campaing_identify
                ? select?.campaing_identify
                : select?.campaing_identify
            }
            onChange={handleChangeAdAccountIdentification}
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default AdAccountFunnel;
