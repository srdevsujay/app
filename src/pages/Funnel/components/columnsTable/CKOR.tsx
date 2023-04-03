import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const CKORColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              CKOR: Porcentaje de personas que visitan el checkout y se
              registran.
            </span>
            <br />
            <span>
              CKOR: The percentage of people who visit the checkout and
              register.
            </span>
          </>
        }
        placement="top"
      >
        <span>%CKOR</span>
      </Tooltip>
    ),
    field: "CKOR",
    name: "%CKOR",
    checkbox: true,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.CKOR == 0
            ? "back-grey-table"
            : funnelData?.CKOR > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.CKOR.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
