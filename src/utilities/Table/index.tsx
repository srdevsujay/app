import MaterialTable from "material-table";

const GeneralTable = ({
  data,
  columns,
  pageSizeOptions,
  maxBodyHeight,
  pageSize,
}: any) => {
  return (
    <div className="tables">
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
    </div>
  );
};

export default GeneralTable;
