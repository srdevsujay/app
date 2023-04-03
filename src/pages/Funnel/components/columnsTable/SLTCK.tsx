import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const SLTCKColumn = (show: boolean) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              SLTCK: Porcentaje de personas que pasan de la carta de ventas al
              checkout."
            </span>
            <br />
            <span>
              SLTCK: Percentage of people who go from the sales letter to the
              checkout.
            </span>
          </>
        }
        placement="top"
      >
        <span>%SLTCK</span>
      </Tooltip>
    ),
    field: "SLTCK",
    name: "%SLTCK",
    checkbox: show ? true : false,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.SLTCK == 0
            ? "back-grey-table"
            : funnelData?.SLTCK > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.SLTCK.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
