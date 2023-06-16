import MaterialTable from "material-table";
import { useContext, useEffect } from "react";
import { Table } from "../../styled-components/Table/index";
import "../../styled-components/style.css";
import { ThemeContext } from "../theme/ThemeContext";

const GeneralTable = ({
  data,
  columns,
  pageSizeOptions,
  maxBodyHeight,
  pageSize,
  getUserProfile,
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
        }}
        localization={{
          pagination: {
            labelRowsSelect: "Filas",
          },
          body: {
            emptyDataSourceMessage: "No hay Datos...",
          },
        }}
        onRowClick={(e, rowData) => getUserProfile(rowData, e)}
        style={tableStyles}
      />
    </Table>
  );
};

export default GeneralTable;
