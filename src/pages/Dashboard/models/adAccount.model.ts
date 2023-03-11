export interface AdAccountType {
  id: number;
  trafficSource: string,
  connectionType: string,
  adAccountName: string,
  adAccountIdentification: string
}

export interface AdAccountProps {
  setAdAccounts: (adAccount: AdAccountType) => void;
  adAccount: AdAccountType;
  id: number;
  trafficSource: any[];
  setTrafficSource: (x: any) => void;
  adAccountsOptions: any
}