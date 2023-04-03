import { NumericFormat } from "react-number-format";
import { formatMonthDay } from "../../../../utilities/formatMonthDay";
import { CampaignData } from "../../../Dashboard/models/dashboard.model";
import { DateData } from "../../../Dashboard/styled-components/dashboardStyled";
import { acvColumn } from "../columnsTable/acv";
import { dateColumn } from "../columnsTable/date";
import { ImpColumn } from "../columnsTable/imp";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { cpmColumn } from "../columnsTable/cpm";
import { reachColumn } from "../columnsTable/reach";
import { frecColumn } from "../columnsTable/frec";
import { ClicColumn } from "../columnsTable/clic";
import { cpcColumn } from "../columnsTable/cpc";
import { ctrColumn } from "../columnsTable/ctr";
import { viewColumn } from "../columnsTable/view";
import { leadColumn } from "../columnsTable/lead";
import { cplColumn } from "../columnsTable/cpl";
import { lcrColumn } from "../columnsTable/lcr";
import { atColumn } from "../columnsTable/at";
import { cpatColumn } from "../columnsTable/cpat";
import { atrColumn } from "../columnsTable/atr";
import { ctaColumn } from "../columnsTable/cta";
import { LTAColumn } from "../columnsTable/lta";
import { CKORColumn } from "../columnsTable/CKOR";
import { ApsColumn } from "../columnsTable/Aps";
import { CPApColumn } from "../columnsTable/CPAp";
import { ApRColumn } from "../columnsTable/ApR";
import { LTApColumn } from "../columnsTable/LTAp";
import { BColumn } from "../columnsTable/B";
import { CPBColumn } from "../columnsTable/CPB";
import { BRColumn } from "../columnsTable/BR";
import { LTBColumn } from "../columnsTable/LTB";
import { LTBDColumn } from "../columnsTable/LTBD";
import { SalesColumn } from "../columnsTable/Sales";
import { CACColumn } from "../columnsTable/CAC";
import { SCRColumn } from "../columnsTable/SCR";
import { FCRColumn } from "../columnsTable/FCR";
import { BTSColumn } from "../columnsTable/BTS";
import { cohortColumn } from "../columnsTable/Cohort";
import { BTSDColumn } from "../columnsTable/BTSD";
import { SUTSDColumn } from "../columnsTable/SUTSD";
import { RevenueColumn } from "../columnsTable/Revenue";
import { CashColumn } from "../columnsTable/Cash";
import { ROIColumn } from "../columnsTable/ROI";
import { ProfitColumn } from "../columnsTable/Profit";
import { PPBColumn } from "../columnsTable/PPB";
import { DWSColumn } from "../columnsTable/DWS";
import { EPCColumn } from "../columnsTable/EPC";
import { EPVColumn } from "../columnsTable/EPV";
import { EPLColumn } from "../columnsTable/EPL";
import { EPAColumn } from "../columnsTable/EPA";
import { EPBColumn } from "../columnsTable/EPB";
import { USColumn } from "../columnsTable/US";
import { UCRColumn } from "../columnsTable/UCR";
import { DWCRColumn } from "../columnsTable/DWCR";
import { CKCRColumn } from "../columnsTable/CKCR";
import { CKLColumn } from "../columnsTable/CKL";
import { CPCKLColumn } from "../columnsTable/CPCKL";
import { CRColumn } from "../columnsTable/CR";
import { ClicksOrganicColumn } from "../columnsTable/ClicksOrganic";
import { SLTCKColumn } from "../columnsTable/SLTCK";
import { SPCRColumn } from "../columnsTable/SPCR";
import { InvColumn } from "../columnsTable/Inv";
import { AccountCurrencyColumn } from "../columnsTable/AccountCurrency";
import { SPVColumn } from "../columnsTable/SPV";

