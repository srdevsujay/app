import React, { useEffect, useState } from "react";
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

const TablePNL = ({ tablePnl, selectPlatform }: any) => {
  const dashboardMain = useAppSelector((state) => state.dashboard.dataPNL);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const columnsTablePNL = [
    platformColumn(dashboardMain),
    incomeColumn(dashboardMain),
    expenseColumn(dashboardMain),
    profitabilityColumn(dashboardMain),
    percentageProfitabilityColumn(dashboardMain),
    roiColumn(dashboardMain),
    leadColumn(dashboardMain),
    bookingColumn(dashboardMain),
  ];

  const currentDetailPanel = (dataExpandedPNL: any) => {
    console.log("rowData", dataExpandedPNL);
    console.log("dashboardMain", dashboardMain);
    const currentExpanded: any[] = dashboardMain.filter((elem: any) => {
      return elem.plataform === dataExpandedPNL.plataform;
    });
    console.log("currentExpanded", currentExpanded);
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
          <thead>
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
          </thead>
          <tbody
            style={{
              fontSize: 20,
              textAlign: "center",
              height: 100,
              width: "100%",
              display: "inline-table",
            }}
            className="MuiTableBody-root css-1xnox0e"
          >
            {currentExpanded.map((tableCT: any, idx: number) => (
              <tr
                className="MuiTableRow-root expanded-column css-1gqug66"
                key={idx}
              >
                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica">
                  {tableCT.ct}
                </td>
                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica">
                  <FormatNumber number={tableCT.ingresos} />
                </td>
                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica">
                  {`${((tableCT.ingresos * 100) / dataTotal.ingresos).toFixed(
                    2
                  )}%`}
                </td>
                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica">
                  <FormatNumber number={tableCT.gastos} />
                </td>
                <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-paddingNone MuiTableCell-sizeMedium css-1361h17 font-body-Helvetica">
                  {`${((tableCT.gastos * 100) / dataTotal.gastos).toFixed(2)}%`}
                </td>
              </tr>
            ))}
          </tbody>
        </TableExpanded>
      </>
    );
  };

  return (
    <Table className="tables">
      <MaterialTable
        title=""
        data={selectPlatform.length === 0 ? tablePnl : selectPlatform}
        columns={columnsTablePNL}
        options={{
          columnsButton: false,
          search: false,
          pageSizeOptions: [10, 25, 50, 100, 100],
          headerStyle: { position: "sticky", top: 0 },
          maxBodyHeight: "40vh",
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

        // detailPanel={[
        //   {
        //     render: () => currentDetailPanel as any,
        //     onClick: (rowData: any) => {
        //       console.log('e.g.', rowData)
        //     },
        // }]}
      />
    </Table>
  );
};

export default TablePNL;
