import {
  ModalClose,
  ModalBox,
} from "../../../../styled-components/modal/index";

const ButtonReturnSelect = ({ onReturnSelect, backStep }: any) => {
  const onClose = (backStep: any) => {
    onReturnSelect(backStep);
  };

  return (
    <>
      <ModalClose top="140px" right="180px" onClick={() => onClose(backStep)}>
        {/* x<img src={iconX} alt={'close'} /> */}x
      </ModalClose>
    </>
  );
};

export default ButtonReturnSelect;
