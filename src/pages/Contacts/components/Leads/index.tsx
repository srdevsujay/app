import React, { useEffect, useState, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import {
  deleteLead,
  obtainApiContacts,
} from "../../../../redux/state/slices/contacts/contactsThunk";
import GeneralTable from "../../../../utilities/Table/index";
import { TableContacts } from "./ColumnsLeads";
import { setAutoFreeze } from "immer";
import "../../styled-components/style.css";
import MenuTabHeader from "../MenuTabHeader/index";
import { useDebounce } from "../../../../hooks/useDebounce";

setAutoFreeze(false);

const Leads = () => {
  const dispatch = useAppDispatch();
  const { dataLead } = useAppSelector((state) => state.contact);
  const [currentColumns, setCurrentColumns] = useState<any[]>([]);
  const time_Zone = useAppSelector((state) => state.user.user.time_zone);
  const [dataFunnelToggle, setDataFunnelToggle] = useState<any>([] || null);
  const [columnsToSet, setColumnsToSet] = useState<any>(currentColumns);
  const [originalData, setOriginalData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any[]>();
  const [searchString, setSearchString] = useState("");
  const searchStringDebounced = useDebounce(searchString, 3000);

  useEffect(() => {
    dispatch(obtainApiContacts());
  }, []);

  const [currentEdit, setCurrentEdit] = useState();
  const [idEditCurrent, setIdEditCurrent] = useState(0);
  const [idDeleteCurrent, setIdDeleteCurrent] = useState(0);

  useEffect(() => {
    if (dataLead.length > 0) {
      const columns = TableContacts(
        dataLead,
        time_Zone,
        setCurrentEdit,
        setIdEditCurrent
      );
      setCurrentColumns(columns as any);
      setOriginalData(dataLead);
      setFilteredData(dataLead);
    }
  }, [dataLead]);

  useEffect(() => {
    if (idEditCurrent !== 0) {
      dispatch(deleteLead(idEditCurrent));
      setIdEditCurrent(0);
    }
    console.log("idEditCurrent", idEditCurrent);
  }, [idEditCurrent]);

  const updateData = useCallback((newData: any) => {
    setColumnsToSet(newData);
  }, []);

  useEffect(() => {
    if (searchStringDebounced.trim()) {
      const currentData = originalData.filter((item: any) =>
        item.name.toLowerCase().includes(searchStringDebounced.toLowerCase())
      );
      setFilteredData(currentData);
    } else {
      setFilteredData(originalData);
    }
  }, [searchStringDebounced]);

  return (
    <>
      <MenuTabHeader
        columns={currentColumns}
        setDataFunnelToggle={setDataFunnelToggle}
        setColumnsToSet={setColumnsToSet}
        dataFunnelToggle={dataFunnelToggle}
        columnsToSet={columnsToSet}
        updateData={updateData}
        setSearchString={setSearchString}
        currentEdit={currentEdit}
        setCurrentEdit={setCurrentEdit}
        idEditCurrent={idEditCurrent}
        setIdEditCurrent={setIdEditCurrent}
      />
      <GeneralTable
        data={filteredData}
        columns={columnsToSet}
        pageSizeOptions={[7, 15, 31, 31]}
        maxBodyHeight={"60vh"}
        pageSize={7}
      />
    </>
  );
};

export default Leads;
