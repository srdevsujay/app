import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import { obtainApiContacts } from "../../../../redux/state/slices/contacts/contactsThunk";
import GeneralTable from "../../../../utilities/Table/index";
import { Table } from "../../../../styled-components/Table/index";
import { TableContacts } from "./ColumnsLeads";
import { setAutoFreeze } from "immer";
import "../../style-components/style.css";

const Leads = () => {
  const dispatch = useAppDispatch();
  const { dataLead } = useAppSelector((state) => state.contact);
  const [currentColumns, setCurrentColumns] = useState();
  const time_Zone = useAppSelector((state) => state.user.user.time_zone);

  useEffect(() => {
    dispatch(obtainApiContacts());
  }, []);

  useEffect(() => {
    if (dataLead.length > 0) {
      const columns = TableContacts(dataLead, time_Zone);
      setCurrentColumns(columns as any);
    }
  }, [dataLead]);
  setAutoFreeze(false);

  return (
    <Table className="tables">
      <GeneralTable
        data={dataLead}
        columns={currentColumns}
        pageSizeOptions={[7, 15, 31, 31]}
        maxBodyHeight={"60vh"}
        pageSize={7}
      />
    </Table>
  );
};

export default Leads;
