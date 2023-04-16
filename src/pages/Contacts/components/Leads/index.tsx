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
import { useDebounce } from "../../../../hooks/useDebounce";
import Modal from "../../../../components/modal/Modal.component";
import FormLead from "../FormLead/index";
import TabMenuLeads from "../TabMenuLeads/index";
import CustomerDetails from "../CustomerDetails/index";
import { obtainUserProfile } from "../../../../redux/state/slices/contacts/contactsThunk";

setAutoFreeze(false);

const Leads = () => {
  const dispatch = useAppDispatch();
  const { dataLead } = useAppSelector((state) => state.contact);
  const time_Zone = useAppSelector((state) => state.user.user.time_zone);
  const [nameTab, setNameTab] = useState("Añadir Lead");
  const [currentColumns, setCurrentColumns] = useState<any[]>([]);
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

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isModalOpenUser, setModalOpenUser] = useState<boolean>(false);
  const [emailCustomerDetail, setEmailCustomerDetail] = useState<any>();

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

  const toggleModalUser = () => setModalOpenUser(!isModalOpenUser);

  const getUserProfile = (data: any) => {
    console.log("data", data);
    const currentEmail = { email: data.email };
    toggleModalUser();
    setEmailCustomerDetail(data.email);
    dispatch(obtainUserProfile(currentEmail));
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
      />
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
      <Modal
        title="Detalles del cliente potencial"
        isOpen={isModalOpenUser}
        onClose={toggleModalUser}
        width="130vh"
        padding="10px 32px"
        bottom="14px"
        height="480px"
        btnClose={1}
        subTitle={emailCustomerDetail}
      >
        <CustomerDetails />
      </Modal>
      <GeneralTable
        data={filteredData}
        columns={columnsToSet}
        pageSizeOptions={[7, 15, 31, 31]}
        maxBodyHeight={"60vh"}
        pageSize={7}
        getUserProfile={getUserProfile}
      />
    </>
  );
};

export default Leads;
