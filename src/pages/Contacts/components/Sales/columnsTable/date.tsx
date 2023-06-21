import { formattTimeZone } from "../../../../../utilities/FormattTimeZone";
import { TableStyle } from "../../../../../styled-components/Table/index";
import moment from "moment";

export const dateColumn = (time_Zone: string) => {
  return {
    title: "Fecha",
    field: "date",
    render: (dataSale: any) => {
      const date = moment(dataSale?.date, "ddd, DD MMM YYYY HH:mm:ss [GMT]");
      return (
        <TableStyle cursor="pointer">
          {date.format("DD-MMM-YYYY hh:mm A")}
        </TableStyle>
      );
    },
  };
};
