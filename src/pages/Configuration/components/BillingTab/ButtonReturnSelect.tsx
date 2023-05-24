import {
  ModalClose,
  ModalBox,
} from "../../../../styled-components/modal/index";
import ReplyIcon from "@mui/icons-material/Reply";

const ButtonReturnSelect = ({ onReturnSelect, backStep }: any) => {
  const onClose = (backStep: any) => {
    onReturnSelect(backStep);
  };

  return (
    <>
      <ReplyIcon onClick={() => onClose(backStep)} />
    </>
  );
};

export default ButtonReturnSelect;
