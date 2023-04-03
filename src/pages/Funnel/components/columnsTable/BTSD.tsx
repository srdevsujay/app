import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const BTSDColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              BTSD: Cantidad de días que pasan desde que una persona agenda
              hasta que compra.LTBD: Cantidad de días que pasan desde que una
              persona se registra al funnel hasta que agenda.
            </span>
            <br />
            <span>
              BTSD: Number of days that pass from when a person schedules until
              they make a purchase. LTBD: Number of days that pass from when a
              person registers to the funnel until they schedule.
            </span>
          </>
        }
        placement="top"
      >
        <span>#BTSD</span>
      </Tooltip>
    ),
    field: "btsd",
    name: "#BTSD",
    checkbox: false,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.btsd == 0
            ? "back-grey-table"
            : funnelData?.btsd > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.btsd}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
