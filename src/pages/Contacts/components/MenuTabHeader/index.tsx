import { ToggleColumnsTable } from "../../../../components/toggleColumnsTable";

import Vector from "../../../../assets/images/Vector.png";
import { ButtonCreate } from "../../../../styled-components/button";
import InputComponent from "../../../../components/input/Input.component";
import { useEffect, useState } from "react";
import Modal from "../../../../components/modal/Modal.component";
import FormLead from "../FormLead/index";

const TabMenuLeads = ({
  columns,
  setDataFunnelToggle,
  setColumnsToSet,
  dataFunnelToggle,
  columnsToSet,
  updateData,
  setSearchString,
  currentEdit,
  setCurrentEdit,
}: any) => {
  const [isModalOpen, setModalState] = useState<boolean>(false);
  const toggleModal = () => setModalState(!isModalOpen);
  useEffect(() => {
    if (currentEdit) {
      toggleModal();
    }
  }, [currentEdit]);

  useEffect(() => {
    if (!isModalOpen) {
      setCurrentEdit();
    }
  }, [isModalOpen]);

  return (
    <div className="content-buttons-main-tracking mt-4 mt-3 d-flex justify-content-end">
      <ButtonCreate className="btn" onClick={toggleModal}>
        Añadir Lead
      </ButtonCreate>
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
          onChange={(e: any) => setSearchString(e)}
        />
      </div>
      <Modal
        title={"Crear Lead"}
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
    </div>
  );
};

export default TabMenuLeads;
