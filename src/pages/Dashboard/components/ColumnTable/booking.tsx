import { TableStyle } from "../../../../styled-components/Table/index";

export const bookingColumn = (dashboardMain: []) => {
  return {
    title: "#Bookings",
    field: "bookings",
    render: (dashboardMain: any) => (
      <TableStyle>{`${dashboardMain?.bookings.toFixed(2)}`}</TableStyle>
    ),
  };
};
