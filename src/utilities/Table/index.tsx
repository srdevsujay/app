import MaterialTable, { MTableBody } from "material-table";
import { useContext, useEffect, useState } from "react";
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
  // obtainDataPageChange,
  totalPages,
  rowsPerPage,
  setRowsPerPage,
}: any) => {
  const { theme } = useContext(ThemeContext);

  const tableStyles = {
    backgroundColor: theme.background,
    color: theme.text,
    // Agrega más estilos según sea necesario
  };

  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);

  const handleRowClick = (event: any, rowData: any) => {
    const clickedColumnClass = event.target.className;
    console.log("clickedColumnClass", clickedColumnClass);

    // Verifica si se hizo clic en la columna específica por su nombre de campo
    if (
      clickedColumnClass.includes("select-booking") ||
      clickedColumnClass.includes("dropdown-toggle")
    ) {
      // Realiza una acción específica para esa columna
      // en este caso no realizar nada para que n ose abra el popup del recorrido
    } else {
      // Acción por defecto para el clic en otras columnas
      getUserProfile(rowData, event);
    }
  };

  // const [currentPage, setCurrentPage] = useState(1);
  // const [changePage, setChangePage] = useState(0);

  // const handlePageChange = (page: any) => {
  //   const currentPage = page + 1;
  //   console.log("currentPagecurrentPage", currentPage);

  //   setCurrentPage(currentPage);
  //   // obtainDataPageChange(currentPage);
  // };

  // const handleRowsPerPageChange = (newRowsPerPage: any) => {
  //   console.log("newRowsPerPage", newRowsPerPage);
  //   setRowsPerPage(newRowsPerPage);
  //   setChangePage(1);
  // };

  // useEffect(() => {
  //   console.log("currentPage--", currentPage);
  //   console.log("changePage--", changePage);
  //   if (changePage === 0) return;
  //   console.log("currentPage-", currentPage);
  //   console.log("pageSize", rowsPerPage);
  //   obtainDataPageChange(currentPage, rowsPerPage);
  //   setCurrentPage(0);
  //   setChangePage(0);
  // }, [currentPage, changePage, rowsPerPage]);

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
          pageSize: pageSize,
          pageSizeOptions: pageSizeOptions,
          columnsButton: false,
          search: false,
          headerStyle: {
            backgroundColor: theme.background,
            color: theme.text,
            position: "sticky",
            top: 0,
          },
          maxBodyHeight: maxBodyHeight,
          emptyRowsWhenPaging: false,
          // paginationType: "stepped",
        }}
        localization={{
          pagination: {
            labelRowsSelect: "Filas",
            // labelDisplayedRows: "{from}-{to} de " + totalPages,
          },
          body: {
            emptyDataSourceMessage: "No hay Datos...",
          },
        }}
        // onRowClick={(e, rowData) => getUserProfile(rowData, e)}
        totalCount={totalPages}
        onRowClick={handleRowClick}
        // onChangePage={handlePageChange}
        // onChangeRowsPerPage={(newPageSize) => {
        //   handleRowsPerPageChange(newPageSize); // Actualiza la variable de estado del pageSize
        // }}
        style={tableStyles}
      />
    </Table>
  );
};

export default GeneralTable;
