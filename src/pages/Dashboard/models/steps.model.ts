export interface FunnelStep {
  id: number;
  step_name: string,
  step_url: string,
  step_description: string,
}

export interface StepFunnelProps {
  setStepFunnel: (step: FunnelStep) => void;
  step: FunnelStep;
  idFunnel: number;
  register?: any;
  errors?: any;
}