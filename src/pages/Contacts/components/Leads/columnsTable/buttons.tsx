import ellipsisOff from "../../../../../assets/images/ellipsisOff.svg";
import deleted from "../../../../../assets/images/Delete.svg";
import edit from "../../../../../assets/images/Edit.svg";
import {
  ButtonDeleteWithIcon,
  ButtonEditWithIcon,
} from "../../../../../styled-components/button/index";

export const buttonEditColumn = (
  setCurrentEdit: any,
  setIdEditCurrent: any
) => {
  const editLead = (param: any) => {
    setCurrentEdit(param);
  };

  const handleDeleteLead = (id: number) => {
    setIdEditCurrent(id);
  };

  return {
    render: (param: any, index: any) => (
      <div className="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          className="btn mr-2 dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img src={ellipsisOff} alt="" className="" />
        </button>
        <div
          className="dropdown-menu dropdown-style"
          aria-labelledby="btnGroupDrop1"
          style={{ padding: "10px" }}
        >
          <ButtonEditWithIcon
            className="dropdown-item dropdown-style-button"
            onClick={(e: any) => {
              editLead(param);
              e.stopImmediatePropagation();
            }}
          >
            <img src={edit} height="12" className="" />
            Editar
          </ButtonEditWithIcon>
          <ButtonDeleteWithIcon
            className="dropdown-item dropdown-style-button"
            onClick={() => handleDeleteLead(param.id)}
          >
            <img src={deleted} height="12" className="" />
            Eliminar
          </ButtonDeleteWithIcon>
          {/* <button class="dropdown-item" href="#">Dropdown link</button> */}
        </div>
      </div>
    ),
  };
};
