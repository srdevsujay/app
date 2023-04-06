import React, { useEffect, useState, useCallback } from "react";

import {
  obtainApiBooking,
  deleteBooking,
} from "../../../../redux/state/slices/contacts/contactsThunk";
import GeneralTable from "../../../../utilities/Table/index";
import { setAutoFreeze } from "immer";
import "../../styled-components/style.css";
import MenuTabHeader from "../MenuTabHeader/index";
import { useDebounce } from "../../../../hooks/useDebounce";
import { TableContacts } from "../Leads/ColumnsLeads";
import { useAppDispatch, useAppSelector } from "../../../../hooks/appDispatch";
import { ColumnTableBooking } from "./ColumnsBokking";
import Modal from "../../../../components/modal/Modal.component";
import FormBooking from "../FormBooking/index";
import { editStateBooking } from "../../../../redux/state/slices/contacts/contactsThunk";
import moment from "moment";

setAutoFreeze(false);

const Booking = () => {
  const dispatch = useAppDispatch();
  const { dataBooking } = useAppSelector((state) => state.contact);
  const time_Zone = useAppSelector((state) => state.user.user.time_zone);
  const [nameTab, setNameTab] = useState("Añadir Booking");
  const [currentColumns, setCurrentColumns] = useState<any[]>([]);
  const [dataFunnelToggle, setDataFunnelToggle] = useState<any>([] || null);
  const [columnsToSet, setColumnsToSet] = useState<any>(currentColumns);
  const [originalData, setOriginalData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any[]>();
  const [searchString, setSearchString] = useState("");
  const searchStringDebounced = useDebounce(searchString, 3000);

  useEffect(() => {
    dispatch(obtainApiBooking());
  }, []);

  const [currentEdit, setCurrentEdit] = useState();
  const [idEditCurrent, setIdEditCurrent] = useState(0);
  const [idDeleteCurrent, setIdDeleteCurrent] = useState(0);
  console.log("currentEdit--", currentEdit);

  const onChangeStatus = (e: any, paramBooking: any) => {
    const currentState = e.target.value;
    const form: any = {
      status: currentState,
      id: paramBooking.id,
    };
    dispatch(editStateBooking(form));
  };

  useEffect(() => {
    if (dataBooking.length > 0) {
      console.log("dataBooking.length > 0", dataBooking);
      const columns = ColumnTableBooking(
        dataBooking,
        time_Zone,
        setCurrentEdit,
        setIdEditCurrent,
        onChangeStatus
      );
      setCurrentColumns(columns as any);
      setOriginalData(dataBooking);
      setFilteredData(dataBooking);
    }
  }, [dataBooking]);

  useEffect(() => {
    if (idEditCurrent !== 0) {
      dispatch(deleteBooking(idEditCurrent));
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

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const toggleModal = () => setModalOpen(!isModalOpen);
  useEffect(() => {
    if (currentEdit) {
      toggleModal();
    }
  }, [currentEdit]);

  useEffect(() => {
    if (!isModalOpen) {
      setCurrentEdit(null as any);
    }
  }, [isModalOpen]);

  const openModal = () => {
    if (!isModalOpen) {
      setModalOpen(true);
    }
  };

  return (
    <>
      <MenuTabHeader
        nameTab={nameTab}
        columns={currentColumns}
        setDataFunnelToggle={setDataFunnelToggle}
        dataFunnelToggle={dataFunnelToggle}
        columnsToSet={columnsToSet}
        updateData={updateData}
        setSearchString={setSearchString}
        currentEdit={currentEdit}
        setCurrentEdit={setCurrentEdit}
        idEditCurrent={idEditCurrent}
        setIdEditCurrent={setIdEditCurrent}
        openModal={openModal}
      />
      <Modal
        title={currentEdit !== null ? "Editar Booking" : "Crear Booking"}
        isOpen={isModalOpen}
        onClose={toggleModal}
        width="450px"
        padding="10px 32px"
        bottom="14px"
        height="480px"
        btnClose={1}
      >
        <FormBooking
          onClose={toggleModal}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
        />
      </Modal>
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

export default Booking;
