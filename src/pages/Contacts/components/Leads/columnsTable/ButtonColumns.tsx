import ellipsisOff from "../../../../../assets/images/ellipsisOff.svg";
import deleted from "../../../../../assets/images/Delete.svg";
import edit from "../../../../../assets/images/Edit.svg";
import { ThemeContext } from "../../../../../utilities/theme/ThemeContext";
import {
  ContainerDropdown,
  ButtonEditWithIcon,
  ButtonDeleteWithIcon,
} from "../../../../../styled-components/button/index";
import { useContext } from "react";

const ButtonColumns = ({ editLead, handleDeleteLead, param }: any) => {
  const { theme, themeButtonDropdown } = useContext(ThemeContext);

  return (
    <ContainerDropdown
      className="dropdown-menu dropdown-style"
      aria-labelledby="btnGroupDrop1"
      theme={themeButtonDropdown}
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
    </ContainerDropdown>
  );
};

export default ButtonColumns;
