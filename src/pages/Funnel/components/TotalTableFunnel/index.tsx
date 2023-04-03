import _ from "lodash";

export const totalFunnel = (tempGroup: any, currentToggleTotal: any) => {
  console.log("tempGroup--", tempGroup);

  const dataTotal = {
    spend: _.sumBy(tempGroup, "spend"),
    impressions: _.sumBy(tempGroup, "impressions"),
    cpm: _.sumBy(tempGroup, "cpm"),
    reach: _.sumBy(tempGroup, "reach"),
    frequency: _.sumBy(tempGroup, "frequency"),
    clicks: _.sumBy(tempGroup, "clicks"),
    clicks_organic: _.sumBy(tempGroup, "clicks_organic"),
    cpc: _.sumBy(tempGroup, "cpc"),
    ctr: _.sumBy(tempGroup, "ctr"),
    views: _.sumBy(tempGroup, "views"),
    leeds: _.sumBy(tempGroup, "leeds"),
    CPL: _.sumBy(tempGroup, "CPL"),
    LCR: _.sumBy(tempGroup, "LCR"),
    AT: _.sumBy(tempGroup, "AT"),
    CPAT: _.sumBy(tempGroup, "CPAT"),
    ATR: _.sumBy(tempGroup, "ATR"),
    CTA: _.sumBy(tempGroup, "CTA"),
    LTA: _.sumBy(tempGroup, "LTA"),
    CKOR: _.sumBy(tempGroup, "CKOR"),
    Aps: _.sumBy(tempGroup, "Aps"),
    CPAp: _.sumBy(tempGroup, "CPAp"),
    Apr: _.sumBy(tempGroup, "Apr"),
    LTAp: _.sumBy(tempGroup, "LTAp"),
    B: _.sumBy(tempGroup, "B"),
    CPB: _.sumBy(tempGroup, "CPB"),
    BR: _.sumBy(tempGroup, "BR"),
    LTB: _.sumBy(tempGroup, "LTB"),
    ltbd: _.sumBy(tempGroup, "ltbd"),
    sales: _.sumBy(tempGroup, "sales"),
    SCR: _.sumBy(tempGroup, "SCR"),
    FCR: _.sumBy(tempGroup, "FCR"),
    BTS: _.sumBy(tempGroup, "BTS"),
    cohort: _.sumBy(tempGroup, "cohort"),
    btsd: _.sumBy(tempGroup, "btsd"),
    sutds: _.sumBy(tempGroup, "sutds"),
    revenue: _.sumBy(tempGroup, "revenue"),
    cash: _.sumBy(tempGroup, "cash"),
    ACV: _.sumBy(tempGroup, "ACV"),
    profit: _.sumBy(tempGroup, "profit"),
    PPB: _.sumBy(tempGroup, "PPB"),
    dws: _.sumBy(tempGroup, "dws"),
    EPC: _.sumBy(tempGroup, "EPC"),
    EPV: _.sumBy(tempGroup, "EPV"),
    EPL: _.sumBy(tempGroup, "EPL"),
    EPA: _.sumBy(tempGroup, "EPA"),
    EPB: _.sumBy(tempGroup, "EPB"),
    account_currency: _.sumBy(tempGroup, "account_currency"),
  };

  console.log("dataTotalFunnel", dataTotal);
  console.log("currentToggleTotal", currentToggleTotal);

  // useEffect(() => {
  //   if (searchStringDebounced.trim()) {
  //     const currentData = dataTotal.filter((item: any) =>
  //       item.name.toLowerCase().includes(searchStringDebounced.toLowerCase())
  //     );
  //     setFilteredData(currentData);
  //   } else {
  //     setFilteredData(originalData);
  //   }
  // }, [searchStringDebounced]);

  const tbody = document.createElement("tr");
  tbody.className =
    "MuiTableBody-root MuiTableRow-root MuiTableRow-head backgroundTotal";
  tbody.innerHTML = `
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">Total</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.spend.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.impressions
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.cpm.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.reach
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.frequency
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.clicks
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.clicks_organic
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.cpc.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.ctr.toFixed(
      2
    )}%</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.views
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.leeds
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.CPL.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.LCR.toFixed(
      2
    )}%</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.AT
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.CPAT.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.ATR.toFixed(
      2
    )}%</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.CTA
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.LTA.toFixed(
      2
    )}%</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.CKOR.toFixed(
      2
    )}%</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.Aps
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.CPAp.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.Apr.toFixed(
      2
    )}%</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.LTAp.toFixed(
      2
    )}%</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.B
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.CPB.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.BR.toFixed(
      2
    )}%</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.LTB.toFixed(
      2
    )}%</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.ltbd
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.sales
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.SCR.toFixed(
      2
    )}%</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.FCR.toFixed(
      2
    )}%</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.BTS.toFixed(
      2
    )}%</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.cohort
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.btsd
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.sutds
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.revenue.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.cash.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.ACV.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.profit.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.PPB.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">#${
      dataTotal.dws
    }</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.EPC.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.EPV.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.EPL.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.EPA.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.EPB.toFixed(
      2
    )}</td>
    <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.account_currency.toFixed(
      2
    )}</td>

  `;
  return document.querySelector(".MuiTableHead-root")?.prepend(tbody);
};
