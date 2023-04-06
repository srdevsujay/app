import { TableStyle } from "../../../../../styled-components/Table/index";

export const nameColumn = () => {
  return {
    title: "NOMBRE",
    field: "name",
    render: (dataSale: any) => (
      <TableStyle cursor="pointer">{dataSale?.name}</TableStyle>
    ),
  };
};
