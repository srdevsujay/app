import { appoimentDateColumn } from "../../Booking/columnsTable/appoimentDate";
import { callDateColumn } from "../../Booking/columnsTable/callDate";
import { nameColumn } from "../../Booking/columnsTable/name";
import { eventColumn } from "../../Booking/columnsTable/event";
import { emailColumn } from "../../Leads/columnsTable/email";
import { stateColumn } from "../../Booking/columnsTable/state";
import { buttonEditColumn } from "../../Leads/columnsTable/buttons";

export const ColumnTableBookingPopup = (
  dataContacts: any,
  time_Zone: any,
  // setCurrentEdit: any,
  // setIdEditCurrent: any,
  onChangeStatus: any
) => {
  return [
    appoimentDateColumn(time_Zone),
    callDateColumn(time_Zone),
    nameColumn(),
    eventColumn(),
    emailColumn(),
    stateColumn(dataContacts, onChangeStatus),
    // buttonEditColumn(setCurrentEdit, setIdEditCurrent),
  ];
};
