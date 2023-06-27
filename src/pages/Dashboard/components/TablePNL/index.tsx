import React, { useContext, useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Bar, TableExpanded } from "../../styled-components/dashboardStyled";
import { Table } from "../../../../styled-components/Table";
import { useAppSelector } from "../../../../hooks/appDispatch";
import { platformColumn } from "../ColumnTable/platform";
import { incomeColumn } from "../ColumnTable/income";
import { expenseColumn } from "../ColumnTable/expense";
import { profitabilityColumn } from "../ColumnTable/profitability";
import { roiColumn } from "../ColumnTable/roi";
import { percentageProfitabilityColumn } from "../ColumnTable/percentageProfitability";
import { leadColumn } from "../ColumnTable/lead";
import { bookingColumn } from "../ColumnTable/booking";
import _ from "lodash";
import { click } from "@testing-library/user-event/dist/click";
import { FormatNumber } from "../../../../utilities/FormatNumber";
import { percentageIncomeColumn } from "../ColumnTable/percentageIncome";
import { percentageExpenseColumn } from "../ColumnTable/percentageExpense";
import { meetingsColumn } from "../ColumnTable/meetings";
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";
import "../../styled-components/style.css";

const TablePNL = ({ tablePnl, selectPlatform }: any) => {
  const dashboardMain = useAppSelector((state) => state.dashboard.dataPNL);
  const [currentTotal, setCurrentTotal] = useState<any>(null);

  const columnsTablePNL = [
    platformColumn(dashboardMain),
    incomeColumn(dashboardMain),
    percentageIncomeColumn(dashboardMain, currentTotal, selectPlatform),
    expenseColumn(dashboardMain),
    percentageExpenseColumn(dashboardMain, currentTotal, selectPlatform),
    profitabilityColumn(dashboardMain),
    percentageProfitabilityColumn(dashboardMain, currentTotal),
    roiColumn(dashboardMain),
    leadColumn(dashboardMain),
    bookingColumn(dashboardMain),
    meetingsColumn(dashboardMain),
  ];

  useEffect(() => {
    if (!tablePnl) return;
    const dataTotal = {
      gastos: _.sumBy(tablePnl, "gastos"),
      ingresos: _.sumBy(tablePnl, "ingresos"),
    };
    setCurrentTotal(dataTotal);
  }, [tablePnl]);

  const { theme } = useContext(ThemeContext);

  const tableStyles = {
    backgroundColor: theme.background,
    color: theme.text,
    // Agrega más estilos según sea necesario
  };

  const currentDetailPanel = (dataExpandedPNL: any) => {
    const expanded: any[] = dashboardMain.filter((elem: any) => {
      return elem.plataform === dataExpandedPNL.plataform;
    });
    console.log("expanded", expanded);
    const unifiedByCt = _(expanded)
      .groupBy("ct")
      .map((platform, ct) => ({
        ct: ct,
        bookings: _.sumBy(platform, "bookings"),
        gastos: _.sumBy(platform, "gastos"),
        ingresos: _.sumBy(platform, "ingresos"),
        leeds: _.sumBy(platform, "leeds"),
        porcentajerentabilidad: _.sumBy(platform, "porcentajerentabilidad"),
        rentabilidad: _.sumBy(platform, "rentabilidad"),
        roi: _.sumBy(platform, "roi"),
        meetings: _.sumBy(platform, "meetings"),
      }))
      .value();
    console.log("unifiedByCt", unifiedByCt);
    console.log("selectPlatform", selectPlatform);

    const dataTotal = {
      plataform: "Total",
      gastos: _.sumBy(selectPlatform, "gastos"),
      ingresos: _.sumBy(selectPlatform, "ingresos"),
    };

    console.log("dataTotal", dataTotal);

    return (
      <>
        <TableExpanded>
          {/* <thead>
            <tr className="backgroundTotal">
              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-Title-Helvetica">
                Fuente
              </td>
              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-Title-Helvetica">
                Ingresos
              </td>
              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-Title-Helvetica">
                %Ingresos
              </td>
              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-Title-Helvetica">
                Gastos
              </td>
              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-Title-Helvetica">
                %Gastos
              </td>
            </tr>
          </thead> */}
          <tbody
            style={{
              fontSize: 20,
              textAlign: "center",
              // height: 100,
              width: "100%",
              display: "inline-table",
            }}
            className="MuiTableBody-root css-1xnox0e"
          >
            {unifiedByCt.map((tableCT: any, idx: number) => (
              <tr
                className="MuiTableRow-root expanded-column css-1gqug66"
                key={idx}
              >
                <td
                  className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica"
                  style={{ width: "9.1%" }}
                >
                  {tableCT.ct}
                </td>
                <td
                  className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica"
                  style={{ width: "9%" }}
                >
                  <FormatNumber number={tableCT.ingresos} />
                </td>
                <td
                  className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica"
                  style={{ width: "9%" }}
                >
                  {`${
                    dataTotal.ingresos === 0
                      ? 0
                      : ((tableCT.ingresos * 100) / dataTotal.ingresos).toFixed(
                          2
                        )
                  }%
                  `}
                </td>
                <td
                  className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica"
                  style={{ width: "9%" }}
                >
                  {`${tableCT?.gastos.toFixed(2)}`}
                </td>
                <td
                  className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica"
                  style={{ paddingLeft: "0px", width: "7.7%" }}
                >
                  {`${
                    dataTotal.gastos === 0
                      ? 0
                      : ((tableCT.gastos * 100) / dataTotal.gastos).toFixed(2)
                  }%
                  `}
                </td>
                <td
                  className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica"
                  style={{ width: "11.6%" }}
                >
                  {`${tableCT?.rentabilidad.toFixed(2)}`}
                </td>
                <td
                  className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica"
                  style={{ width: "11.5%" }}
                >
                  {`${
                    tableCT.porcentajerentabilidad === 0
                      ? 0
                      : tableCT?.porcentajerentabilidad.toFixed(2)
                  }%
                  `}
                </td>
                <td
                  className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica"
                  style={{ width: "6.3%" }}
                >
                  {`${tableCT?.roi.toFixed(2)}`}
                </td>
                <td
                  className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica"
                  style={{ width: "7.7%" }}
                >
                  {`${tableCT?.leeds.toFixed(2)}`}
                </td>
                <td
                  className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica"
                  style={{ width: "10.1%" }}
                >
                  {`${tableCT?.bookings.toFixed(2)}`}
                </td>
                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica">
                  {`${tableCT?.meetings.toFixed(2)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </TableExpanded>
      </>
    );
  };

  console.log("tablePnl", tablePnl);
  console.log("selectPlatform", selectPlatform);
  console.log("selectPlatform.length", selectPlatform.length);

  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);

  return (
    <Table
      className={themeState === true || themeState === "true" ? "tables" : ""}
    >
      <MaterialTable
        title=""
        data={selectPlatform.length === 0 ? tablePnl : selectPlatform}
        columns={columnsTablePNL}
        options={{
          columnsButton: false,
          search: false,
          pageSizeOptions: [10, 25, 50],
          // headerStyle: { position: "sticky", top: 0 },
          maxBodyHeight: "30vh",
          headerStyle: {
            backgroundColor: theme.background,
            color: theme.text,
            position: "sticky",
            top: 0,
          },
          emptyRowsWhenPaging: false,
        }}
        localization={{
          pagination: {
            labelRowsSelect: "Filas",
          },
          body: {
            emptyDataSourceMessage: "No hay Datos...",
          },
        }}
        // onRowClick={(e, rowData) => {
        //   currentDetailPanel(rowData);
        // }}
        onRowClick={(event, rowData, togglePanel: any) => togglePanel()}
        detailPanel={currentDetailPanel}
        style={tableStyles}
      />
    </Table>
  );
};

export default TablePNL;
