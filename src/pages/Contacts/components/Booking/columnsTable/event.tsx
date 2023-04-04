import { TableStyle } from "../../../../../styled-components/Table/index";

export const eventColumn = () => {
  return {
    title: "Evento",
    field: "name_date",
    render: (dataBooking: any) => (
      <TableStyle cursor="pointer">{dataBooking?.name_date}</TableStyle>
    ),
  };
};
