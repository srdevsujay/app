import _ from "lodash";

export const totalPnl = (tempGroup, themeState) => {
  console.log('tempGroup', tempGroup);
  console.log('themeState', themeState);
  const dataTotal = {
    plataform: "Total",
    gastos: _.sumBy(tempGroup, 'gastos'),
    ingresos: _.sumBy(tempGroup, 'ingresos'),
    porcentajerentabilidad: _.sumBy(tempGroup, 'porcentajerentabilidad'),
    rentabilidad: _.sumBy(tempGroup, 'rentabilidad'),
    roi: _.sumBy(tempGroup, 'roi'), 
    leeds: _.sumBy(tempGroup, 'leeds'),
    bookings: _.sumBy(tempGroup, 'bookings'), 
    meetings: _.sumBy(tempGroup, 'meetings'), 
  }
  // let porcentajeIngreso;
  // tempGroup.map((tableCT, idx) => {
  //   console.log('tableCT',tableCT)
  //   if(tableCT.gastos === 0) {
  //     porcentajeIngreso = 0;
  //   } else {
  //     porcentajeIngreso += ((tableCT.gastos * 100) / dataTotal.gastos).toFixed(2);
  //   }
  // })
  // console.log('porcentajeIngreso', porcentajeIngreso);
  const tbody = document.createElement('tr'); 
  tbody.className = `MuiTableBody-root MuiTableRow-root MuiTableRow-head ${themeState === true || themeState === "true" ? "backgroundTotalDark" : "backgroundTotal"} `;
  tbody.innerHTML = `
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">Total</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">$${dataTotal.ingresos.toFixed(2)}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">100%</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">$${dataTotal.gastos.toFixed(2)}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">100%</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">$${(dataTotal.ingresos-dataTotal.gastos).toFixed(2)}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">100%</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">0.00</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.leeds.toFixed(2)}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.bookings.toFixed(2)}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.meetings.toFixed(2)}</td>
  `;
  return document.querySelector(".MuiTableHead-root")?.prepend(tbody);
}

{/* <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${(dataTotal.ingresos.toFixed(2)/(dataTotal.ingresos.toFixed(2)-dataTotal.gastos.toFixed(2))).toFixed(2)}%</td> */}

// esta va en el roi, organizar roi
// <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.ingresos/dataTotal.gastos == Infinity ? 0 : (dataTotal.ingresos/dataTotal.gastos).toFixed(2)}</td>