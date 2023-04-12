import React, { useState } from "react";
import { FunnelStep } from "../../../Dashboard/models";
import StepFunnel from "../StepFunnel";
import { Title } from "../../../Dashboard/styled-components/dashboardStyled";
import { ButtonsModal } from "../../../../styled-components/button/index";

const StepsFunnel = ({ currentSteps, setCurrentSteps }: any) => {
  const addStep = () => {
    setCurrentSteps([
      ...currentSteps,
      {
        id: currentSteps.length,
        stepName: "",
        stepUrl: "",
        step_description: "",
      },
    ]);
  };

  const handleChangeStep = (step: any) => {
    const newSteps = currentSteps.map((elem: any) => {
      if (elem.id === step.id) {
        return step;
      } else {
        return elem;
      }
    });
    setCurrentSteps(newSteps);
  };
  console.log("stepsstepssteps", currentSteps);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <Title fontSize="17px" color="#123249">
            Pasos
          </Title>
        </div>
      </div>
      {currentSteps?.map((step: FunnelStep, i: number) => (
        <StepFunnel
          key={i}
          setStepFunnel={handleChangeStep}
          step={step}
          idFunnel={i}
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
