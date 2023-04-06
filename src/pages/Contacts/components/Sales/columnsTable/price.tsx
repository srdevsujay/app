import { TextColors } from "../../../../../styled-components/Table/index";
export const priceColumn = () => {
  return {
    title: "Precio",
    field: "price",
    render: (dataSale: any) =>
      dataSale?.price === null ? (
        ""
      ) : (
        <TextColors
          className={`${
            dataSale?.price == 0
              ? "text-grey"
              : dataSale?.price > 0
              ? "text-green"
              : "text-danger"
          }`}
        >{`$${dataSale?.price.toFixed(2)}`}</TextColors>
      ),
  };
};
