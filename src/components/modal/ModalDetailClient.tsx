import React, { FC, useContext, useRef } from "react";
import { ModalProps } from "../../models";
import { ThemeContext } from "../../utilities/theme/ThemeContext";
import { useAppDispatch } from "../../hooks/appDispatch";
import { closeUserDetail } from "../../redux/state/slices/contacts/contactsThunk";
import {
  ModalContainer,
  ModalOverlay,
  ModalBox,
  ModalTitle,
  ModalContent,
  ModalClose,
  ModalSubTitle,
} from "../../styled-components";

const ModalDetailClient: FC<ModalProps> = ({
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
  const { theme, themeTitleModal } = useContext(ThemeContext);
  const outsideRef = useRef(null);
  const dispatch = useAppDispatch();

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      console.log("refCloseClient");
      dispatch(closeUserDetail());
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
        theme={theme}
      >
        {btnClose === 0 ? (
          ""
        ) : (
          <ModalClose onClick={onClose}>
            {/* x<img src={iconX} alt={'close'} /> */}x
          </ModalClose>
        )}
        <ModalTitle theme={theme}>{title}</ModalTitle>
        <ModalSubTitle theme={theme}>{subTitle}</ModalSubTitle>
        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </ModalContainer>
  ) : null;
};

export default ModalDetailClient;
