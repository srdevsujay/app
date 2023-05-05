export interface DashboardInfo {
  isLoading: boolean;
  dataPNL: [];
  dataTracking: [];
  dataFunnel: [],
  tokenfacebook: boolean,
  tokengoogle: boolean,
}

export interface Pnl {
  bookings: number;
  date: string;
  gastos: number;
  ingresos: number;
  leeds: number;
  plataform: string;
  porcentajerentabilidad: number;
  rentabilidad: number;
  roi: number;
  meetings: number;
}

export interface CampaignData {
  // "A/R": number;
  ACV: number;
  AT: number;
  ATR: number;
  Apr: number;
  Aps: number;
  B: number;
  BR: number;
  BTS: number;
  CKOR: number;
  CPAT: number;
  CPAp: number;
  CPB: number;
  CPL: number;
  CR: number;
  CTA: number;
  DWCR: number;
  EPA: number;
  EPB: number;
  EPC: number;
  EPL: number;
  EPV: number;
  FCR: number;
  LCR: number;
  LTA: number;
  LTAp: number;
  LTB: number;
  LV: number;
  PPB: number;
  SCR: number;
  UCR: number;
  account_currency: number;
  btsd: number;
  cash: number;
  clicks: number;
  clicks_organic: number;
  cohort: number;
  cpc: number;
  cpm: number;
  ctr: number;
  date_start: string;
  date_stop: number;
  dws: number;
  frequency: number;
  full_view_impressions: number;
  impressions: number;
  inline_link_click_ctr: number;
  inline_link_clicks: number;
  inline_post_engagement: number;
  leeds: number;
  ltbd: number;
  profit: number;
  reach: number;
  revenue: number;
  sales: number;
  spend: number;
  sutds: number;
  tableData: { id: number };
  us: number;
  views: number
  ROI: number,
  SLTCK: number
  SPCR: number,
  CAC: number,
  CKCR: number,
  CKL: number,
  CPCKL: number,

}

export interface DataType {
  bookings: number;
  ct: string;
  date: string;
  gastos: number;
  ingresos: number;
  leeds: number;
  plataform: string;
  porcentajerentabilidad: number;
  rentabilidad: number;
  roi: number;
}