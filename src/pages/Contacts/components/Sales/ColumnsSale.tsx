import { formattTimeZone } from "../../../../utilities/FormattTimeZone";
import { useAppSelector } from "../../../../hooks/appDispatch";

// import { callDateColumn } from "./columnsTable/callDate";
// import { eventColumn } from "./columnsTable/event";
import { firstOriginColumn } from "../Leads/columnsTable/firstOrigin";
import { lastOriginColumn } from "../Leads/columnsTable/lastOrigin";
import { dateColumn } from "./columnsTable/date";
import { nameColumn } from "./columnsTable/name";
import { emailColumn } from "./columnsTable/email";
import { priceColumn } from "./columnsTable/price";
import { phoneColumn } from "./columnsTable/phone";
import { buttonEditColumn } from "../Leads/columnsTable/buttons";
import { refaundColumn } from "./columnsTable/refaund";

export const ColumnTableSale = (
  dataContacts: any,
  time_Zone: any,
  setCurrentEdit: any,
  setIdEditCurrent: any
) => {
  return [
    dateColumn(time_Zone),
    nameColumn(),
    emailColumn(),
    firstOriginColumn(),
    lastOriginColumn(),
    priceColumn(),
    refaundColumn(),
    phoneColumn(),
    buttonEditColumn(setCurrentEdit, setIdEditCurrent),
  ];
};
