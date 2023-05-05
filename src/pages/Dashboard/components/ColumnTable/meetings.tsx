import { TableStyle } from "../../../../styled-components/Table/index";

export const meetingsColumn = (dashboardMain: []) => {
  return {
    title: "#Meetings",
    field: "meetings",
    render: (dashboardMain: any) => (
      <TableStyle>{`${dashboardMain?.meetings.toFixed(2)}`}</TableStyle>
    ),
  };
};
