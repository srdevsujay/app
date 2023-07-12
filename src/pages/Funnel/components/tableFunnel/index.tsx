import MaterialTable, { MTableHeader, MTableToolbar } from "material-table";
import { useContext, useEffect, useState } from "react";
import { Table } from "../../../../styled-components/Table/index";
import "../../../../styled-components/style.css";
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";
import "../../../../styled-components/style.css";
import { Chip } from "@material-ui/core";
import _ from "lodash";
import { useAppSelector } from "../../../../hooks/appDispatch";
import { FormatNumber } from "../../../../utilities/FormatNumber";

interface DataObject {
  [key: string]: number;
}

const FunnelTable = ({
  data,
  columns,
  pageSizeOptions,
  maxBodyHeight,
  pageSize,
}: any) => {
  const { theme } = useContext(ThemeContext);
  const { dataFilter: filterJSON, dataFunnel }: any = useAppSelector(
    (state) => state.dashboard
  );

  const [currentTotalColumns, setCurrentTotalColumns] = useState<any>([]);

  const tableStyles = {
    backgroundColor: theme.background,
    color: theme.text,
    // Agrega más estilos según sea necesario
  };

  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);

  // con esto podemos mirar la data real del funnel que le esta pasando
  // const dataTotal = () => {
  //   data.map((total: any) => {
  //     console.log("totalFunnel--", total);
  //   });
  //   // spend: _.sumBy(tempGroup, "spend"),
  // };

  // useEffect(() => {
  //   dataTotal();
  // }, []);
  const [currentDataFunnel, setCurrentDataFunnel] = useState([]);
  useEffect(() => {
    console.log("dataFilterDatas", data);
    if (data.length === 0) {
      const cloneData = structuredClone(data);
      setCurrentDataFunnel(cloneData);
      setCurrentTotalColumns([]);
      console.log("dataFilterDatas2", Array.isArray(data));
      return;
    }
    const keys = _.union(...data?.map(Object.keys));
    const cloneData = structuredClone(data);
    setCurrentDataFunnel(cloneData);
    console.log("DataColunscurrent", cloneData);
    console.log("DataColunscurrentkeys", keys);
    // Sumar las propiedades de los objetos separados por clave
    const sumByProperties: Record<string, number> = cloneData.reduce(
      (accumulator: any, obj: any) => {
        keys.forEach((key: any) => {
          if (typeof obj[key] === "number") {
            accumulator[key] = (accumulator[key] || 0) + obj[key];
          }
        });
        return accumulator;
      },
      {}
    );

    const filters = JSON.parse(filterJSON);
    console.log("filters", filters);
    const currentFunnel: any = {};
    if (filters?.length > 0) {
      filters.map(({ field, name, checkbox }: any) => {
        if (field in sumByProperties) {
          currentFunnel[field] = {
            field,
            name,
            checkbox,
            total: sumByProperties[field],
          };
        }
      });
    }
    const newObject = {
      AFecha: {
        field: "Fecha",
        name: "Total",
        checkbox: true,
        total: "Total",
      },
    };
    const updatedFunnel = Object.assign({}, newObject, currentFunnel);
    console.log("currentFunnel---", Object.values(updatedFunnel));
    setCurrentTotalColumns(Object.values(updatedFunnel));
  }, [data, filterJSON]);
  console.log("currentDataFunnel", currentDataFunnel.length);
  console.log("currentTotalColumns.length", currentTotalColumns.length);
  console.log("dataFunnel", dataFunnel.length);

  return (
    <Table
      className={themeState === true || themeState === "true" ? "tables" : ""}
      position="relative"
    >
      <MaterialTable
        title=""
        data={currentDataFunnel}
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
        components={{
          Header: (props, i) => (
            <>
              <MTableHeader {...props} />
              <thead key={i} className="MuiTableHead-root prueba-css">
                <tr
                  className="MuiTableRow-root MuiTableRow-head backgroundTotal"
                  style={{ padding: "0px 10px" }}
                  key={i}
                >
                  {dataFunnel.length === 0
                    ? ""
                    : currentTotalColumns.map((sum: any) => {
                        // console.log("summmmm", sum.name.substring(0, 1));
                        if (sum.checkbox === true) {
                          if (sum.name.substring(0, 1) === "$") {
                            return (
                              <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft">
                                <FormatNumber number={sum.total} />
                              </th>
                            );
                          } else if (sum.name.substring(0, 1) === "%") {
                            return (
                              <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft">
                                {(sum.total * 100).toLocaleString(undefined, {
                                  style: "percent",
                                })}
                              </th>
                            );
                          } else {
                            return (
                              <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft">
                                {sum.total}
                              </th>
                            );
                          }
                        }
                      })}
                </tr>
              </thead>
            </>
          ),
        }}
      />
    </Table>
  );
};

export default FunnelTable;
