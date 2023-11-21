import { formattTimeZone } from "../../../../utilities/FormattTimeZone";
import { useAppSelector } from "../../../../hooks/appDispatch";
import { appoimentDateColumn } from "./columnsTable/appoimentDate";
import { callDateColumn } from "./columnsTable/callDate";
import { nameColumn } from "./columnsTable/name";
import { eventColumn } from "./columnsTable/event";
import { emailColumn } from "../Leads/columnsTable/email";
import { firstOriginColumn } from "../Leads/columnsTable/firstOrigin";
import { lastOriginColumn } from "../Leads/columnsTable/lastOrigin";
import { ButtonEditColumn } from "../Leads/columnsTable/ButtonEditColumn";
import { stateColumn } from "./columnsTable/state";

export const ColumnTableBooking = (
  dataContacts: any,
  time_Zone: any,
  setCurrentEdit: any,
  setIdEditCurrent: any,
  onChangeStatus: any,
  themeState: any
) => {
  return [
    appoimentDateColumn(time_Zone),
    callDateColumn(time_Zone),
    nameColumn(),
    eventColumn(),
    emailColumn(),
    firstOriginColumn(),
    lastOriginColumn(),
    stateColumn(dataContacts, onChangeStatus, themeState),
    ButtonEditColumn(setCurrentEdit, setIdEditCurrent),
  ];
};
