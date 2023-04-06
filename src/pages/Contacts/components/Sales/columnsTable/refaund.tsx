import { TextColors } from "../../../../../styled-components/Table/index";

export const refaundColumn = () => {
  return {
    title: "Reembolso",
    field: "refaund",
    render: (dataSale: any) =>
      dataSale?.refaund === null ? (
        ""
      ) : (
        <TextColors
          className={`${
            dataSale?.refaund == 0
              ? "text-grey"
              : dataSale?.refaund > 0
              ? "text-green"
              : "text-danger"
          }`}
        >{`$${dataSale?.refaund.toFixed(2)}`}</TextColors>
      ),
  };
};
