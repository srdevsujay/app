import { TableStyle } from "../../../../../styled-components/Table/index";

export const applyToColumn = () => {
  return {
    title: "Aplica a",
    field: "apply_to",
    render: (dataRule: any) => (
      <TableStyle>{`${dataRule?.apply_to}`}</TableStyle>
    ),
  };
};
