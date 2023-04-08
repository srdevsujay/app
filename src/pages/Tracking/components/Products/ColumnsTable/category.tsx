import { TableStyle } from "../../../../../styled-components/Table/index";

export const categoryColumn = () => {
  return {
    title: "Categoria",
    field: "category",
    render: (dataContacts: any) => (
      <TableStyle cursor="pointer">{dataContacts?.category}</TableStyle>
    ),
  };
};
