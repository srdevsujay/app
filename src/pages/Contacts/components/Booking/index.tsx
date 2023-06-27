import React, { useEffect, useState, useCallback } from "react";

import {
  obtainApiBooking,
  deleteBooking,
} from "../../../../redux/state/slices/contacts/contactsThunk";
import GeneralTable from "../../../../utilities/Table/index";
import { setAutoFreeze } from "immer";
import "../../styled-components/style.css";
import TabMenuLeads from "../TabMenuLeads/index";
import { useDebounce } from "../../../../hooks/useDebounce";
import { TableContacts } from "../Leads/ColumnsLeads";
import { useAppDispatch, useAppSelector } from "../../../../hooks/appDispatch";
import { ColumnTableBooking } from "./ColumnsBokking";
import Modal from "../../../../components/modal/Modal.component";
import FormBooking from "../FormBooking/index";
import {
  editStateBooking,
  obtainUserProfile,
} from "../../../../redux/state/slices/contacts/contactsThunk";
import moment from "moment";
import CustomerDetails from "../CustomerDetails/index";
import { BeatLoader } from "react-spinners";
import { closeUserDetail } from "../../../../redux/state/slices/contacts/contactsThunk";

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
  const [filteredDataDos, setFilteredDataDos] = useState<any[]>();
  const [searchString, setSearchString] = useState("");
  const [emailCustomerDetail, setEmailCustomerDetail] = useState<any>();
  const searchStringDebounced = useDebounce(searchString, 3000);

  useEffect(() => {
    dispatch(obtainApiBooking());
  }, []);

  const [currentEdit, setCurrentEdit] = useState();
  const [idEditCurrent, setIdEditCurrent] = useState(0);
  const [idDeleteCurrent, setIdDeleteCurrent] = useState(0);

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
      setFilteredDataDos(dataBooking);
    }
  }, [dataBooking]);

  useEffect(() => {
    if (idEditCurrent !== 0) {
      dispatch(deleteBooking(idEditCurrent));
      setIdEditCurrent(0);
    }
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

  const [isModalOpenUser, setModalOpenUser] = useState<boolean>(false);
  const toggleModalUser = () => {
    setModalOpenUser(!isModalOpenUser);
    dispatch(closeUserDetail());
  };

  const getUserProfile = (data: any, e: any) => {
    const clickColumnEdit = e.target.value;
    if (clickColumnEdit === "") {
    } else {
      const currentEmail = { email: data.email };
      toggleModalUser();
      setEmailCustomerDetail(data.email);
      dispatch(obtainUserProfile(currentEmail));
    }
  };

  console.log("filteredDataDos", filteredDataDos);

  const clearFilterContacts = () => {
    console.log("ClearFilter");
    setFilteredDataDos(dataBooking);
  };

  return (
    <>
      <TabMenuLeads
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
        dataLead={dataBooking}
        setFilteredDataDos={setFilteredDataDos}
        clearFilterContacts={clearFilterContacts}
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
        overflowY="auto"
      >
        <FormBooking
          onClose={toggleModal}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
        />
      </Modal>
      <Modal
        title="Detalles del cliente potencial"
        isOpen={isModalOpenUser}
        onClose={toggleModalUser}
        width="150vh"
        padding="10px 32px"
        bottom="14px"
        height="480px"
        btnClose={1}
        subTitle={emailCustomerDetail}
      >
        <CustomerDetails />
      </Modal>
      {filteredDataDos === undefined ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "250px", zIndex: "99999999" }}
        >
          <BeatLoader color="#3997FF" />
        </div>
      ) : (
        <GeneralTable
          data={filteredDataDos}
          columns={columnsToSet}
          pageSizeOptions={[10, 25, 50, 100]}
          maxBodyHeight={"55vh"}
          pageSize={7}
          getUserProfile={getUserProfile}
        />
      )}
    </>
  );
};

export default Booking;
