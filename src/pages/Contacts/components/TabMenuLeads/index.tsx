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
}: any) => {
  const [titleDatePickerLeads, setTitleDatePickerLeads] = useState(
    "Selecciona una fecha"
  );

  return (
    <div className="row justify-content-between">
      <div
        className="d-flex align-items-center mr-3 mt-4"
        style={{ width: "300px", justifyContent: "space-evenly" }}
      >
        {dataFiltersCalendar?.map((filtersIcons: any) => (
          <>
            <img src={filtersIcons.image} alt="" className="" height="24px" />
            <span>{filtersIcons.value}</span>
          </>
        ))}
      </div>
      <div
        className="content-buttons-main-tracking mt-4 mt-3 d-flex justify-content-end mr-3"
        style={{ width: "48vw" }}
      >
        <ButtonCreate className="btn" onClick={openModal}>
          {nameTab}
        </ButtonCreate>
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
        <div style={{ width: "45%" }}>
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
