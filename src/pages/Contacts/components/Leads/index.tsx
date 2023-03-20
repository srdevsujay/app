import React, { useEffect, useState, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import { obtainApiContacts } from "../../../../redux/state/slices/contacts/contactsThunk";
import GeneralTable from "../../../../utilities/Table/index";
import { Table } from "../../../../styled-components/Table/index";
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
  const [search, setSearch] = useState<any>();
  // const [currentDataLead, setCurrentDataLead] = useState<any[]>(dataLead);
  // const [searchTerm, setSearchTerm] = useState("");

  const [originalData, setOriginalData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any[]>();
  const [searchString, setSearchString] = useState("");
  const searchStringDebounced = useDebounce(searchString, 3000);
  // console.log("originalData", originalData);
  // console.log("filteredData", filteredData);

  useEffect(() => {
    dispatch(obtainApiContacts());
  }, []);

  useEffect(() => {
    if (dataLead.length > 0) {
      const columns = TableContacts(dataLead, time_Zone);
      setCurrentColumns(columns as any);
      setOriginalData(dataLead);
      setFilteredData(dataLead);
    }
  }, [dataLead]);

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
      />
      <Table className="tables">
        <GeneralTable
          data={filteredData}
          columns={columnsToSet}
          pageSizeOptions={[7, 15, 31, 31]}
          maxBodyHeight={"60vh"}
          pageSize={7}
        />
      </Table>
    </>
  );
};

export default Leads;
