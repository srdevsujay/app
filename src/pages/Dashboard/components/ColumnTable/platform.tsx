import { TableStyle } from "../../../../styled-components/Table/index";
export const platformColumn = (dashboardMain: []) => {
  return {
    title: "Fuente",
    field: "plataform",
    render: (dashboardMain: any) => (
      <TableStyle>{`${dashboardMain?.plataform}`}</TableStyle>
    ),
  };
};
