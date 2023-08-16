import _ from "lodash";

export const totalFunnel = (tempGroup: any, filters: any, themeState: any) => {
  const dataTotal: any = {
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
    CKL: _.sumBy(tempGroup, "CKL"),
    SLTCK: _.sumBy(tempGroup, "SLTCK"),
    CPCKL: _.sumBy(tempGroup, "CPCKL"),
    CAC: _.sumBy(tempGroup, "CAC"),
    SPCR: _.sumBy(tempGroup, "SPCR"),
    CKCR: _.sumBy(tempGroup, "CKCR"),
    us: _.sumBy(tempGroup, "us"),
    UCR: _.sumBy(tempGroup, "UCR"),
    account_currency: _.sumBy(tempGroup, "account_currency"),
  };

  // {field: 'date_start', name: 'FECHA', checkbox: true}

  // {field: 'CPCKL', name: '#CPCKL', checkbox: false}
  // 15
  // :
  // {field: '', name: '$CAC', checkbox: true}
  // 18
  // :
  // {field: '', name: '%SPCR', checkbox: true}
  // 20
  // :
  // {field: '', name: '%CKCR', checkbox: true}
  // 21
  // :
  // {field: '', name: '#US', checkbox: true}
  // 23
  // :
  // {field: '', name: '%UCR', checkbox: true}

  const arrDataTotal = [];
  arrDataTotal.push(dataTotal);

  console.log("arrDataTotal---", arrDataTotal);
  console.log("filters---", filters);
  const currentFunnel: any = {};
  if (filters?.length > 0) {
    filters.map(({ field, name, checkbox }: any) => {
      if (field in dataTotal) {
        currentFunnel[field] = {
          field,
          name,
          checkbox,
          total: dataTotal[field],
        };
      }
    });
  }

  const tbody = document.createElement("tr");
  tbody.className = `MuiTableBody-root MuiTableRow-root MuiTableRow-head ${
    themeState === true || themeState === "true"
      ? "backgroundTotalDark"
      : "backgroundTotal"
  } `;

  const createTableCell = (text: string) => {
    const td = document.createElement("td");
    td.classList.add(
      "MuiTableCell-root",
      "MuiTableCell-body",
      "MuiTableCell-alignLeft"
    );
    td.textContent = text;
    return td;
  };

  console.log("currentFunnel", currentFunnel);
  console.log("currentFunnel?.spend?.checkbox", currentFunnel?.spend?.checkbox);

  tbody.appendChild(createTableCell("Total"));
  currentFunnel?.date_start?.checkbox &&
    tbody.appendChild(createTableCell(`$${currentFunnel?.date_start}`));

  currentFunnel?.spend?.checkbox &&
    currentFunnel?.spend?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`$${currentFunnel?.spend?.total.toFixed(2)}`)
    );

  currentFunnel?.impressions?.checkbox &&
    currentFunnel?.impressions?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.impressions?.total}`));

  currentFunnel?.cpm?.checkbox &&
    currentFunnel?.cpm?.total &&
    tbody.appendChild(
      createTableCell(`$${currentFunnel?.cpm?.total.toFixed(2)}`)
    );

  currentFunnel?.reach?.checkbox &&
    currentFunnel?.reach?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.reach?.total}`));

  currentFunnel?.frequency?.checkbox &&
    currentFunnel?.frequency?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.frequency?.total}`));
  currentFunnel?.clicks?.checkbox &&
    currentFunnel?.clicks?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.clicks?.total}`));
  currentFunnel?.clicks_organic?.checkbox &&
    currentFunnel?.clicks_organic?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.clicks_organic?.total}`)
    );
  currentFunnel?.cpc?.checkbox &&
    currentFunnel?.cpc?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`$${currentFunnel?.cpc?.total.toFixed(2)}`)
    );
  currentFunnel?.ctr?.checkbox &&
    currentFunnel?.ctr?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.ctr?.total.toFixed(2)}%`)
    );
  currentFunnel?.views?.checkbox &&
    currentFunnel?.views?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.views?.total}`));
  currentFunnel?.leeds?.checkbox &&
    currentFunnel?.leeds?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.leeds?.total}`));
  currentFunnel?.CPL?.checkbox &&
    currentFunnel?.CPL?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`$${currentFunnel?.CPL?.total.toFixed(2)}`)
    );
  currentFunnel?.LCR?.checkbox &&
    currentFunnel?.LCR?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.LCR?.total.toFixed(2)}%`)
    );
  currentFunnel?.AT?.checkbox &&
    currentFunnel?.AT?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.AT?.total}`));
  currentFunnel?.CPAT?.checkbox &&
    currentFunnel?.CPAT?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`$${currentFunnel?.CPAT?.total.toFixed(2)}`)
    );
  currentFunnel?.ATR?.checkbox &&
    currentFunnel?.ATR?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.ATR?.total.toFixed(2)}%`)
    );
  currentFunnel?.CTA?.checkbox &&
    currentFunnel?.CTA?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.CTA?.total}`));
  currentFunnel?.LTA?.checkbox &&
    currentFunnel?.LTA?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.LTA?.total.toFixed(2)}%`)
    );
  currentFunnel?.CKOR?.checkbox &&
    currentFunnel?.CKOR?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.CKOR?.total.toFixed(2)}%`)
    );
  currentFunnel?.Aps?.checkbox &&
    currentFunnel?.Aps?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.Aps?.total}`));
  currentFunnel?.CPAp?.checkbox &&
    currentFunnel?.CPAp?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`$${currentFunnel?.CPAp?.total.toFixed(2)}`)
    );
  currentFunnel?.Apr?.checkbox &&
    currentFunnel?.Apr?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.Apr?.total.toFixed(2)}%`)
    );
  currentFunnel?.LTAp?.checkbox &&
    currentFunnel?.LTAp?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.LTAp?.total.toFixed(2)}%`)
    );
  currentFunnel?.B?.checkbox &&
    currentFunnel?.B?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.B?.total}`));
  currentFunnel?.CPB?.checkbox &&
    currentFunnel?.CPB?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`$${currentFunnel?.CPB?.total.toFixed(2)}`)
    );
  currentFunnel?.BR?.checkbox &&
    currentFunnel?.BR?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.BR?.total.toFixed(2)}%`)
    );
  currentFunnel?.LTB?.checkbox &&
    currentFunnel?.LTB?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.LTB?.total.toFixed(2)}%`)
    );
  currentFunnel?.ltbd?.checkbox &&
    currentFunnel?.ltbd?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.ltbd?.total}`));
  currentFunnel?.sales?.checkbox &&
    currentFunnel?.sales?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.sales?.total}`));
  currentFunnel?.SCR?.checkbox &&
    currentFunnel?.SCR?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.SCR?.total.toFixed(2)}%`)
    );
  currentFunnel?.FCR?.checkbox &&
    currentFunnel?.FCR?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.FCR?.total.toFixed(2)}%`)
    );
  currentFunnel?.BTS?.checkbox &&
    currentFunnel?.BTS?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.BTS?.total.toFixed(2)}%`)
    );
  currentFunnel?.cohort?.checkbox &&
    currentFunnel?.cohort?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.cohort?.total}`));
  currentFunnel?.btsd?.checkbox &&
    currentFunnel?.btsd?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.btsd?.total}`));

  currentFunnel?.CPCKL?.checkbox &&
    currentFunnel?.CPCKL?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.CPCKL?.total}`));
  currentFunnel?.CAC?.checkbox &&
    currentFunnel?.CAC?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.CAC?.total}`));
  currentFunnel?.SPCR?.checkbox &&
    currentFunnel?.SPCR?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.SPCR?.total}`));
  currentFunnel?.CKCR?.checkbox &&
    currentFunnel?.CKCR?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.CKCR?.total}`));
  currentFunnel?.us?.checkbox &&
    currentFunnel?.us?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.us?.total}`));
  currentFunnel?.UCR?.checkbox &&
    currentFunnel?.UCR?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.UCR?.total}`));
  currentFunnel?.account_currency?.checkbox &&
    currentFunnel?.account_currency?.total >= 0 &&
    tbody.appendChild(
      createTableCell(`${currentFunnel?.account_currency?.total}`)
    );

  currentFunnel?.sutds?.checkbox &&
    currentFunnel?.sutds?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.sutds?.total}`));

  currentFunnel?.revenue?.checkbox &&
    currentFunnel?.revenue?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.revenue?.total}`));

  currentFunnel?.cash?.checkbox &&
    currentFunnel?.cash?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.cash?.total}`));

  currentFunnel?.ACV?.checkbox &&
    currentFunnel?.ACV?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.ACV?.total}`));

  currentFunnel?.profit?.checkbox &&
    currentFunnel?.profit?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.profit?.total}`));

  currentFunnel?.EPA?.checkbox &&
    currentFunnel?.EPA?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.EPA?.total}`));

  currentFunnel?.EPB?.checkbox &&
    currentFunnel?.EPB?.total >= 0 &&
    tbody.appendChild(createTableCell(`${currentFunnel?.EPB?.total}`));

  return document.querySelector(".MuiTableHead-root")?.prepend(tbody);
};
