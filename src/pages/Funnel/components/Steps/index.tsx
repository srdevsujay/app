import React, { useState } from "react";
import { FunnelStep } from "../../../Dashboard/models";
import StepFunnel from "../StepFunnel";
import { Title } from "../../../Dashboard/styled-components/dashboardStyled";
import { ButtonsModal } from "../../../../styled-components/button/index";

const StepsFunnel = ({ register, errors }: any) => {
  const step1: FunnelStep = {
    id: 0,
    stepName: "",
    stepUrl: "",
  };

  const [steps, setSteps] = useState([step1]);

  const addStep = () => {
    setSteps([...steps, { id: steps.length, stepName: "", stepUrl: "" }]);
  };

  const handleChangeStep = (step: any) => {
    const newSteps = steps.map((elem: any) => {
      if (elem.id === step.id) {
        return step;
      } else {
        return elem;
      }
    });
    setSteps(newSteps);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <Title fontSize="17px" color="#123249">
            Pasos
          </Title>
        </div>
      </div>
      <button
        className="btn btn succes"
        onClick={() => alert(JSON.stringify(steps))}
      >
        Ver
      </button>
      {steps.map((step: FunnelStep, i: number) => (
        <StepFunnel
          key={i}
          setStepFunnel={handleChangeStep}
          step={step}
          idFunnel={i}
          register={register}
          errors={errors}
        />
      ))}
      <div className="d-flex justify-content-center">
        <ButtonsModal
          className="btn btn-add w-25"
          type="button"
          onClick={addStep}
        >
          Agregar Paso
        </ButtonsModal>
      </div>
    </>
  );
};

export default StepsFunnel;
