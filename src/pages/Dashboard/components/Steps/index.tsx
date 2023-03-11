import React, { useState } from "react";
import { FunnelStep } from "../../models";
import StepFunnel from "../StepFunnel";

const StepsFunnel = () => {
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
        <div className="col-md-10">
          <h4 className="title-popup font-helvetica">Pasos</h4>
        </div>
        <div className="col-md-2">
          <div className="addIcon" onClick={addStep}>
            {/* <AddCircleOutlineIcon
              aria-label="delete"
              color="primary"
              className="mr-1"
            >
              <AddCircleIcon onClick={addSteps} fontSize="medium" />
            </AddCircleOutlineIcon> */}
            (+)
          </div>
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
        />
      ))}
    </>
  );
};

export default StepsFunnel;
