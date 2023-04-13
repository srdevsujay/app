import React, { useEffect, useState } from "react";
// import { AddCircleOutlineIcon } from "@material-ui/icons";
import { InputComponent } from "../../../../components/input";
import { StepFunnelProps } from "../../../Dashboard/models";
import InputRegister from "../../../../components/input/InputRegister.component";

const StepFunnel = ({
  setStepFunnel,
  step,
  idFunnel,
  isModalOpen,
  initialSteps,
}: StepFunnelProps) => {
  const [stepObject, setStepObject] = useState(step);

  useEffect(() => {
    if (!isModalOpen) return;
    setStepObject(initialSteps);
  }, [isModalOpen]);

  const handleChangeStepName = (step_name: string) => {
    console.log("step_name", step_name);
    setStepObject({
      id: idFunnel,
      step_name,
      step_url: stepObject.step_url,
      step_description: "",
    });
  };

  const handleChangeStepUrl = (step_url: string) => {
    setStepObject({
      id: idFunnel,
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
          {/* <InputRegister
            placeholder="Ingresa el nombre del paso"
            label="Nombre del paso"
            id="0"
            type="text"
            min={3}
            name="stepName"
            register={register}
            defaultValue={stepObject.stepName}
            onChange={handleChangeStepName}
            error={String(errors["stepName"]?.message)}
          /> */}
          <InputComponent
            max={5}
            placeholder="Ingresa el nombre del paso"
            label="Url del paso"
            id="3"
            type="text"
            min={3}
            value={stepObject.step_name}
            onChange={handleChangeStepName}
          />
        </div>
        <div className="col-sm-6">
          {/* <InputRegister
            placeholder="Ingresa la url del paso"
            label="Url del paso"
            id="0"
            type="text"
            min={3}
            name="stepUrl"
            register={register}
            error={String(errors["stepUrl"]?.message)}
          /> */}
          <InputComponent
            max={5}
            placeholder="Ingresa la url del paso"
            label="Url del paso"
            id="4"
            type="text"
            min={3}
            value={stepObject.step_url}
            onChange={handleChangeStepUrl}
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default StepFunnel;
