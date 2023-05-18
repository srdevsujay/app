import MaterialTable from "material-table";
import { useEffect } from "react";
import { Table } from "../../../../styled-components/Table/index";
import "../../../../styled-components/style.css";

const FunnelTable = ({
  data,
  columns,
  pageSizeOptions,
  maxBodyHeight,
  pageSize,
}: any) => {
  return (
    <Table className="tables" position="relative">
      <MaterialTable
        title=""
        data={data}
        columns={columns}
        options={{
          columnsButton: false,
          search: false,
          pageSizeOptions: pageSizeOptions,
          headerStyle: { position: "sticky", top: 0 },
          maxBodyHeight: maxBodyHeight,
          pageSize: pageSize,
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

export default FunnelTable;
