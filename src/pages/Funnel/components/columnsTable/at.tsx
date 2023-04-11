import { Tooltip } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const atColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              AT: Cantidad de personas que se registraron asisten a ver el video
              o webinar.
            </span>
            <br />
            <span>
              AT: Number of people who registered and attended the video or
              webinar.
            </span>
          </>
        }
        placement="top"
      >
        <span>#AT</span>
      </Tooltip>
    ),
    field: "AT",
    name: "#AT",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.AT == 0
            ? "back-grey-table"
            : funnelData?.AT > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.AT}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
