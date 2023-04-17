import React, { useState, useEffect } from "react";
import { FunnelStep } from "../../../Dashboard/models";
import StepFunnel from "../StepFunnel";
import { Title } from "../../../Dashboard/styled-components/dashboardStyled";
import { ButtonsModal } from "../../../../styled-components/button/index";

const StepsFunnel = ({
  currentSteps,
  setCurrentSteps,
  isModalOpen,
  initialSteps,
  currentDataEditFunnel,
}: any) => {
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

  useEffect(() => {
    if (!currentDataEditFunnel) return;
    console.log("currentDataEditFunnel", currentDataEditFunnel);
    setCurrentSteps(currentDataEditFunnel?.steps);
  }, [currentDataEditFunnel]);

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
          isModalOpen
          initialSteps
          currentDataEditFunnel={currentDataEditFunnel}
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
