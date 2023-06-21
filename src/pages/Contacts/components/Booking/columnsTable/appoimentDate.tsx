import { formattTimeZone } from "../../../../../utilities/FormattTimeZone";
import { TableStyle } from "../../../../../styled-components/Table/index";
import moment from "moment";

export const appoimentDateColumn = (time_Zone: string) => {
  return {
    title: "Fecha de Registro",
    field: "appoiment_date",
    // render: (dataBooking: any) => (
    //   <TableStyle cursor="pointer">
    //     {formattTimeZone(dataBooking?.appoiment_date, time_Zone)}
    //   </TableStyle>
    // ),
    render: (dataBooking: any) => {
      const date = moment(
        dataBooking?.appoiment_date,
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
