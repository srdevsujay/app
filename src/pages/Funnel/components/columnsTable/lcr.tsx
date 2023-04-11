import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const lcrColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              LCR: Que % de personas que visitan la página de registro se
              terminan registrando.
            </span>
            <br />
            <span>
              LCR: What percentage of people who visit the registration page end
              up registering.
            </span>
          </>
        }
        placement="top"
      >
        <span>%LCR</span>
      </Tooltip>
    ),
    field: "LCR",
    name: "%LCR",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.LCR == 0
            ? "back-grey-table"
            : funnelData?.LCR > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        {`${funnelData?.LCR.toFixed(2)}%`}
      </BackColorsTable>
    ),
  };
};
