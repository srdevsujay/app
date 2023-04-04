import { formattTimeZone } from "../../../../../utilities/FormattTimeZone";
import { TableStyle } from "../../../../../styled-components/Table/index";

export const appoimentDateColumn = (time_Zone: string) => {
  return {
    title: "Fecha de Registro",
    field: "appoiment_date",
    render: (dataBooking: any) => (
      <TableStyle cursor="pointer">
        {formattTimeZone(dataBooking?.appoiment_date, time_Zone)}
      </TableStyle>
    ),
  };
};
