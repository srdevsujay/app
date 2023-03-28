import React, { useEffect, useState } from "react";
// import { AddCircleOutlineIcon } from "@material-ui/icons";
import { InputComponent } from "../../../../components/input";
import { StepFunnelProps } from "../../../Dashboard/models";

const StepFunnel = ({ setStepFunnel, step, idFunnel }: StepFunnelProps) => {
  const [stepObject, setStepObject] = useState(step);

  const handleChangeStepName = (stepName: string) => {
    setStepObject({ id: idFunnel, stepName, stepUrl: stepObject.stepUrl });
  };

  const handleChangeStepUrl = (stepUrl: string) => {
    setStepObject({ id: idFunnel, stepName: stepObject.stepName, stepUrl });
  };

  useEffect(() => {
    setStepFunnel(stepObject);
  }, [stepObject]);

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <InputComponent
            max={5}
            placeholder="Nombre del Paso"
            label="Escribe el Nombre del Paso"
            id="3"
            type="text"
            min={3}
            value={stepObject.stepName}
            onChange={handleChangeStepName}
          />
        </div>
        <div className="col-sm-6">
          <InputComponent
            max={5}
            placeholder="Url del Paso"
            label="Escribe Url del Paso"
            id="4"
            type="text"
            min={3}
            value={stepObject.stepUrl}
            onChange={handleChangeStepUrl}
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default StepFunnel;
