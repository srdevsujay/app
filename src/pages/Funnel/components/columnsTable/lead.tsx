import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const leadColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              Leads: Cantidad de clientes potenciales que dejan sus datos en un
              formulario.
            </span>
            <br />
            <span>
              Leads: Number of potential customers who leave their information
              in a form.
            </span>
          </>
        }
        placement="top"
      >
        <span>#Leads</span>
      </Tooltip>
    ),
    field: "leeds",
    name: "#Leads",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.leeds == 0
            ? "back-grey-table"
            : funnelData?.leeds > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.leeds}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
