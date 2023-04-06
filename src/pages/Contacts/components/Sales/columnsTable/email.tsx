import { TableStyle } from "../../../../../styled-components/Table/index";
export const emailColumn = () => {
  return {
    title: "E-MAIL",
    field: "email",
    render: (dataSale: any) => (
      <TableStyle cursor="pointer">{dataSale?.email}</TableStyle>
    ),
  };
};
