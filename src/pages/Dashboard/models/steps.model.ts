export interface FunnelStep {
  id: number;
  stepName: string;
  stepUrl: string
}

export interface StepFunnelProps {
  setStepFunnel: (step: FunnelStep) => void;
  step: FunnelStep;
  idFunnel: number;
  register?: any;
  errors?: any;
}