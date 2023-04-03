import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const CPCKLColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              CPCKL: Cuanto dinero debo invertir para conseguir que alguien
              inicie una compra.
            </span>
            <br />
            <span>
              CPCKL: How much money do I need to invest to get someone to start
              a purchase.
            </span>
          </>
        }
        placement="top"
      >
        <span>$CPCKL</span>
      </Tooltip>
    ),
    field: "CPCKL",
    name: "$CPCKL",
    checkbox: false,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.CPCKL == 0
            ? "back-grey-table"
            : funnelData?.CPCKL > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.CPCKL.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
