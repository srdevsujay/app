import { formattTimeZone } from "../../../../../utilities/FormattTimeZone";
import { TableStyle } from "../../../../../styled-components/Table/index";

export const joinedColumn = (time_Zone: string) => {
  return {
    title: "SE UNIO EL...",
    field: "joined",
    render: (dataContacts: any) => (
      <TableStyle cursor="pointer">
        {formattTimeZone(dataContacts?.joined, time_Zone)}
      </TableStyle>
    ),
  };
};
