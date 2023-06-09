import React, { FC, useRef } from "react";
import { ModalProps } from "../../models";
import {
  ModalContainer,
  ModalOverlay,
  ModalBox,
  ModalTitle,
  ModalContent,
  ModalClose,
  ModalSubTitle,
} from "../../styled-components";

const Modal: FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
  width,
  padding,
  bottom,
  height,
  btnClose,
  subTitle,
  overflowY,
  overflowX,
}) => {
  const outsideRef = useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <ModalOverlay ref={outsideRef} onClick={handleCloseOnOverlay} />
      <ModalBox
        width={width}
        padding={padding}
        bottom={bottom}
        height={height}
        overflowY={overflowY}
        overflowX={overflowX}
      >
        {btnClose === 0 ? (
          ""
        ) : (
          <ModalClose onClick={onClose}>
            {/* x<img src={iconX} alt={'close'} /> */}x
          </ModalClose>
        )}
        <ModalTitle>{title}</ModalTitle>
        <ModalSubTitle>{subTitle}</ModalSubTitle>
        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </ModalContainer>
  ) : null;
};

export default Modal;
