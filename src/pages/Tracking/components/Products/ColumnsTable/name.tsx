import { TableStyle } from "../../../../../styled-components/Table/index";
export const nameColumn = () => {
  return {
    title: "NOMBRE",
    field: "name",
    render: (dataContacts: any) => (
      <TableStyle cursor="pointer">{dataContacts?.name}</TableStyle>
    ),
  };
};
