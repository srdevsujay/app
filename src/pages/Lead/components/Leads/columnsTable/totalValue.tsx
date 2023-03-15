import { TextColors } from "../../../../../styled-components/Table/index";
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
        >{`$${dataContacts?.payments.toFixed(2)}`}</TextColors>
      ),
  };
};
