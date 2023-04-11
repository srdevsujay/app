import React, { useEffect, useState } from "react";
// import { AddCircleOutlineIcon } from "@material-ui/icons";
import { InputComponent } from "../../../../components/input";
import { StepFunnelProps } from "../../../Dashboard/models";
import InputRegister from "../../../../components/input/InputRegister.component";

const StepFunnel = ({
  setStepFunnel,
  step,
  idFunnel,
  register,
  errors,
}: StepFunnelProps) => {
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
          <InputRegister
            placeholder="Ingresa el nombre del paso"
            label="Nombre del paso"
            id="0"
            type="text"
            min={3}
            name="stepName"
            register={register}
            error={String(errors["stepName"]?.message)}
          />
          {/* <InputComponent
            max={5}
            placeholder="Ingresa la url del paso"
            label="Url del paso"
            id="3"
            type="text"
            min={3}
            value={stepObject.stepName}
            onChange={handleChangeStepName}
          /> */}
        </div>
        <div className="col-sm-6">
          <InputRegister
            placeholder="Ingresa la url del paso"
            label="Url del paso"
            id="0"
            type="text"
            min={3}
            name="stepUrl"
            register={register}
            error={String(errors["stepUrl"]?.message)}
          />
          {/* <InputComponent
            max={5}
            placeholder="Url del Paso"
            label="Escribe Url del Paso"
            id="4"
            type="text"
            min={3}
            value={stepObject.stepUrl}
            onChange={handleChangeStepUrl}
          /> */}
        </div>
      </div>
      <hr />
    </>
  );
};

export default StepFunnel;