export const TypeDashboardDataTableColumns = (
  funnelData: CampaignData,
  typeDashboard: any,
  time_Zone: string
) => {
  let columnsToSet = [];
  if (typeDashboard === 1) {
    console.log("entra al case 1");
    return [
      dateColumn(time_Zone),
      InvColumn(),
      ImpColumn(),
      cpmColumn(),
      reachColumn(),
      frecColumn(),
      ClicColumn(),
      ClicksOrganicColumn(),
      cpcColumn(),
      ctrColumn(),
      // SPVColumn(),
      viewColumn(),
      ctaColumn(true),
      CKLColumn(),
      SLTCKColumn(true),
      CPCKLColumn(),
      CKORColumn(),
      SalesColumn(),
      CACColumn(),
      FCRColumn(),
      SPCRColumn(true),
      CKCRColumn(),
      cohortColumn(true),
      USColumn(),
      UCRColumn(),
      DWSColumn(),
      DWCRColumn(),
      BColumn(),
      BRColumn(),
      RevenueColumn(),
      CashColumn(),
      acvColumn(),
      ProfitColumn(),
      EPCColumn(true),
      EPVColumn(),
    ];
  } else if (typeDashboard === 2) {
    console.log("entra al case 2");
    return [
      dateColumn(time_Zone),
      InvColumn(),
      ImpColumn(),
      cpmColumn(),
      reachColumn(),
      frecColumn(),
      ClicColumn(),
      ClicksOrganicColumn(),
      cpcColumn(),
      ctrColumn(),
      viewColumn(),
      leadColumn(),
      cplColumn(),
      lcrColumn(),
      atColumn(),
      cpatColumn(),
      atrColumn(),
      ctaColumn(false),
      LTAColumn(),
      CKORColumn(),
      ApsColumn(),
      CPApColumn(),
      ApRColumn(),
      LTApColumn(),
      BColumn(),
      CPBColumn(),
      BRColumn(),
      LTBColumn(),
      LTBDColumn(),
      SalesColumn(),
      // CACColumn(),
      SCRColumn(),
      FCRColumn(),
      BTSColumn(),
      cohortColumn(false),
      BTSDColumn(),
      SUTSDColumn(),
      RevenueColumn(),
      CashColumn(),
      acvColumn(),
      // ROIColumn(),
      ProfitColumn(),
      PPBColumn(),
      EPCColumn(false),
      EPVColumn(),
      EPLColumn(),
      EPAColumn(),
      EPBColumn(),
      AccountCurrencyColumn(),
    ];
  } else if (typeDashboard === 3) {
    console.log("entra al case 3");
    return [
      dateColumn(time_Zone),
      InvColumn(),
      ImpColumn(),
      cpmColumn(),
      reachColumn(),
      frecColumn(),
      ClicColumn(),
      ClicksOrganicColumn(),
      cpcColumn(),
      ctrColumn(),
      viewColumn(),
      leadColumn(),
      cplColumn(),
      lcrColumn(),
      atColumn(),
      cpatColumn(),
      atrColumn(),
      ctaColumn(false),
      LTAColumn(),
      SLTCKColumn(false),
      CKLColumn(),
      CPCKLColumn(),
      CKORColumn(),
      SalesColumn(),
      CACColumn(),
      SPCRColumn(false),
      CKCRColumn(),
      FCRColumn(),
      cohortColumn(false),
      RevenueColumn(),
      CashColumn(),
      acvColumn(),
      ProfitColumn(),
      // CRColumn(),
      EPCColumn(false),
      EPVColumn(),
      EPLColumn(),
      EPAColumn(),
      // SPVColumn(),
      // ROIColumn(),
      AccountCurrencyColumn(),
    ];
  } else if (typeDashboard === 4) {
    console.log("entra al case 4");
    return [
      dateColumn(time_Zone),
      InvColumn(),
      ImpColumn(),
      cpmColumn(),
      reachColumn(),
      frecColumn(),
      ClicColumn(),
      ClicksOrganicColumn(),
      cpcColumn(),
      ctrColumn(),
      viewColumn(),
      leadColumn(),
      cplColumn(),
      lcrColumn(),
      atColumn(),
      cpatColumn(),
      atrColumn(),
      ctaColumn(false),
      LTAColumn(),
      SLTCKColumn(false),
      CKLColumn(),
      CPCKLColumn(),
      CKORColumn(),
      SalesColumn(),
      CACColumn(),
      SPCRColumn(false),
      CKCRColumn(),
      FCRColumn(),
      cohortColumn(false),
      RevenueColumn(),
      CashColumn(),
      acvColumn(),
      ProfitColumn(),
      // CRColumn(),
      EPCColumn(false),
      EPVColumn(),
      EPLColumn(),
      EPAColumn(),
      // SPVColumn(),
      // ROIColumn(),
      AccountCurrencyColumn(),
    ];
  } else if (typeDashboard === 5) {
    console.log("entra al case 5");
    return [
      dateColumn(time_Zone),
      InvColumn(),
      ImpColumn(),
      cpmColumn(),
      reachColumn(),
      frecColumn(),
      ClicColumn(),
      ClicksOrganicColumn(),
      cpcColumn(),
      ctrColumn(),
      // SPVColumn(),
      viewColumn(),
      ctaColumn(true),
      CKLColumn(),
      SLTCKColumn(true),
      CPCKLColumn(),
      CKORColumn(),
      SalesColumn(),
      CACColumn(),
      FCRColumn(),
      SPCRColumn(true),
      CKCRColumn(),
      cohortColumn(true),
      USColumn(),
      UCRColumn(),
      DWSColumn(),
      DWCRColumn(),
      BColumn(),
      BRColumn(),
      RevenueColumn(),
      CashColumn(),
      acvColumn(),
      ProfitColumn(),
      EPCColumn(true),
      EPVColumn(),
    ];
  }
};
