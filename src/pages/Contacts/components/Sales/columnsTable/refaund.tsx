import { TextColors } from "../../../../../styled-components/Table/index";
import { FormatNumber } from "../../../../../utilities/FormatNumber";

export const refaundColumn = () => {
  return {
    title: "Reembolso",
    field: "refaund",
    render: (dataSale: any) => (
      console.log("dataSale?.refaund", dataSale?.refaund),
      dataSale?.refaund === null || dataSale?.refaund === 0 ? (
        <TextColors className="text-danger">{`$${0.0}`}</TextColors>
      ) : (
        <TextColors className="text-danger">
          <FormatNumber number={dataSale?.refaund} />
        </TextColors>
      )
    ),
  };
};
