import { TableStyle } from "../../../../../styled-components/Table/index";

export const nameColumn = () => {
  return {
    title: "NOMBRE",
    field: "name",
    render: (dataBooking: any) => (
      <TableStyle cursor="pointer">{dataBooking?.name}</TableStyle>
    ),
  };
};
