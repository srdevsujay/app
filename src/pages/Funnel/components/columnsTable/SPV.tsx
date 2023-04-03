import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const SPVColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>SPV: Cantidad de personas que visitan una página.</span>
            <br />
            <span>SPV: The number of people who visit a page.</span>
          </>
        }
        placement="top"
      >
        <span>#SPV</span>
      </Tooltip>
    ),
    field: "SPV",
    name: "#SPV",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.SPV == 0
            ? "back-grey-table"
            : funnelData?.SPV > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.SPV}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
