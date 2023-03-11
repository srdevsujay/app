import React from "react";
import MaterialTable from "material-table";
import { Bar } from "../../styled-components/dashboardStyled";
import { Table } from "../../../../styled-components/Table";

const TablePNL = ({ tablePnl, columnsTablePNL, selectPlatform }: any) => {
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
