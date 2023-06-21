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
import { deleteSale } from "../../../../redux/state/slices/contacts/contactsThunk";
import { obtainApiProduct } from "../../../../redux/state/slices/tracking/trackingThunk";
import FormTrafficSource from "../FormTrafficSource";
import CustomerDetails from "../CustomerDetails/index";
import { BeatLoader } from "react-spinners";
import _ from "lodash";

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
  const { dataSale } = useAppSelector((state) => state.contact);
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

  useEffect(() => {
    if (dataSale.length > 0) {
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
      setFilteredDataDos(dataSale);
    }
  }, [dataSale]);

  useEffect(() => {
    if (idEditCurrent !== 0) {
      dispatch(deleteSale(idEditCurrent));
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

  const toggleModalUser = () => setModalOpenUser(!isModalOpenUser);

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

export default Sales;
