import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const cpcColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              CPC: Cuánto dinero hay que invertir para que alguien haga clic en
              el anuncio.
            </span>
            <br />
            <span>
              CPC: How much money do you need to invest for someone to click on
              the ad.
            </span>
          </>
        }
        placement="top"
      >
        <span>$CPC</span>
      </Tooltip>
    ),
    field: "cpc",
    name: "$CPC",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.cpc == 0
            ? "back-grey-table"
            : funnelData?.cpc > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        {`$${funnelData?.cpc.toFixed(2)}`}
      </BackColorsTable>
    ),
  };
};
