import { TextColors } from "../../../../../styled-components/Table/index";
import { FormatNumber } from "../../../../../utilities/FormatNumber";
export const totalValueColumn = () => {
  return {
    title: "VALOR TOTAL",
    field: "payments",
    render: (dataContacts: any) =>
      dataContacts?.payments === null ? (
        ""
      ) : (
        <TextColors
          className={`${
            dataContacts?.payments == 0
              ? "text-grey"
              : dataContacts?.payments > 0
              ? "text-green"
              : "text-danger"
          }`}
        >
          <FormatNumber number={dataContacts?.payments} />
        </TextColors>
      ),
  };
};
