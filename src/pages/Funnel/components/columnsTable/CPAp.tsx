import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const CPApColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              CPAp: Cuanto debo invertir para conseguir que una persona aplique.
            </span>
            <br />
            <span>
              CPAp: How much should I invest to get one person to apply.
            </span>
          </>
        }
        placement="top"
      >
        <span>$CPAp.</span>
      </Tooltip>
    ),
    field: "CPAp",
    name: "$CPAp.",
    checkbox: false,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.CPAp == 0
            ? "back-grey-table"
            : funnelData?.CPAp > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData.CPAp.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
