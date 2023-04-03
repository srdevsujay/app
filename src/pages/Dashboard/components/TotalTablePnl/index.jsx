import _ from "lodash";

export const totalPnl = (tempGroup) => {
  const dataTotal = {
    plataform: "Total",
    gastos: _.sumBy(tempGroup, 'gastos'),
    ingresos: _.sumBy(tempGroup, 'ingresos'),
    porcentajerentabilidad: _.sumBy(tempGroup, 'porcentajerentabilidad'),
    rentabilidad: _.sumBy(tempGroup, 'rentabilidad'),
    roi: _.sumBy(tempGroup, 'roi'),
    leeds: _.sumBy(tempGroup, 'leeds'),
    bookings: _.sumBy(tempGroup, 'bookings'),
  }
  
  const tbody = document.createElement('tr');
  tbody.className = "MuiTableBody-root MuiTableRow-root MuiTableRow-head backgroundTotal";
  tbody.innerHTML = `
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">Total</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.ingresos.toFixed(2)}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.gastos.toFixed(2)}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${(dataTotal.ingresos-dataTotal.gastos).toFixed(2)}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${(dataTotal.ingresos.toFixed(2)/(dataTotal.ingresos.toFixed(2)-dataTotal.gastos.toFixed(2))).toFixed(2)}%</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.ingresos/dataTotal.gastos == Infinity ? 0 : (dataTotal.ingresos/dataTotal.gastos).toFixed(2)}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.leeds.toFixed(2)}</td>
  <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.bookings.toFixed(2)}</td>
  `;
  return document.querySelector(".MuiTableHead-root")?.prepend(tbody);
}