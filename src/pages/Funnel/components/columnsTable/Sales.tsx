import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const SalesColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>Sales: Cantidad de personas que compran un producto.</span>
            <br />
            <span>Sales: The number of people who purchase a product.</span>
          </>
        }
        placement="top"
      >
        <span>#Sales</span>
      </Tooltip>
    ),
    field: "sales",
    name: "#Sales",
    checkbox: true,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.sales == 0
            ? "back-grey-table"
            : funnelData?.sales > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.sales}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
