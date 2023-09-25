import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  createContext,
  useRef,
} from "react";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import {
  deleteLead,
  obtainApiContacts,
} from "../../../../redux/state/slices/contacts/contactsThunk";
// import GeneralTable from "../../../../utilities/Table/TableContacts/GeneralTable";
import GeneralTable from "../../../../utilities/Table/index";
import { TableContacts } from "./ColumnsLeads";
import { setAutoFreeze } from "immer";
import "../../styled-components/style.css";
import { useDebounce } from "../../../../hooks/useDebounce";
import Modal from "../../../../components/modal/Modal.component";
import FormLead from "../FormLead/index";
import TabMenuLeads from "../TabMenuLeads/index";
import CustomerDetails from "../CustomerDetails/index";
import {
  obtainUserProfile,
  closeUserDetail,
} from "../../../../redux/state/slices/contacts/contactsThunk";
import InputComponent from "../../../../components/input/Input.component";
import SelectTag from "../SelectTag";
import { BeatLoader } from "react-spinners";
import ModalDetailClient from "../../../../components/modal/ModalDetailClient";
import leadsFilter from "../../../../assets/images/leadsFilter.svg";
import leadsFilterDark from "../../../../assets/images/leadsFilterDark.svg";
import reembolso from "../../../../assets/images/reembolso.svg";
import ventasFilter from "../../../../assets/images/ventasFilter.svg";
import { useMinMaxDateFilter } from "../../hooks";
import { FormatNumber } from "../../../../utilities/FormatNumber";
import video from "../../../../assets/images/video.svg";
import videoDark from "../../../../assets/images/videoDark.svg";

setAutoFreeze(false);

interface MyContextType {
  emailCustomerDetail: string;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

const Leads = () => {
  const dispatch = useAppDispatch();
  const { dataLead, isLoading, totalLeads, totalPageLead } = useAppSelector(
    (state) => state.contact
  );
  const time_Zone = useAppSelector((state) => state.user.user.time_zone);
  const [nameTab, setNameTab] = useState("Añadir Lead");
  const [currentColumns, setCurrentColumns] = useState<any[]>([]);
  const [dataFunnelToggle, setDataFunnelToggle] = useState<any>([] || null);
  const [columnsToSet, setColumnsToSet] = useState<any>(currentColumns);
  const [originalData, setOriginalData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any[]>();
  const [searchString, setSearchString] = useState("");

  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState("");
  const searchStringDebounced = useDebounce(searchString, 3000);

  // const [currentPageLead, setCurrentPageLead] = useState(0);
  // const [currentPerPage, setCurrentPerPage] = useState(10);
  // const [allData, setAllData] = useState(dataLead);
  // const [currentPage, setCurrentPage] = useState(0);
  // console.log("currentPerPage", currentPerPage);
  // console.log("currentPage", currentPage);
  // let allData: any = [];
  useEffect(() => {
    // dispatch(obtainApiContacts(0, 10, allData));
    console.log("DispatchLeads");

    dispatch(obtainApiContacts(0, 50));
  }, []);

  // useEffect(() => {
  //   console.log("entra al 2do effect");
  //   // dispatch(obtainApiContacts(currentPageLead, currentPerPage, allData));
  //   dispatch(obtainApiContacts(currentPage, currentPerPage));
  // }, [currentPage, currentPerPage]);

  const [currentEdit, setCurrentEdit] = useState();
  const [idEditCurrent, setIdEditCurrent] = useState(0);
  const [idDeleteCurrent, setIdDeleteCurrent] = useState(0);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isModalOpenUser, setModalOpenUser] = useState<boolean>(false);
  const [emailCustomerDetail, setEmailCustomerDetail] = useState<any>("");
  const [filteredDataDos, setFilteredDataDos] = useState<any[]>(dataLead);
  const filteredDataDosRef = useRef<any[]>();
  const [isModalOpenFilter, setModalStateFilter] = useState<boolean>(false);
  const toggleModalFilter = () => setModalStateFilter(!isModalOpenFilter);

  const [currentCalendar, setCurrentCalendar] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [filteredDataTotal, setFilteredDataTotal] = useState<any>(dataLead);
  const [titleFile, setTitleFile] = useState("Tabla Leads");

  const { minDate, maxDate, selectedDates } = useMinMaxDateFilter(dataLead);

  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);

  useEffect(() => {
    // if (dataLead.length > 0) {
    const columns = TableContacts(
      dataLead,
      time_Zone,
      setCurrentEdit,
      setIdEditCurrent
    );
    setCurrentColumns(columns as any);
    setOriginalData(dataLead);
    setFilteredData(dataLead);
    // setFilteredDataDos(dataLead);
    // }
    filteredDataDosRef.current = dataLead;
  }, [dataLead]);

