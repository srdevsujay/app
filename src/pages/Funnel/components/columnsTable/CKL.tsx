import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const CKLColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              CKL: Cantidad de personas que inician el proceso de compra.
            </span>
            <br />
            <span>
              CKL: The number of people who initiate the purchase process.
            </span>
          </>
        }
        placement="top"
      >
        <span>#CKL</span>
      </Tooltip>
    ),
    field: "CKL",
    name: "#CKL",
    checkbox: true,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.CKL == 0
            ? "back-grey-table"
            : funnelData?.CKL > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.CKL}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
