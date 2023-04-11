import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const ImpColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              IMP: El número de veces que tu contenido o anuncio se muestra.
            </span>
            <br />
            <span>
              IMP: The number of times your content or advertisement is
              displayed.
            </span>
          </>
        }
        placement="top"
      >
        <span>#Imp.</span>
      </Tooltip>
    ),
    field: "impressions",
    name: "#Imp.",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.impressions == 0
            ? "back-grey-table"
            : funnelData?.impressions > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.impressions}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
