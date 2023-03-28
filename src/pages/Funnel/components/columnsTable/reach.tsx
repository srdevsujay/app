import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const reachColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>Reach: El número de personas que ven tu contenido.</span>
            <br />
            <span>Reach: The number of people who view your content.</span>
          </>
        }
        placement="top"
      >
        <span>#Reach</span>
      </Tooltip>
    ),
    field: "reach",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.reach == 0
            ? "back-grey-table"
            : funnelData?.reach > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.reach}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
