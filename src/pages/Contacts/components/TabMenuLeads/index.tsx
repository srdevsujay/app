import { ToggleColumnsTable } from "../../../../components/toggleColumnsTable";

import Vector from "../../../../assets/images/Vector.png";
import { ButtonCreate } from "../../../../styled-components/button";
import InputComponent from "../../../../components/input/Input.component";
import { useEffect, useState } from "react";
import Modal from "../../../../components/modal/Modal.component";
import FormLead from "../FormLead/index";
import SelectTag from "../SelectTag";

const TabMenuLeads = ({
  nameTab,
  columns,
  setDataFunnelToggle,
  dataFunnelToggle,
  columnsToSet,
  updateData,
  currentEdit,
  setCurrentEdit,
  openModal,
  dataLead,
  setFilteredDataDos,
  clearFilterContacts,
}: any) => {
  return (
    <div className="content-buttons-main-tracking mt-4 mt-3 d-flex justify-content-end">
      <ButtonCreate className="btn" onClick={openModal}>
        {nameTab}
      </ButtonCreate>
      <ToggleColumnsTable
        columns={columns}
        setDataFunnelToggle={setDataFunnelToggle}
        dataFunnelToggle={dataFunnelToggle}
        columnsToSet={columnsToSet}
        updateData={updateData}
      />
      <div style={{ width: "25%" }}>
        <SelectTag
          dataLead={dataLead}
          setFilteredDataDos={setFilteredDataDos}
          clearFilterContacts={clearFilterContacts}
        />
      </div>
    </div>
  );
};

export default TabMenuLeads;
