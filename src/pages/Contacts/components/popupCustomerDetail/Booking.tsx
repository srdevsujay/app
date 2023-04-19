import React, { useEffect, useState } from "react";
import NormalTable from "../../../../utilities/Table/NormalTable";
import { ColumnTableBookingPopup } from "./columnsTable/columnsPopupBooking";
import {
  editStateBooking,
  obtainApiBooking,
} from "../../../../redux/state/slices/contacts/contactsThunk";
import { useAppDispatch } from "../../../../hooks/appDispatch";

const BookingPopup = ({ booking, time_Zone }: any) => {
  const dispatch = useAppDispatch();
  const [columnsBooking, setColumnsBooking] = useState<any>();

  const onChangeStatus = (e: any, paramBooking: any) => {
    const currentState = e.target.value;
    const form: any = {
      status: currentState,
      id: paramBooking.id,
    };
    console.log("change", form);
    dispatch(editStateBooking(form));
  };

  useEffect(() => {
    console.log("change");
    dispatch(obtainApiBooking());
  }, [booking]);

  useEffect(() => {
    if (booking.length > 0) {
      console.log("BookingPopup", booking);

      const columns = ColumnTableBookingPopup(
        booking,
        time_Zone,
        // setCurrentEdit,
        // setIdEditCurrent,
        onChangeStatus
      );
      setColumnsBooking(columns);
      // setOriginalData(booking);
      // setFilteredData(booking);
    }
  }, [booking]);

  return (
    <div className="accordion">
      <div className="row">
        <div className="col-12" style={{ width: "83vw" }}>
          <div className="dataTables_wrapper dt-bootstrap4 no-footer table-booking">
            <div className="table-responsive table-w100 head-color ocultarMostrar tableWidth">
              <NormalTable
                data={booking}
                columns={columnsBooking}
                pageSizeOptions={[7, 15, 31, 31]}
                maxBodyHeight={"60vh"}
                pageSize={7}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;