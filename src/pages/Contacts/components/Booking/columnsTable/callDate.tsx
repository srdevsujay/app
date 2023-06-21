import { formattTimeZone } from "../../../../../utilities/FormattTimeZone";
import { TableStyle } from "../../../../../styled-components/Table/index";
import moment from "moment";

export const callDateColumn = (time_Zone: string) => {
  return {
    title: "Fecha Cita",
    field: "call_date",
    render: (dataBooking: any) => {
      const date = moment(
        dataBooking?.call_date,
        "ddd, DD MMM YYYY HH:mm:ss [GMT]"
      );
      return (
        <TableStyle cursor="pointer">
          {date.format("DD-MMM-YYYY hh:mm A")}
        </TableStyle>
      );
    },
  };
};
