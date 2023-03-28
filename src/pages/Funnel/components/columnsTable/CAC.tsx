import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const CACColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              CAC: Cuánto dinero hay que invertir para adquirir un cliente.
            </span>
            <br />
            <span>
              CAC: How much money do you have to invest to acquire a customer.
            </span>
          </>
        }
        placement="top"
      >
        <span>$CAC</span>
      </Tooltip>
    ),
    field: "CAC",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.CAC == 0
            ? "back-grey-table"
            : funnelData?.CAC > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.CAC.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
