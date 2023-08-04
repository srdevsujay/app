import { ToggleColumnsTable } from "../../../../components/toggleColumnsTable";

import Vector from "../../../../assets/images/Vector.png";
import { ButtonCreate } from "../../../../styled-components/button";
import InputComponent from "../../../../components/input/Input.component";
import { useEffect, useState } from "react";
import Modal from "../../../../components/modal/Modal.component";
import FormLead from "../FormLead/index";
import SelectTag from "../SelectTag";
import FilterContacts from "../FilterContacts/FilterContacts";
import leadsFilter from "../../../../assets/images/leadsFilter.svg";
import { Tooltip } from "@mui/material";
import { Title } from "../../../../styled-components/Title/index";
import HelpVideo from '../../../../components/HelpVideo/HelpVideo';
import ExportExcel from '../../../../components/ExportExcel/ExportExcel';

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
  isModalOpenFilter,
  setModalStateFilter,
  toggleModalFilter,
  currentCalendar,
  setCurrentCalendar,
  minDate,
  maxDate,
  handleDateFilterCalendar,
  dataFiltersCalendar,
  setHandleButtonsFilterCalendar,
  positionDataHelpVideo,
  dataFile,
  titleDataFile
}: any) => {
  const [titleDatePickerLeads, setTitleDatePickerLeads] = useState(
    "Selecciona una fecha"
  );

  console.log("dataFiltersCalendar", dataFiltersCalendar);
  console.log("dataFiltersCalendardataLead", dataLead);

  return (
    <div className="row justify-content-between">
      <div
        className={`${
          dataFiltersCalendar.length === 1
            ? "mt-4 ml-3"
            : " d-flex align-items-center mr-3 mt-4 ml-3"
        }`}
        style={{ width: "260px", justifyContent: "inherit" }}
      >
        {dataFiltersCalendar?.map((filtersCalendar: any) => (
          <div className="d-flex align-items-center">
            <Tooltip
              title={
                <>
                  <span>{filtersCalendar.name}</span>
                </>
              }
              placement="top"
            >
              <img
                src={filtersCalendar.image}
                alt=""
                className="mb-2"
                height="15px"
              />
            </Tooltip>
            <Title fontSize="14px" color="#123249" className="ml-1">
              {filtersCalendar.value}
            </Title>
          </div>
        ))}
      </div>
      <div
        className="content-buttons-main-tracking mt-4 mt-3 d-flex justify-content-end mr-3"
        style={{ width: "56vw" }}
      >
        <ButtonCreate className="btn" onClick={openModal}>
          {nameTab}
        </ButtonCreate>
        <div className="">
          <HelpVideo position={positionDataHelpVideo} />
        </div>
        <div className="mr-2">
          <ExportExcel dataFile={dataFile} titleFile={titleDataFile}/>
        </div>
        <FilterContacts
          titleDatePickerLeads={titleDatePickerLeads}
          dataLead={dataLead}
          isModalOpenFilter={isModalOpenFilter}
          setModalStateFilter={setModalStateFilter}
          toggleModalFilter={toggleModalFilter}
          currentCalendar={currentCalendar}
          setCurrentCalendar={setCurrentCalendar}
          minDate={minDate}
          maxDate={maxDate}
          handleDateFilterCalendar={handleDateFilterCalendar}
          setHandleButtonsFilterCalendar={setHandleButtonsFilterCalendar}
        />
        <ToggleColumnsTable
          columns={columns}
          setDataFunnelToggle={setDataFunnelToggle}
          dataFunnelToggle={dataFunnelToggle}
          columnsToSet={columnsToSet}
          updateData={updateData}
        />
        <div style={{ width: "34%" }}>
          <SelectTag
            dataLead={dataLead}
            setFilteredDataDos={setFilteredDataDos}
            clearFilterContacts={clearFilterContacts}
          />
        </div>
      </div>
    </div>
  );
};

export default TabMenuLeads;
