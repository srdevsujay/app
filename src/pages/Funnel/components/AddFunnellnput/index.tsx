import { useEffect, useState } from "react";
import { InputComponent } from "../../../../components/input";
import InputRegister from "../../../../components/input/InputRegister.component";
import SelectWithValidation from "../../../../components/Select/SelectWithValidation.component";
import { TypeFunnel } from "../../models/routes";
import SelectStateBooking from "../../../Contacts/components/SelectStateBooking/index";
import { useAppSelector } from "../../../../hooks/appDispatch";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ProductAlert } from "../../../../components/alerts/Product";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const AddFunnelInput = ({
  register,
  errors,
  isModalOpen,
  currentDataEditFunnel,
}: any) => {
  const { dataProduct } = useAppSelector((state) => state.tracking);
  const navigate = useNavigate();

  useEffect(() => {
    if (dataProduct.length === 0) {
      ProductAlert(navigate, "un Funnel");
    }
  }, [dataProduct]);

  return (
    <>
      <div className="row mt-3">
        <div className="col-sm-6">
          <div className="d-flex">
            <p>Tipo de Funnel</p>
            <Tooltip anchorSelect=".typeFunnel" place="top">
              El tipo de Funnel establece las metricas orientadas a su negocio.
            </Tooltip>
            <a
              className="typeFunnel"
              style={{
                position: "relative",
                top: "-12px",
                left: "10px",
                color: "#000",
              }}
            >
              <HelpOutlineIcon className="mt-3 color" fontSize="small" />
            </a>
          </div>
          <SelectStateBooking
            options={TypeFunnel as any}
            name="funnel_status"
            register={register}
            error={String(errors["funnel_status"]?.message)}
            // currentEdit={currentEdit}
          />
        </div>
        <div className="col-sm-6">
          <div className="d-flex">
            <p>Selecciona el Producto</p>
            <Tooltip anchorSelect=".selecctFunnel" place="top">
              El tipo de Funnel establece las metricas orientadas a su negocio.
            </Tooltip>
            <a
              className="selecctFunnel"
              style={{
                position: "relative",
                top: "-12px",
                left: "10px",
                color: "#000",
              }}
            >
              <HelpOutlineIcon className="mt-3 color" fontSize="small" />
            </a>
          </div>
          <SelectWithValidation
            options={dataProduct as any}
            name="product_id"
            register={register}
            error={String(errors["product_id"]?.message)}
            // currentEdit={currentEdit}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="d-flex" style={{ top: "25px", position: "relative" }}>
            <p>Nombre del Funnel</p>
            <Tooltip anchorSelect=".nameFunnel" place="top">
              Nombre personalizado del Funnel
            </Tooltip>
            <a
              className="nameFunnel"
              style={{
                position: "relative",
                top: "-12px",
                left: "10px",
                color: "#000",
              }}
            >
              <HelpOutlineIcon className="mt-3 color" fontSize="small" />
            </a>
          </div>
          <InputRegister
            placeholder="Ingresa el nombre del funnel"
            id="0"
            type="text"
            min={3}
            defaultValue={currentDataEditFunnel?.funnel_name}
            name="funnel_name"
            register={register}
            error={String(errors["funnel_name"]?.message)}
          />
        </div>
        <div className="col-sm-6">
          <div className="d-flex" style={{ top: "25px", position: "relative" }}>
            <p>Url del Funnel</p>
            <Tooltip anchorSelect=".urlFunnel" place="top">
              Ingresar la url del landing o del sitio web.
            </Tooltip>
            <a
              className="urlFunnel"
              style={{
                position: "relative",
                top: "-12px",
                left: "10px",
                color: "#000",
              }}
            >
              <HelpOutlineIcon className="mt-3 color" fontSize="small" />
            </a>
          </div>
          <InputRegister
            placeholder="Ingresa la url del Funnel"
            id="0"
            type="text"
            min={3}
            defaultValue={currentDataEditFunnel?.funnel_url}
            name="funnel_url"
            register={register}
            error={String(errors["funnel_url"]?.message)}
          />
        </div>
      </div>
    </>
  );
};

export default AddFunnelInput;
