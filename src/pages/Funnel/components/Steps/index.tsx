import React, { useState, useEffect, useContext } from "react";
import { FunnelStep } from "../../../Dashboard/models";
import StepFunnel from "../StepFunnel";

import { ButtonsModal } from "../../../../styled-components/button/index";
import { Title } from "../../../../styled-components/Title/index";
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";
import { ModalSubTitleFunnel } from "../../../../styled-components/modal/index";

const StepsFunnel = ({
  currentSteps,
  setCurrentSteps,
  currentDataEditFunnel,
  removeStep,
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
    setCurrentSteps(currentDataEditFunnel?.steps);
  }, [currentDataEditFunnel]);

  const { theme, themeTitleModal } = useContext(ThemeContext);

  return (
    <>
      <div className="row mb-4">
        <div className="col-md-12 mt-3">
          <ModalSubTitleFunnel theme={theme}>Pasos</ModalSubTitleFunnel>
        </div>
      </div>
      {currentSteps?.map((step: FunnelStep, i: number) => (
        <StepFunnel
          key={step.id}
          setStepFunnel={handleChangeStep}
          step={step}
          removeStep={removeStep}
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
