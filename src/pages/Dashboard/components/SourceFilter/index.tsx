import React, { useEffect, useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import _ from "lodash";
import { FilterSource } from "../../styled-components/dashboardStyled";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SourceFilter = ({
  dashboardMain,
  groupPlataform,
  setGroupPlataform,
  setSelectPlatform,
}: any) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [uniquePlataform, setUniquePlataform] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    // setTablePnl(dashboardMain);
    groupByPNL();
    getPlataform();
  }, [dashboardMain]);

  const getPlataform = () => {
    let unicos: any;
    let personasMap = dashboardMain.map((item: any) => {
      return item.plataform;
    });
    unicos = new Set(...[personasMap]);
    setPersonName([...unicos]);
    setUniquePlataform([...unicos]);
  };

  useEffect(() => {
    funnelfilter(personName);
  }, [personName]);

  const funnelfilter = (name: any) => {
    console.log("personName", name);
    const tempSelectPlatform = groupPlataform.filter((platform: any) =>
      name.includes(platform.plataform)
    );
    setSelectPlatform(tempSelectPlatform);
  };

  const groupByPNL = () => {
    if (dashboardMain.length > 0) {
      // setTotalAmmount([]);
      const tempGroup = _(dashboardMain)
        .groupBy("plataform")
        .map((platform, id) => ({
          plataform: id,
          gastos: _.sumBy(platform, "gastos"),
          ingresos: _.sumBy(platform, "ingresos"),
          porcentajerentabilidad: _.sumBy(platform, "porcentajerentabilidad"),
          rentabilidad: _.sumBy(platform, "rentabilidad"),
          roi: _.sumBy(platform, "roi"),
          leeds: _.sumBy(platform, "leeds"),
          bookings: _.sumBy(platform, "bookings"),
        }))
        .value();
      setGroupPlataform(tempGroup);
      // console.log('tempGroup', tempGroup);
      // const dataTotal = {
      //   plataform: "Total",
      //   gastos: _.sumBy(tempGroup, 'gastos'),
      //   ingresos: _.sumBy(tempGroup, 'ingresos'),
      //   porcentajerentabilidad: _.sumBy(tempGroup, 'porcentajerentabilidad'),
      //   rentabilidad: _.sumBy(tempGroup, 'rentabilidad'),
      //   roi: _.sumBy(tempGroup, 'roi'),
      //   leeds: _.sumBy(tempGroup, 'leeds'),
      //   bookings: _.sumBy(tempGroup, 'bookings'),
      // }
      console.log("dataTotal", tempGroup);
      // setTotalIncome(dataTotal.ingresos.toFixed(2));
      // setTotalCosts(dataTotal.gastos.toFixed(2));
      // setRentabilidadTotal(dataTotal.ingresos-dataTotal.gastos);
      // setPorcentajeRentabilidadTotal(rentabilidadTotal/dataTotal.ingresos);
      // setRoiTotal(dataTotal.ingresos/dataTotal.gastos);
      // // if(currentTotal === true)  {
      // const tbody = document.createElement('tr');
      // tbody.className = "MuiTableBody-root MuiTableRow-root MuiTableRow-head backgorundTotal";
      // tbody.innerHTML = `
      //     <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">Total</td>
      //     <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.ingresos.toFixed(2)}</td>
      //     <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${dataTotal.gastos.toFixed(2)}</td>
      //     <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">$${(dataTotal.ingresos-dataTotal.gastos).toFixed(2)}</td>
      //     <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${(dataTotal.ingresos.toFixed(2)/(dataTotal.ingresos.toFixed(2)-dataTotal.gastos.toFixed(2))).toFixed(2)}%</td>
      //     <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.ingresos/dataTotal.gastos == Infinity ? 0 : (dataTotal.ingresos/dataTotal.gastos).toFixed(2)}</td>
      //     <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.leeds.toFixed(2)}</td>
      //     <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${dataTotal.bookings.toFixed(2)}</td>
      // `;
      // document.querySelector(".MuiTableHead-root").prepend(tbody);
      return;
      //   setCurrentTotal(false);
      // }
    }
  };

  return (
    <FilterSource>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Selecciona tu fuente</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {uniquePlataform.map((pnl) => (
            <MenuItem key={pnl} value={pnl}>
              <Checkbox checked={personName.indexOf(pnl) > -1} />
              <ListItemText primary={pnl} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FilterSource>
  );
};

export default SourceFilter;
