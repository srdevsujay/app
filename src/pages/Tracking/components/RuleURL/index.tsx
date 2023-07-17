import React, { useEffect, useState, useCallback } from "react";
import { setAutoFreeze } from "immer";
// import "../../styled-components/style.css";
import "../../../Contacts/styled-components/style.css";

import { useDebounce } from "../../../../hooks/useDebounce";
import { deleteRuleURL } from "../../../../redux/state/slices/tracking/trackingThunk";
import GeneralTable from "../../../../utilities/Table/index";
import { useAppDispatch, useAppSelector } from "../../../../hooks/appDispatch";

import Modal from "../../../../components/modal/Modal.component";
import FormProducts from "../FormProduct";
import TabMenuTracking from "../TabMenuTracking";
import { obtainApiRuleURL } from "../../../../redux/state/slices/tracking/trackingThunk";
import { ColumnsRule } from "./ColumnsRule";
import FormRule from "./FormRule";
import { BeatLoader } from "react-spinners";

setAutoFreeze(false);

const RuleURL = () => {
  const dispatch = useAppDispatch();
  const { dataRule } = useAppSelector((state) => state.tracking);
  const time_Zone = useAppSelector((state) => state.user.user.time_zone);
  const [nameTab, setNameTab] = useState("Añadir Nueva Regla");
  const [currentColumns, setCurrentColumns] = useState<any[]>([]);
  const [dataFunnelToggle, setDataFunnelToggle] = useState<any>([] || null);
  const [columnsToSet, setColumnsToSet] = useState<any>(currentColumns);
  const [originalData, setOriginalData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any[]>();
  const [searchString, setSearchString] = useState("");
  const searchStringDebounced = useDebounce(searchString, 1000);

  useEffect(() => {
    dispatch(obtainApiRuleURL());
  }, []);

  const [currentEdit, setCurrentEdit] = useState();
  const [idEditCurrent, setIdEditCurrent] = useState(0);
  const [idDeleteCurrent, setIdDeleteCurrent] = useState(0);

  useEffect(() => {
    // if (dataRule.length > 0) {
    const columns = ColumnsRule(
      dataRule,
      time_Zone,
      setCurrentEdit,
      setIdEditCurrent
    );
    setCurrentColumns(columns as any);
    setOriginalData(dataRule);
    setFilteredData(dataRule);
    // }
  }, [dataRule]);

  useEffect(() => {
    if (idEditCurrent !== 0) {
      dispatch(deleteRuleURL(idEditCurrent));
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
      <TabMenuTracking
        nameTab={nameTab}
        columns={currentColumns}
        setDataFunnelToggle={setDataFunnelToggle}
        dataFunnelToggle={dataFunnelToggle}
        columnsToSet={columnsToSet}
        setSearchString={setSearchString}
        updateData={updateData}
        currentEdit={currentEdit}
        setCurrentEdit={setCurrentEdit}
        idEditCurrent={idEditCurrent}
        setIdEditCurrent={setIdEditCurrent}
        openModal={openModal}
      />
      <Modal
        title={currentEdit !== null ? "Editar Regla" : "Crear Regla"}
        isOpen={isModalOpen}
        onClose={toggleModal}
        width="450px"
        padding="10px 32px"
        bottom="14px"
        height="480px"
        btnClose={1}
        overflowY="auto"
      >
        <FormRule
          onClose={toggleModal}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
        />
      </Modal>
      {filteredData === undefined ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh", zIndex: "99999999" }}
        >
          <BeatLoader color="#3997FF" />
        </div>
      ) : (
        <GeneralTable
          data={filteredData}
          columns={columnsToSet}
          pageSizeOptions={[7, 15, 31]}
          maxBodyHeight={"55vh"}
          pageSize={7}
        />
      )}
    </>
  );
};

export default RuleURL;
