import { formattTimeZone } from "../../../../utilities/FormattTimeZone";
import { useAppSelector } from "../../../../hooks/appDispatch";
import { joinedColumn } from "./columnsTable/joined";
import { nameColumn } from "./columnsTable/name";
import { emailColumn } from "./columnsTable/email";
import { totalValueColumn } from "./columnsTable/totalValue";
import { firstOriginColumn } from "./columnsTable/firstOrigin";
import { lastOriginColumn } from "./columnsTable/lastOrigin";
import { buttonEditColumn } from "./columnsTable/buttons";

export const TableContacts = (dataContacts: any, time_Zone: any) => {
  return [
    joinedColumn(time_Zone),
    nameColumn(),
    emailColumn(),
    totalValueColumn(),
    firstOriginColumn(),
    lastOriginColumn(),
    buttonEditColumn(),
  ];
};
