import React from "react";
import MaterialTable from "material-table";
import { Bar } from "../../styled-components/dashboardStyled";
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

const TablePNL = ({ tablePnl, selectPlatform }: any) => {
  const dashboardMain = useAppSelector((state) => state.dashboard.dataPNL);

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
      />
    </Table>
  );
};

export default TablePNL;
