import { formattTimeZone } from "../../../../../utilities/FormattTimeZone";
import { TableStyle } from "../../../../../styled-components/Table/index";

export const callDateColumn = (time_Zone: string) => {
  return {
    title: "Fecha Cita",
    field: "call_date",
    render: (dataBooking: any) => (
      <TableStyle cursor="pointer">
        {formattTimeZone(dataBooking?.call_date, time_Zone)}
      </TableStyle>
    ),
  };
};
