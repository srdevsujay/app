import React, { useEffect, useState } from "react";
// import { AddCircleOutlineIcon } from "@material-ui/icons";
import { InputComponent } from "../../../../components/input";
import { StepFunnelProps } from "../../../Dashboard/models";
import InputRegister from "../../../../components/input/InputRegister.component";
import RemoveIcon from "@material-ui/icons/Remove";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const StepFunnel = ({ setStepFunnel, step, removeStep }: StepFunnelProps) => {
  const [stepObject, setStepObject] = useState(step);

  const handleChangeStepName = (step_name: string) => {
    setStepObject({
      id: step.id,
      step_name,
      step_url: stepObject.step_url,
      step_description: "",
    });
  };

  const handleChangeStepUrl = (step_url: string) => {
    setStepObject({
      id: step.id,
      step_name: stepObject.step_name,
      step_url,
      step_description: "",
    });
  };

  useEffect(() => {
    setStepFunnel(stepObject);
  }, [stepObject]);

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="d-flex">
            <p>Nombre del paso</p>
            <Tooltip anchorSelect=".my-anchor-element" place="top">
              Nombre personalizado.
            </Tooltip>
            <a
              className="my-anchor-element"
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
          <InputComponent
            max={5}
            placeholder="Ingresa el nombre del paso"
            id="3"
            type="text"
            min={3}
            defaultValue={stepObject?.step_name}
            onChange={handleChangeStepName}
          />
        </div>
        <div className="col-sm-5">
          <div className="d-flex">
            <p>Url del paso</p>
            <Tooltip anchorSelect=".my-anchor-element2" place="top">
              URL del paso: Debe ingresar la referencia de la pagina después del
              dominio, ejemplo: /agenda
            </Tooltip>
            <a
              className="my-anchor-element2"
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
          <InputComponent
            max={5}
            placeholder="Ingresa la url del paso"
            id="4"
            type="text"
            min={3}
            value={stepObject.step_url}
            onChange={handleChangeStepUrl}
          />
        </div>
        <div className="col-sm-1 flex-two-icon d-flex">
          <HighlightOffIcon
            style={{
              color: "#000",
              fontSize: "27px",
              marginTop: "40px",
              marginRight: "4px",
            }}
            onClick={() => removeStep(stepObject.id)}
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default StepFunnel;
