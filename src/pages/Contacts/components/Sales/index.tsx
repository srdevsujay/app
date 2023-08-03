import React, { useEffect, useState, useCallback } from "react";
import GeneralTable from "../../../../utilities/Table/index";
import { setAutoFreeze } from "immer";
import "../../styled-components/style.css";
import TabMenuLeads from "../TabMenuLeads/index";
import { useDebounce } from "../../../../hooks/useDebounce";
import { TableContacts } from "../Leads/ColumnsLeads";
import { useAppDispatch, useAppSelector } from "../../../../hooks/appDispatch";
import { ColumnTableSale } from "./ColumnsSale";
import Modal from "../../../../components/modal/Modal.component";
import {
  obtainApiSale,
  obtainUserProfile,
} from "../../../../redux/state/slices/contacts/contactsThunk";
import FormSale from "../FormSale";
import {
  deleteSale,
  closeUserDetail,
} from "../../../../redux/state/slices/contacts/contactsThunk";
import { obtainApiProduct } from "../../../../redux/state/slices/tracking/trackingThunk";
import FormTrafficSource from "../FormTrafficSource";
import CustomerDetails from "../CustomerDetails/index";
import { BeatLoader } from "react-spinners";
import _ from "lodash";
import { useMinMaxDateFilter } from "../../hooks";
import ventarecurrente from "../../../../assets/images/ventarecurrente.svg";
import reembolso from "../../../../assets/images/reembolso.svg";
import saleFilter from "../../../../assets/images/saleFilter.svg";

setAutoFreeze(false);

// interface IData {
//   email: string;
//   first_origin: string;
//   first_origintag: string;
//   funnel_id: number;
//   id: number;
//   joined: string;
//   last_origen: string;
//   last_origentag: string | null;
//   name: string;
//   payments: number;
//   phone: string;
// }

// interface ISelectProps {
//   data: IData[];
// }

