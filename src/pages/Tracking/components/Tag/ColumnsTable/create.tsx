import { formatTimeZoneNoTime } from "../../../../../utilities/formatTimeZoneNoTime";
import { TableStyle } from "../../../../../styled-components/Table/index";

export const createDateColumn = (time_Zone: string) => {
  return {
    title: "Creada",
    field: "created_on",
    render: (dataRule: any) => (
      <TableStyle>
        {formatTimeZoneNoTime(dataRule?.created_on, time_Zone)}
      </TableStyle>
    ),
  };
};
