import { TableStyle } from "../../../../../styled-components/Table/index";

export const typeColumn = () => {
  return {
    title: "Tipo",
    field: "type",
    render: (dataTag: any) => (
      <TableStyle cursor="pointer">{dataTag?.type}</TableStyle>
    ),
  };
};
