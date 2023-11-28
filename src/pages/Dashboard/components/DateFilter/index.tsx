import { Modal } from "../../../../components/modal";
import React, { useState, useEffect, useContext } from "react";
import calendar from "../../../../assets/images/calendar.svg";
import calendarDark from "../../../../assets/images/calendarDark.svg";
import {
  ButtonTitlePicker,
  ButtonFilterCalendar,
  RdrDefinedRangesWrapper2,
} from "../../styled-components/dashboardStyled";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";
import "../../styled-components/style.css";
import { ButtonsModal } from "../../../../styled-components/button/index";
import { useAppSelector } from "../../../../hooks/appDispatch";

const DateFilter = ({
  titleDatePickerPNL,
  handleDateDashboardMain,
  flagModal,
  setFlagModal,
  currentCalendar,
  setCurrentCalendar,
  handleYesterday,
  handleToday,
  handleSevenDay,
  handleCurrentWeek,
  handleLastWeek,
  handleThirtyDays,
  handleCurrentMonth,
  handleFourteenDays,
  index,
}: // handleThreeMonth,
any) => {
  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);
  const { theme, themeFilterFunnel } = useContext(ThemeContext);
  const [isModalOpen, setModalState] = useState<boolean>(false);
  const toggleModal = () => setModalState(!isModalOpen);

  const handleOpen = (e: any) => {
    setModalState(true);
    e.stopPropagation();
  };

  useEffect(() => {
    setModalState(false);
    setFlagModal(0);
  }, [flagModal]);

  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="">
      <ButtonTitlePicker
        className="btn btn-export btn-calendar mr-2 ml-2"
        onClick={handleOpen}
        theme={theme}
      >
        <span className="btn-calendar-title">{titleDatePickerPNL}</span>
        <img
          src={themeState === true ? calendarDark : calendar}
          alt=""
          className=""
        />
      </ButtonTitlePicker>
      <Modal
        title={""}
        isOpen={isModalOpen}
        onClose={toggleModal}
        width="70vw"
        padding="10px"
        btnClose={0}
      >
        <div className="d-flex">
          <div className="rdrDateRangePickerWrapper">
            <RdrDefinedRangesWrapper2 theme={theme}>
              <div className="rdrStaticRanges">
                <ButtonFilterCalendar
                  className="rdrStaticRangeLabel"
                  onClick={handleSevenDay}
                  theme={theme}
                >
                  7 Días
                </ButtonFilterCalendar>
                <ButtonFilterCalendar
                  className="rdrStaticRangeLabel"
                  onClick={handleFourteenDays}
                  theme={theme}
                >
                  14 Días
                </ButtonFilterCalendar>
                <ButtonFilterCalendar
                  className="rdrStaticRangeLabel"
                  onClick={handleThirtyDays}
                  theme={theme}
                >
                  30 Días
                </ButtonFilterCalendar>
                {/* <button
                  className="rdrStaticRange rdrStaticRangeLabel"
                  onClick={handleThreeMonth}
                >
                  3 Meses
                </button> */}
                <ButtonFilterCalendar
                  className="rdrStaticRangeLabel"
                  onClick={handleYesterday}
                  theme={theme}
                >
                  Ayer
                </ButtonFilterCalendar>
                <ButtonFilterCalendar
                  className="rdrStaticRangeLabel"
                  onClick={handleToday}
                  theme={theme}
                >
                  Hoy
                </ButtonFilterCalendar>
                <ButtonFilterCalendar
                  className="rdrStaticRangeLabel"
                  onClick={handleCurrentWeek}
                  theme={theme}
                >
                  Semana Actual
                </ButtonFilterCalendar>
                <ButtonFilterCalendar
                  className="rdrStaticRangeLabel"
                  onClick={handleLastWeek}
                  theme={theme}
                >
                  Semana Pasada
                </ButtonFilterCalendar>
                <ButtonFilterCalendar
                  className="rdrStaticRangeLabel"
                  onClick={handleCurrentMonth}
                  theme={theme}
                >
                  Mes Actual
                </ButtonFilterCalendar>
              </div>
            </RdrDefinedRangesWrapper2>
          </div>
          <DateRangePicker
            onChange={(item) => setCurrentCalendar([item.selection])}
            // showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={currentCalendar}
            direction="horizontal"
            className={
              themeState === true || themeState === "true"
                ? "DateRangePickerTheme"
                : ""
            }
          />
        </div>
        <div className="row">
          <div className="offset-4 form-group col-sm-2">
            <ButtonsModal
              className="btn btn-close"
              onClick={toggleModal}
              theme={themeFilterFunnel}
            >
              Cerrar
            </ButtonsModal>
          </div>
          <div className="form-group col-sm-2">
            <ButtonsModal
              className="btn btn-add"
              type="submit"
              onClick={() => handleDateDashboardMain(index)}
            >
              Filtrar
            </ButtonsModal>
          </div>
        </div>
        {/* <div className="row">
          <div
            className="col-sm-12 d-flex justify-content-center"
            style={{ padding: "10px 0px 30px 30px" }}
          >
            <button
              className="btn btn-close-modal-calendar mr-3"
              onClick={toggleModal}
            >
              Cerrar
            </button> 
            <button
              className="btn btn-filter"
              onClick={handleDateDashboardMain}
            >
              Filtrar
            </button>
          </div>
        </div> */}
      </Modal>
    </div>
  );
};

export default DateFilter;
