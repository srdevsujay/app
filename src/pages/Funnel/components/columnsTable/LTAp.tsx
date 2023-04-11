import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const LTApColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              LTAp: Dinero promedio que gasta una persona en productos.
            </span>
            <br />
            <span>
              LTAp: The average amount of money a person spends on products.
            </span>
          </>
        }
        placement="top"
      >
        <span>%LTAp.</span>
      </Tooltip>
    ),
    field: "LTAp",
    name: "%LTAp.",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.LTAp == 0
            ? "back-grey-table"
            : funnelData?.LTAp > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.LTAp.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
