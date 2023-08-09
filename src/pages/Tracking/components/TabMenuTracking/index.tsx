import { ToggleColumnsTable } from "../../../../components/toggleColumnsTable";

import Vector from "../../../../assets/images/Vector.png";
import { ButtonCreate } from "../../../../styled-components/button";
import InputComponent from "../../../../components/input/Input.component";
import { useEffect, useState } from "react";
import Modal from "../../../../components/modal/Modal.component";
import HelpVideo from "../../../../components/HelpVideo/HelpVideo";
import ExportExcel from "../../../../components/ExportExcel/ExportExcel";

const TabMenuTracking = ({
  nameTab,
  columns,
  setDataFunnelToggle,
  dataFunnelToggle,
  columnsToSet,
  setSearchString,
  updateData,
  currentEdit,
  setCurrentEdit,
  openModal,
  titleVideoTutorial,
  imageVideoTutorial,
  urlVideoTutorial,
  filteredData,
  titleDataFile,
}: any) => {
  return (
    <div className="content-buttons-main-tracking mt-4 mt-3 d-flex justify-content-end">
      <ButtonCreate className="btn" onClick={openModal}>
        {nameTab}
      </ButtonCreate>
      <HelpVideo
        title={titleVideoTutorial}
        image={imageVideoTutorial}
        url={urlVideoTutorial}
      />
      <div className="mr-2">
        <ExportExcel dataFile={filteredData} titleFile={titleDataFile} />
      </div>
      <ToggleColumnsTable
        columns={columns}
        setDataFunnelToggle={setDataFunnelToggle}
        dataFunnelToggle={dataFunnelToggle}
        columnsToSet={columnsToSet}
        updateData={updateData}
      />
      <div style={{ width: "25%" }}>
        <InputComponent
          // max={5}
          placeholder="Buscar..."
          label=""
          type="text"
          onChange={(e: any) => setSearchString(e)}
        />
      </div>
    </div>
  );
};

export default TabMenuTracking;
