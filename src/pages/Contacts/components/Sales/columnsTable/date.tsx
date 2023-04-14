import { formattTimeZone } from "../../../../../utilities/FormattTimeZone";
import { TableStyle } from "../../../../../styled-components/Table/index";

export const dateColumn = (time_Zone: string) => {
  return {
    title: "Fecha",
    field: "date",
    render: (dataSale: any) => (
      <TableStyle cursor="pointer">
        {formattTimeZone(dataSale?.date, time_Zone)}
      </TableStyle>
    ),
  };
};
