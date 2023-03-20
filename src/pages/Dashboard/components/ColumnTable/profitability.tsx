import { TextColors } from "../../../../styled-components/Table/index";

export const profitabilityColumn = (dashboardMain: []) => {
  return {
    title: "#Rentabilidad",
    field: "rentabilidad",
    render: (dashboardMain: any) => (
      <TextColors
        className={`${
          dashboardMain?.rentabilidad < 0 ? "text-danger" : "text-green"
        }`}
      >{`${dashboardMain?.rentabilidad.toFixed(2)}`}</TextColors>
    ),
  };
};
