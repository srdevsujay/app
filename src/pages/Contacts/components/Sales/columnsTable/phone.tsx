import { TableStyle } from "../../../../../styled-components/Table/index";

export const phoneColumn = () => {
  return {
    title: "Telefono",
    field: "phone",
    render: (dataSale: any) => (
      <TableStyle cursor="pointer">{dataSale?.phone}</TableStyle>
    ),
  };
};
