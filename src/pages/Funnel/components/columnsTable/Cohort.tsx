import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const cohortColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              cohort: Promedio de días desde que una persona se registra al
              funnel hasta que compra.
            </span>
            <br />
            <span>
              cohort: Average number of days from registration to purchase
            </span>
          </>
        }
        placement="top"
      >
        <span>%cohort</span>
      </Tooltip>
    ),
    field: "cohort",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.cohort == 0
            ? "back-grey-table"
            : funnelData?.cohort > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.cohort}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
