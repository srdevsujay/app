import { formattTimeZone } from "../../../../../utilities/FormattTimeZone";
import { TableStyle } from "../../../../../styled-components/Table/index";
import moment from "moment";

export const joinedColumn = (time_Zone: string) => {
  return {
    title: "SE UNIO EL...",
    field: "joined",
    // render: (dataContacts: any) => (
    //   <TableStyle cursor="pointer">
    //     {formattTimeZone(dataContacts?.joined, time_Zone)}
    //   </TableStyle>
    // ),
    render: (dataContacts: any) => {
      const date = moment(
        dataContacts?.joined,
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
