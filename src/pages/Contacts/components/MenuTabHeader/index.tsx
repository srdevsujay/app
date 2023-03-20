import { ToggleColumnsTable } from "../../../../components/toggleColumnsTable";

import Vector from "../../../../assets/images/Vector.png";
import { ButtonCreate } from "../../../../styled-components/button";
import InputComponent from "../../../../components/input/Input.component";

const TabMenuLeads = ({
  columns,
  setDataFunnelToggle,
  setColumnsToSet,
  dataFunnelToggle,
  columnsToSet,
  updateData,
  setSearchString,
}: any) => {
  return (
    <div className="content-buttons-main-tracking mt-4 d-flex justify-content-end">
      <ButtonCreate
        className="btn"
        // onClick={handleOpen}
      >
        Añadir Lead
      </ButtonCreate>
      {/* <CSVLink data={data} headers={headers}>
        Download me
      </CSVLink>; */}
      <ToggleColumnsTable
        columns={columns}
        setDataFunnelToggle={setDataFunnelToggle}
        setColumnsToSet={setColumnsToSet}
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
          // min={3}
          // value={select.adAccountName}
          onChange={(e) => setSearchString(e)}
        />
      </div>
      {/* <PopupLeads
        open={open}
        handleClose={handleClose}
        editLeads={editLeads}
        setEditLeads={setEditLeads}
      /> */}
    </div>
  );
};

export default TabMenuLeads;
