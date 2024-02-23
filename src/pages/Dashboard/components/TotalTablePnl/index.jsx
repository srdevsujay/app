import _ from "lodash";

export const totalPnl = (tempGroup, themeState, theme) => {
  console.log('tempGroup', tempGroup);
  console.log('themeState', themeState);
  console.log('themeState--theme', theme);
  const dataTotal = {
    plataform: "Total",
    gastos: _.sumBy(tempGroup, 'gastos'),
    ingresos: _.sumBy(tempGroup, 'ingresos'),
    porcentajerentabilidad: _.sumBy(tempGroup, 'porcentajerentabilidad'),
    rentabilidad: (_.sumBy(tempGroup, 'ingresos'))-Math.abs((_.sumBy(tempGroup, 'rentabilidad'))),
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
  console.log('dataTotal.ingresos.toFixed(2)', dataTotal.ingresos/dataTotal.gastos);
  const tbody = document.createElement('tr'); 
  tbody.className = `MuiTableBody-root MuiTableRow-root MuiTableRow-head ${themeState === true || themeState === "true" || theme?.text === "#DDDDDD" ? "backgroundTotalDark" : "backgroundTotal"} `;
  tbody.innerHTML = `
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">Total</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.ingresos.toLocaleString()}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.ingresos.toFixed(2) > 0 ? "100%" : "0.00%"}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.gastos.toLocaleString()}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.gastos.toFixed(2) > 0 ? "100%" : "0.00%"}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.rentabilidad.toLocaleString()}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.rentabilidad.toFixed(2) > 0 ? "100%" : "0.00%"}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.ingresos/dataTotal.gastos == Infinity ? "0.00" : (dataTotal.ingresos/dataTotal.gastos).toFixed(2)}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.leeds.toLocaleString()}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.bookings.toLocaleString()}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.meetings.toLocaleString()}</td>
  `;
  return document.querySelector(".MuiTableHead-root")?.prepend(tbody);
}

// Rentabilidad
{/* <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${(dataTotal.ingresos-dataTotal.gastos).toFixed(2)}</td> */}
{/* <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${(dataTotal.ingresos.toFixed(2)/(dataTotal.ingresos.toFixed(2)-dataTotal.gastos.toFixed(2))).toFixed(2)}%</td> */}

// esta va en el roi, organizar roi
// <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft font-Title-Helvetica">${dataTotal.ingresos/dataTotal.gastos == Infinity ? 0 : (dataTotal.ingresos/dataTotal.gastos).toFixed(2)}</td>