  useEffect(() => {
    if (idEditCurrent !== 0) {
      dispatch(deleteLead(idEditCurrent));
      setIdEditCurrent(0);
    }
  }, [idEditCurrent]);

  const updateData = useCallback(
    (newData: any) => {
      setColumnsToSet(newData);
    },
    [columnsToSet]
  );

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

  // const handleFilteredData = (e: any) => {
  //   console.log("exxx", e);
  //   setFilteredData(e);
  // };

  const memoizedUsers: any = useMemo(() => {
    return filteredDataDosRef.current;
    // return JSON.stringify(filteredDataDos);
  }, [filteredDataDosRef]);

  console.log("memoizedUsers", memoizedUsers);
  console.log("filteredDataDos", filteredDataDosRef.current);
  console.log("filteredDataDos", filteredDataDosRef);

  console.log("isLoadingCOntact", isLoading);

  const clearFilterContacts = () => {
    setFilteredDataDos(dataLead);
  };

  // const handleDateFilterCalendar = () => {
  //   setModalState(true);
  // };

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

    const filteredData = dataLead.filter((lead: any) => {
      const joinedDate = new Date(lead.joined);
      return (
        joinedDate >= startDateWithMaxTime && joinedDate <= endDateWithMaxTime
      );
    });

    setFilteredDataTotal(filteredData);
    setFilteredDataDos(filteredData);
    setModalStateFilter(false);
  };

  useEffect(() => {
    if (handleButtonsFilterCalendar.length === 0) return;
    setFilteredDataTotal(handleButtonsFilterCalendar);
    setFilteredDataDos(handleButtonsFilterCalendar);
    setModalStateFilter(false);
  }, [handleButtonsFilterCalendar, memoizedUsers]);

  const dataLeadsFilter = [
    {
      name: "Total Leads",
      image: themeState === true ? leadsFilterDark : leadsFilter,
      value: totalPageLead,
      loading: 0,
    },
  ];

  // const obtainDataPageChange = (page: number, pageSize: number) => {
  //   dispatch(obtainApiContacts(page, pageSize));
  // };

  // const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <>
      {/* <div className="content-buttons-main-tracking mt-4 mt-3 d-flex justify-content-end"> */}
      {/* <img src={leadsFilter} alt="" className="" /> */}
      <TabMenuLeads
        nameTab={nameTab}
        columns={currentColumns}
        setDataFunnelToggle={setDataFunnelToggle}
        dataFunnelToggle={dataFunnelToggle}
        columnsToSet={columnsToSet}
        updateData={updateData}
        currentEdit={currentEdit}
        setCurrentEdit={setCurrentEdit}
        idEditCurrent={idEditCurrent}
        setIdEditCurrent={setIdEditCurrent}
        openModal={openModal}
        dataLead={dataLead}
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
        dataFiltersCalendar={dataLeadsFilter}
        setHandleButtonsFilterCalendar={setHandleButtonsFilterCalendar}
        titleVideoTutorial={"Video Tutorial Leads"}
        imageVideoTutorial={!themeState ? video : videoDark}
        urlVideoTutorial={
          "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be"
        }
        dataFile={memoizedUsers}
        titleDataFile={titleFile}
      />
      {/* <div style={{ width: "25%" }}>
          <SelectTag
            dataLead={dataLead}
            setFilteredDataDos={setFilteredDataDos}
          />
        </div> */}
      {/* </div> */}
      <Modal
        title={currentEdit !== null ? "Editar Lead" : "Crear Lead"}
        isOpen={isModalOpen}
        onClose={toggleModal}
        width="450px"
        padding="10px 32px"
        bottom="14px"
        height="480px"
        btnClose={1}
      >
        <FormLead
          onClose={toggleModal}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
        />
      </Modal>
      <ModalDetailClient
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
      </ModalDetailClient>
      {isLoading === true ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "64vh", zIndex: "99999999" }}
        >
          <BeatLoader color="#3997FF" />
        </div>
      ) : (
        <GeneralTable
          data={memoizedUsers}
          columns={columnsToSet}
          pageSizeOptions={[10, 25, 50, 100]}
          maxBodyHeight={"64vh"}
          pageSize={7}
          getUserProfile={getUserProfile}
          // obtainDataPageChange={obtainDataPageChange}
          totalPages={totalLeads}
          // rowsPerPage={rowsPerPage}
          // setRowsPerPage={setRowsPerPage}
          // totalPage={totalPageLead}
          // setCurrentPageLead={setCurrentPageLead}
          // currentPerPage={currentPerPage}
          // setCurrentPerPage={setCurrentPerPage}
          // currentPage={currentPage}
          // setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default Leads;
