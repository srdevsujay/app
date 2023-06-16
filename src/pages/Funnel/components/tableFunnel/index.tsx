import MaterialTable from "material-table";
import { useContext, useEffect } from "react";
import { Table } from "../../../../styled-components/Table/index";
import "../../../../styled-components/style.css";
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";

const FunnelTable = ({
  data,
  columns,
  pageSizeOptions,
  maxBodyHeight,
  pageSize,
}: any) => {
  const { theme } = useContext(ThemeContext);

  const tableStyles = {
    backgroundColor: theme.background,
    color: theme.text,
    // Agrega más estilos según sea necesario
  };

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
          headerStyle: {
            backgroundColor: theme.background,
            color: theme.text,
            position: "sticky",
            top: 0,
          },
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
        style={tableStyles}
      />
    </Table>
  );
};

export default FunnelTable;
