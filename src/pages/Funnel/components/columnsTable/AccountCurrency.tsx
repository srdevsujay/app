import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const AccountCurrencyColumn = () => {
  return {
    title: "$Cuenta de dinero",
    field: "account_currency",
    name: "$Cuenta de dinero",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.account_currency == 0
            ? "back-grey-table"
            : funnelData?.account_currency > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.account_currency.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
