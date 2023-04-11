import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const ClicksOrganicColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              Clicks Organicos: Clicks capturados mediante el tracking a través
              del script del funnel. clicks: Cantidad de personas que hacen clic
              en el link de tu anuncio o link.
            </span>
            <br />
            <span>
              Clicks Organicos: Clicks captured through tracking using the
              funnel script. Clicks: The number of people who click on your ad
              or link.
            </span>
          </>
        }
        placement="top"
      >
        <span>#Clicks Organicos</span>
      </Tooltip>
    ),
    field: "clicks_organic",
    name: "#Clicks Organicos",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.clicks_organic == 0
            ? "back-grey-table"
            : funnelData?.clicks_organic > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.clicks_organic}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
