import { TableStyle } from "../../../../styled-components/Table/index";

export const roiColumn = (dashboardMain: []) => {
  return {
    title: "#ROI",
    field: "roi",
    render: (dashboardMain: any) => (
      <TableStyle>{`${dashboardMain?.roi.toFixed(2)}`}</TableStyle>
    ),
  };
};
