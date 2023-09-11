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
import { useMinMaxDateFilter } from "../../hooks";
import bookingsFilter from "../../../../assets/images/bookingsFilter.svg";
import bookingsFilterDark from "../../../../assets/images/bookingsFilterDark.svg";
import video from "../../../../assets/images/video.svg";
import videoDark from "../../../../assets/images/videoDark.svg";

setAutoFreeze(false);

const Booking = () => {
  const dispatch = useAppDispatch();
  const { dataBooking, isLoading } = useAppSelector((state) => state.contact);
  const time_Zone = useAppSelector((state) => state.user.user.time_zone);
  const [nameTab, setNameTab] = useState("Añadir Booking");
  const [currentColumns, setCurrentColumns] = useState<any[]>([]);
  const [dataFunnelToggle, setDataFunnelToggle] = useState<any>([] || null);
  const [columnsToSet, setColumnsToSet] = useState<any>(currentColumns);
  const [originalData, setOriginalData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any[]>();
  const [filteredDataDos, setFilteredDataDos] = useState<any[]>([]);
  const [searchString, setSearchString] = useState("");
  const [emailCustomerDetail, setEmailCustomerDetail] = useState<any>();
  const searchStringDebounced = useDebounce(searchString, 3000);

  useEffect(() => {
    dispatch(obtainApiBooking(1, 100));
  }, []);

  const [currentEdit, setCurrentEdit] = useState();
  const [idEditCurrent, setIdEditCurrent] = useState(0);
  const [idDeleteCurrent, setIdDeleteCurrent] = useState(0);
  const [titleFile, setTitleFile] = useState("Tabla Bookings");
  const [isModalOpenFilter, setModalStateFilter] = useState<boolean>(false);
  const toggleModalFilter = () => setModalStateFilter(!isModalOpenFilter);
  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);

  const onChangeStatus = (e: any, paramBooking: any) => {
    const currentState = e.target.value;
    const form: any = {
      status: currentState,
      id: paramBooking.id,
    };
    dispatch(editStateBooking(form));
  };

  useEffect(() => {
    // if (dataBooking.length > 0) {
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
    // }
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

  const { minDate, maxDate, selectedDates } = useMinMaxDateFilter(dataBooking);

  const [currentCalendar, setCurrentCalendar] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [filteredDataTotal, setFilteredDataTotal] = useState<any>(dataBooking);
  const [handleButtonsFilterCalendar, setHandleButtonsFilterCalendar] =
    useState([]);

  const handleDateFilterCalendar = () => {
    const startDate = currentCalendar[0].startDate;
    const endDate = currentCalendar[0].endDate;
    // Convertir la fecha de endDate a GMT
    const endDateGMT = new Date(
      endDate.toLocaleString("en-US", { timeZone: "GMT" })
    );
    // Establecer la hora máxima del día en endDate
    const startDateWithMaxTime = new Date(startDate);
    startDateWithMaxTime.setHours(0);
    startDateWithMaxTime.setMinutes(0);
    startDateWithMaxTime.setSeconds(0);
    // Establecer la hora máxima del día en endDate
    const endDateWithMaxTime = new Date(endDateGMT);
    endDateWithMaxTime.setHours(18);
    endDateWithMaxTime.setMinutes(0);
    endDateWithMaxTime.setSeconds(0);

    const filteredData = dataBooking.filter((lead: any) => {
      const joinedDate = new Date(lead.appoiment_date);
      return (
        joinedDate >= startDateWithMaxTime && joinedDate <= endDateWithMaxTime
      );
    });

    console.log("filteredData--", filteredData);
    setFilteredDataTotal(filteredData);
    setFilteredDataDos(filteredData);
    setModalStateFilter(false);
  };

  useEffect(() => {
    if (handleButtonsFilterCalendar.length === 0) return;
    setFilteredDataTotal(handleButtonsFilterCalendar);
    setFilteredDataDos(handleButtonsFilterCalendar);
    setModalStateFilter(false);
  }, [handleButtonsFilterCalendar]);

  const dataBookingFilter = [
    {
      name: "Total Booking",
      image: themeState === true ? bookingsFilterDark : bookingsFilter,
      value: filteredDataDos.length,
    },
  ];

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
        isModalOpenFilter={isModalOpenFilter}
        setModalStateFilter={setModalStateFilter}
        toggleModalFilter={toggleModalFilter}
        currentCalendar={currentCalendar}
        setCurrentCalendar={setCurrentCalendar}
        minDate={minDate}
        maxDate={maxDate}
        handleDateFilterCalendar={handleDateFilterCalendar}
        dataFiltersCalendar={dataBookingFilter}
        setHandleButtonsFilterCalendar={setHandleButtonsFilterCalendar}
        titleVideoTutorial={"Video Tutorial Booking"}
        imageVideoTutorial={!themeState ? video : videoDark}
        urlVideoTutorial={
          "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be"
        }
        dataFile={filteredDataDos}
        titleDataFile={titleFile}
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
        <CustomerDetails emailCustomerDetail={emailCustomerDetail} />
      </Modal>
      {isLoading === true ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "64vh", zIndex: "99999999" }}
        >
          <BeatLoader color="#3997FF" />
        </div>
      ) : (
        <GeneralTable
          data={filteredDataDos}
          columns={columnsToSet}
          pageSizeOptions={[10, 25, 50, 100]}
          maxBodyHeight={"64vh"}
          pageSize={7}
          getUserProfile={getUserProfile}
        />
      )}
    </>
  );
};

export default Booking;
