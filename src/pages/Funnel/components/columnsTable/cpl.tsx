import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const cplColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              CPL: Cuánto dinero hay que invertir en publicidad para obtener un
              registro de cliente potencial.
            </span>
            <br />
            <span>
              CPL: How much money do you need to invest in advertising to obtain
              a potential customer registration.
            </span>
          </>
        }
        placement="top"
      >
        <span>$CPL</span>
      </Tooltip>
    ),
    field: "CPL",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.CPL == 0
            ? "back-grey-table"
            : funnelData?.CPL > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        {`$${funnelData?.CPL.toFixed(2)}`}
      </BackColorsTable>
    ),
  };
};
