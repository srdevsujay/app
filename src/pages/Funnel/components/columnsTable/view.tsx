import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const viewColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>LV: Cantidad de personas que visitan una página.</span>
            <br />
            <span>LV: Number of people who visit a page.</span>
          </>
        }
        placement="top"
      >
        <span>#LV</span>
      </Tooltip>
    ),
    field: "views",
    name: "#LV",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.views == 0
            ? "back-grey-table"
            : funnelData?.views > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.views}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
