import { useContext } from "react";
import MaterialTable from "material-table";
import { Table } from "../../styled-components/Table/index";
import "../../styled-components/style.css";
import { ThemeContext } from "../theme/ThemeContext";

const NormalTable = ({
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

  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);

  return (
    <Table
      className={themeState === true || themeState === "true" ? "tables" : ""}
      position="relative"
    >
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
        style={tableStyles}
      />
    </Table>
  );
};

export default NormalTable;
