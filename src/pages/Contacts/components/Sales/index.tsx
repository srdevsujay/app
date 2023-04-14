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
import { obtainApiSale } from "../../../../redux/state/slices/contacts/contactsThunk";
import FormSale from "../FormSale";
import { deleteSale } from "../../../../redux/state/slices/contacts/contactsThunk";
import { obtainApiProduct } from "../../../../redux/state/slices/tracking/trackingThunk";

setAutoFreeze(false);

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
  const [searchString, setSearchString] = useState("");
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
        title={currentEdit !== null ? "Editar Sale" : "Crear Sale"}
        isOpen={isModalOpen}
        onClose={toggleModal}
        width="450px"
        padding="10px 32px"
        bottom="14px"
        height="480px"
        btnClose={1}
      >
        <FormSale
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

export default Sales;
