import { TableStyle } from "../../../../../styled-components/Table/index";
export const emailColumn = () => {
  return {
    title: "E-MAIL",
    field: "email",
    render: (dataContacts: any) => (
      <TableStyle cursor="pointer">{dataContacts?.email}</TableStyle>
    ),
  };
};
