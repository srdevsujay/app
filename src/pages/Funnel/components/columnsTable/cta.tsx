import { Tooltip } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const ctaColumn = (show: boolean) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              CTA: Cantidad de personas que luego de ver el video o webinar
              hacen clic en el botón para tomar la acción que se les pide, sea
              comprar o agendar.
            </span>
            <br />
            <span>
              CTA: Number of people who, after watching the video or webinar,
              click on the button to take the requested action, whether it be to
              purchase or schedule.
            </span>
          </>
        }
        placement="top"
      >
        <span>#CTA</span>
      </Tooltip>
    ),
    field: "CTA",
    name: "#CTA",
    checkbox: show ? true : false,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.CTA == 0
            ? "back-grey-table"
            : funnelData?.CTA > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.CTA}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
