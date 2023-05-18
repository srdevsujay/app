export interface AdAccountType {
  id: number;
  campaing_plataform: string,
  campaing_type: string,
  campaing_name: string,
  campaing_identify: string
}

export interface AdAccountProps {
  setAdAccounts: (adAccount: AdAccountType) => void;
  adAccount: AdAccountType;
  id: number;
  trafficSource: any[];
  setTrafficSource: (x: any) => void;
  adAccountsOptions: any
}