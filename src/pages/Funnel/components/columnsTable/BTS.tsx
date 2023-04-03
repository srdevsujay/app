import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const BTSColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              BTS: Porcentaje de ventas sobre el total de agendaciones.
            </span>
            <br />
            <span>
              BTS: Percentage of sales over the total number of appointments.
            </span>
          </>
        }
        placement="top"
      >
        <span>%BTS</span>
      </Tooltip>
    ),
    field: "BTS",
    name: "%BTS",
    checkbox: true,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.BTS == 0
            ? "back-grey-table"
            : funnelData?.BTS > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.BTS.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
