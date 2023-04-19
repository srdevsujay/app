import { TextColors } from "../../../../../styled-components/Table/index";

export const refaundColumn = () => {
  return {
    title: "Reembolso",
    field: "refaund",
    render: (dataSale: any) =>
      dataSale?.refaund === null ? (
        ""
      ) : (
        <TextColors className="text-danger">
          {`$${dataSale?.refaund.toFixed(2)}`}
        </TextColors>
      ),
  };
};
