import { useContext, useState } from "react";
import { Tooltip } from "@mui/material";
// import { DataHelpVideo } from "../../utilities/DataHelpVideo";
import { Modal } from "../modal";
import "../../styled-components/style.css";
import { ModalClose } from "../../styled-components/modal/index";
import { Title } from "../../styled-components/Title/index";
import { ButtonTitlePicker } from "../../pages/Dashboard/styled-components/dashboardStyled";
import { ThemeContext } from "../../utilities/theme/ThemeContext";

const HelpVideo = ({ title, image, url, classButton }: any) => {
  const { theme, themeFilterFunnel } = useContext(ThemeContext);
  const [isModalOpen, setModalState] = useState<boolean>(false);
  const toggleModal = () => setModalState(!isModalOpen);

  const handleOpen = (e: any) => {
    setModalState(true);
    e.stopPropagation();
  };

  return (
    <Tooltip
      title={
        <>
          <span>{title}</span>
        </>
      }
      placement="top"
    >
      <ButtonTitlePicker
        className={
          classButton
            ? "div-button-video button-video-integration"
            : "div-button-video"
        }
        theme={theme}
        onClick={handleOpen}
      >
        <img src={image} alt="" className="" height="15px" />
        <Modal
          title={""}
          isOpen={isModalOpen}
          onClose={toggleModal}
          width="70vw"
          padding="10px"
          btnClose={0}
        >
          <div className="text-center">
            <Title fontSize="27px">{title}</Title>
            <ModalClose onClick={toggleModal}>
              {/* x<img src={iconX} alt={'close'} /> */}x
            </ModalClose>
            <div
              style={{
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4>Proximamente video tutoriales</h4>
            </div>
            {/* <iframe
              width="100%" // Adjust the width to your desired size
              height="315" // Adjust the height to your desired size
              src={url}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </div>
        </Modal>
      </ButtonTitlePicker>
    </Tooltip>
  );
};
export default HelpVideo;