const Sales = () => {
  const dispatch = useAppDispatch();
  const { dataSale, isLoading } = useAppSelector((state) => state.contact);
  const time_Zone = useAppSelector((state) => state.user.user.time_zone);
  const [nameTab, setNameTab] = useState("Añadir Venta");
  const [currentColumns, setCurrentColumns] = useState<any[]>([]);
  const [dataFunnelToggle, setDataFunnelToggle] = useState<any>([] || null);
  const [columnsToSet, setColumnsToSet] = useState<any>(currentColumns);
  const [originalData, setOriginalData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any[]>();
  const [filteredDataDos, setFilteredDataDos] = useState<any[]>();
  const [searchString, setSearchString] = useState("");
  const [emailCustomerDetail, setEmailCustomerDetail] = useState<any>();
  const [isModalOpenUser, setModalOpenUser] = useState<boolean>(false);
  // const [filter, setFilter] = useState("");
  // const [selected, setSelected] = useState("");
  const searchStringDebounced = useDebounce(searchString, 3000);

  useEffect(() => {
    dispatch(obtainApiSale());
    dispatch(obtainApiProduct());
  }, []);

  const [currentEdit, setCurrentEdit] = useState();
  const [idEditCurrent, setIdEditCurrent] = useState(0);
  // const [idDeleteCurrent, setIdDeleteCurrent] = useState(0);

  const [isModalOpenFilter, setModalStateFilter] = useState<boolean>(false);
  const toggleModalFilter = () => setModalStateFilter(!isModalOpenFilter);

  const [currentCalendar, setCurrentCalendar] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [filteredDataTotal, setFilteredDataTotal] = useState<any>(dataSale);
  const [handleButtonsFilterCalendar, setHandleButtonsFilterCalendar] =
    useState([]);

  const [recurrentes, setRecurrentes] = useState(0);

  const { minDate, maxDate, selectedDates } = useMinMaxDateFilter(dataSale);

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

    const filteredData = dataSale.filter((lead: any) => {
      const joinedDate = new Date(lead.date);
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

  // const totalPayments = filteredDataTotal.reduce(
  //   (total: any, lead: any) => total + lead?.price,
  //   0
  // );

  const totalRefund = filteredDataTotal.reduce(
    (total: any, lead: any) => total + lead?.refaund,
    0
  );

  const totalSale = filteredDataTotal.length;

  console.log('filteredDataTotal', filteredDataTotal.length);
    
  // const calculateRecurrentes = (data: any) => {
  //   const recurrentes: any = {};
  //   data.forEach((item: any) => {
  //     const { price } = item;
  //     recurrentes[price] = (recurrentes[price] || 0) + 1;
  //   });
  //   return recurrentes;
  // };

  useEffect(() => {
    if(filteredDataTotal.length === 0) return;
    // Utilizamos un objeto para almacenar los precios únicos y sus recuentos de ventas
    const priceCounts: any = {};

    // Calcular el recuento de ventas para cada precio único
    filteredDataTotal.forEach((item: any) => {
      const { price } = item;
      if (priceCounts[price]) {
        priceCounts[price]++;
      } else {
        priceCounts[price] = 1;
      }
    });

    // Calcular el total de ventas recurrentes
    let recurrentes = 0;
    for (const price in priceCounts) {
      recurrentes += Math.floor(priceCounts[price] / parseInt(price));
    }

    Object.keys(priceCounts).map((price: any) => (
      console.log('priceCounts[price]', priceCounts[price]),
      console.log('priceCounts[]', price)
    ))
    
    console.log('resultFilterFind', recurrentes);
  }, [filteredDataTotal])

  const dataLeadsFilter = [
    {
      name: "Total Ventas",
      image: saleFilter,
      value: totalSale,
    },
    {
      name: "Reembolso",
      image: reembolso,
      value: totalRefund,
    },
    {
      name: "ventas Recurrentes",
      image: ventarecurrente,
      value: recurrentes,
    },
  ];

  useEffect(() => {
    // if (dataSale.length > 0) {
    const columns = ColumnTableSale(
      dataSale,
      time_Zone,
      setCurrentEdit,
      setIdEditCurrent
    );
    setCurrentColumns(columns as any);
    setOriginalData(dataSale);
    setFilteredData(dataSale);
    // const currentDateSale = _.orderBy(dataSale, "date", "desc");
    const sortedDataSale = dataSale.sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    console.log("sortedRulesSAles", sortedDataSale);
    console.log("sortedRulesSAlesCcolumns", columns);
    setFilteredDataDos(sortedDataSale);
    // }
  }, [dataSale]);

  useEffect(() => {
    if (idEditCurrent !== 0) {
      dispatch(deleteSale(idEditCurrent));
      setIdEditCurrent(0);
    }
  }, [idEditCurrent]);

  const updateData = useCallback((newData: any) => {
    console.log("newDataSAle", newData);

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
  const [isSubModalOpen, setSubModalOpen] = useState<boolean>(false);

  const toggleModal = () => setModalOpen(!isModalOpen);
  const toggleSubModal = () => setSubModalOpen(!isSubModalOpen);

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

  // const filterData = (data: any, filter: string) => {
  //   return data.filter(
  //     (item: any) =>
  //       item.email.toLowerCase().includes(filter.toLowerCase()) ||
  //       item.first_origin.toLowerCase().includes(filter.toLowerCase()) ||
  //       item.first_origintag.toLowerCase().includes(filter.toLowerCase()) ||
  //       item.last_origen.toLowerCase().includes(filter.toLowerCase()) ||
  //       (item.last_origentag &&
  //         item.last_origentag.toLowerCase().includes(filter.toLowerCase()))
  //   );
  // };

  // const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilter(e.target.value);
  // };

  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelected(e.target.value);
  // };

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

  const clearFilterContacts = () => {
    console.log("ClearFilter");
    const sortedDataSale = dataSale.sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setFilteredDataDos(sortedDataSale);
  };

  console.log("columnsToSet--", columnsToSet);

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
        dataLead={dataSale}
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
        positionDataHelpVideo={4}
      />
      <Modal
        title={currentEdit !== null ? "Editar Venta" : "Crear Venta"}
        isOpen={isModalOpen}
        onClose={toggleModal}
        width="450px"
        padding="10px 32px"
        bottom="14px"
        height="480px"
        btnClose={1}
        overflowY="auto"
      >
        <FormSale
          onClose={toggleModal}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
          onCloseSubModal={toggleSubModal}
        />
      </Modal>
      <Modal
        title="Atribuir Venta"
        isOpen={isSubModalOpen}
        onClose={toggleSubModal}
        width="450px"
        padding="10px 32px"
        bottom="14px"
        height="380px"
        btnClose={1}
      >
        <FormTrafficSource onClose={toggleSubModal} currentEdit={currentEdit} />
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
      {isLoading === true ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "55vh", zIndex: "99999999" }}
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

export default Sales;
