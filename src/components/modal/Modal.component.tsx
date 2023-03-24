import React, { FC, useRef } from "react";
import { ModalProps } from "../../models";
import {
  ModalContainer,
  ModalOverlay,
  ModalBox,
  ModalTitle,
  ModalContent,
  ModalClose,
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
    <ModalContainer>
      <ModalOverlay ref={outsideRef} onClick={handleCloseOnOverlay} />
      <ModalBox width={width} padding={padding} bottom={bottom} height={height}>
        {btnClose === 0 ? (
          ""
        ) : (
          <ModalClose onClick={onClose}>
            {/* x<img src={iconX} alt={'close'} /> */}x
          </ModalClose>
        )}
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </ModalContainer>
  ) : null;
};

export default Modal;
