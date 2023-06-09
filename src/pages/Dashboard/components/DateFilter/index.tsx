import { Modal } from "../../../../components/modal";
import React, { useState, useEffect } from "react";
import calendar from "../../../../assets/images/calendar.svg";
import { ButtonTitlePicker } from "../../styled-components/dashboardStyled";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../../styled-components/style.css";

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
}: // handleThreeMonth,
any) => {
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
        className="btn btn-export btn-calendar"
        onClick={handleOpen}
      >
        <span className="btn-calendar-title">{titleDatePickerPNL}</span>
        <img src={calendar} alt="" className="" />
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
            <div className="rdrDefinedRangesWrapper2">
              <div className="rdrStaticRanges">
                <button
                  className="rdrStaticRange rdrStaticRangeLabel"
                  onClick={handleSevenDay}
                >
                  7 Días
                </button>
                <button
                  className="rdrStaticRange rdrStaticRangeLabel"
                  onClick={handleFourteenDays}
                >
                  14 Días
                </button>
                <button
                  className="rdrStaticRange rdrStaticRangeLabel"
                  onClick={handleThirtyDays}
                >
                  30 Días
                </button>
                {/* <button
                  className="rdrStaticRange rdrStaticRangeLabel"
                  onClick={handleThreeMonth}
                >
                  3 Meses
                </button> */}
                <button
                  className="rdrStaticRange rdrStaticRangeLabel"
                  onClick={handleYesterday}
                >
                  Ayer
                </button>
                <button
                  className="rdrStaticRange rdrStaticRangeLabel"
                  onClick={handleToday}
                >
                  Hoy
                </button>
                <button
                  className="rdrStaticRange rdrStaticRangeLabel"
                  onClick={handleCurrentWeek}
                >
                  Semana Actual
                </button>
                <button
                  className="rdrStaticRange rdrStaticRangeLabel"
                  onClick={handleLastWeek}
                >
                  Semana Pasada
                </button>
                <button
                  className="rdrStaticRange rdrStaticRangeLabel"
                  onClick={handleCurrentMonth}
                >
                  Mes Actual
                </button>
              </div>
            </div>
          </div>
          <DateRangePicker
            onChange={(item) => setCurrentCalendar([item.selection])}
            // showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={currentCalendar}
            direction="horizontal"
          />
        </div>
        <div className="row">
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
        </div>
      </Modal>
    </div>
  );
};

export default DateFilter;
