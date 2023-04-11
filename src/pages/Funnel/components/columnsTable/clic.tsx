import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const ClicColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              Clics: Cantidad de personas que hacen clic en el link de tu
              anuncio o link.
            </span>
            <br />
            <span>Clicks: Number of people who click on your ad or link.</span>
          </>
        }
        placement="top"
      >
        <span>#Clics</span>
      </Tooltip>
    ),
    field: "clicks",
    name: "#Clics",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.clicks == 0
            ? "back-grey-table"
            : funnelData?.clicks > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.clicks}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
