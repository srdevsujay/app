import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputComponent } from "../../components/input";
import { Modal } from "../../components/modal";
import Sidebar from "../../components/sidebar/Sidebar";
import { Card, Main } from "../../styled-components/main";
import {
  Bar,
  ButtonFunnel,
  NewFunnel,
  // TableStyle,
  // TextColors,
  Title,
} from "./styled-components/dashboardStyled";
import { useAppDispatch, useAppSelector } from "../../hooks";
// import { getMetricFunnel } from "../../redux/state/slices/dashboard/dashboardThunk";
import Accordion from "../../components/accordion/Accordion";
import AddFunnelInput from "./components/AddFunnellnput";
import StepFunnel from "./components/StepFunnel";
import StepsFunnel from "./components/Steps";
import AdAccount from "./components/AdAccount";
import {
  getMetricFunnel,
  getTrackingFunnel,
} from "../../redux/state/slices/dashboard/dashboardThunk";
import { AppStore } from "../../redux/store";
import { setAutoFreeze } from "immer";
import TablePNL from "./components/TablePNL";
import AccordionFunnel from "./components/AccordionFunnel";
import DateFilter from "./components/DateFilter";
import "./styled-components/style.css";
import moment from "moment";
import { addDays } from "date-fns";
import SourceFilter from "./components/SourceFilter";
import Graphics from "./components/Graphics";
import { FormatNumber } from "../../utilities/FormatNumber";
import FooterMenu from "../../components/Footer/index";
import { TableStyle, TextColors } from "../../styled-components/Table/index";

import {
  yesterDay,
  todayDay,
  handleDays,
  currentWeek,
  lastWeek,
  currentMonth,
} from "../../utilities/functionDateFilter/HandleDate";

setAutoFreeze(false);

const Dashboard = () => {
  const [pnlDays, setPnlDays] = useState<number>(7);
  const [currentDayFilter, SetCurrentDayFilter] = useState(7);
  const [flagModal, setFlagModal] = useState<number>(0);
  const [titleDatePickerPNL, setTitleDatePickerPNL] = useState(
    "Selecciona una fecha"
  );
  const [groupPlataform, setGroupPlataform] = useState([]);
  const [selectPlatform, setSelectPlatform] = useState([]);
  const dispatch = useAppDispatch();
  const [isModalOpen, setModalState] = useState<boolean>(false);
  const [tablePnl, setTablePnl] = useState([]);
  const [currentCalendar, setCurrentCalendar] = useState([
    {
      startDate: addDays(new Date(), -6),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const dataFunnel = useAppSelector((state) => state.dashboard.dataFunnel);
  const toggleModal = () => setModalState(!isModalOpen);

  const mySelector = useCallback((state: any) => state.dashboard.dataPNL, []);
  const dashboardMain = useAppSelector(mySelector);

  // const dashboardMain = useAppSelector((state) => state.dashboard.dataPNL);
  const idUser = useAppSelector((state) => state.user.user.id);
  // Ejemplo del type, en este caso el tipo ":AppStore" viebe del Store
  // const dataFunnel = useAppSelector(
  //   (state: AppStore) => state.dashboard.dataFunnel
  // );

  console.log("dashboardMain", dashboardMain);

  useEffect(() => {
    dispatch(getMetricFunnel());
  }, []);

  useEffect(() => {
    if (dashboardMain.length > 0) {
      setTablePnl(dashboardMain);
    }
  }, [dashboardMain]);

  useEffect(() => {
    console.log("dataFunnel...", dataFunnel);
    if (dataFunnel.length === 0) {
      if (idUser !== null) {
        dispatch(getTrackingFunnel(idUser));
      }
    }
  }, [idUser]);

  const handleDateDashboardMain = () => {
    const formate1 = moment(currentCalendar[0].startDate).format("YYYY-MM-DD");
    const formate2 = moment(currentCalendar[0].endDate).format("YYYY-MM-DD");
    const dateFormat = {
      fecha_inicial: formate1,
      fecha_final: formate2,
    };
    const fechaInicio = new Date(dateFormat.fecha_inicial).getTime();
    const fechaFin = new Date(dateFormat.fecha_final).getTime();
    const diff = fechaFin - fechaInicio;
    setPnlDays(diff / (1000 * 60 * 60 * 24) + 1);
    setTitleDatePickerPNL(
      `${dateFormat.fecha_inicial} - ${dateFormat.fecha_final}`
    );

    //acá fecha
    if (
      dateFormat.fecha_inicial !== "Invalid date" &&
      dateFormat.fecha_final !== "Invalid date"
    ) {
      setFlagModal(1);
      return dispatch(getMetricFunnel(dateFormat));
    }
  };

  const handleYesterday = () => {
    const item = yesterDay();
    setPnlDays(1);
    setFlagModal(1);
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    console.log("item...", item);
    return dispatch(getMetricFunnel(item));
  };

  const handleToday = () => {
    const item = todayDay();
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    setPnlDays(1);
    setFlagModal(1);
    return dispatch(getMetricFunnel(item));
  };

  const handleSevenDay = () => {
    const item = handleDays(6);
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    setPnlDays(7);
    setFlagModal(1);
    dispatch(getMetricFunnel(item));
  };

  const handleCurrentWeek = () => {
    const item = currentWeek();
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    const fechaInicio = new Date(item.fecha_inicial).getTime();
    const fechaFin = new Date(item.fecha_final).getTime();
    const diff = fechaFin - fechaInicio;
    setPnlDays(diff / (1000 * 60 * 60 * 24) + 1);
    setFlagModal(1);
    dispatch(getMetricFunnel(item));
  };

  const handleLastWeek = () => {
    const item = lastWeek();
    const fechaInicio = new Date(item.fecha_inicial).getTime();
    const fechaFin = new Date(item.fecha_final).getTime();
    const diff = fechaFin - fechaInicio;
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    setPnlDays(diff / (1000 * 60 * 60 * 24) + 1);
    setFlagModal(1);
    dispatch(getMetricFunnel(item));
  };

  const handleThirtyDays = () => {
    const item = handleDays(30);
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    setPnlDays(30);
    setFlagModal(1);
    dispatch(getMetricFunnel(item));
  };

  const handleCurrentMonth = () => {
    const item = currentMonth();
    const fechaInicio = new Date(item.fecha_inicial).getTime();
    const fechaFin = new Date(item.fecha_final).getTime();
    const diff = fechaFin - fechaInicio;
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    setPnlDays(diff / (1000 * 60 * 60 * 24) + 1);
    setFlagModal(1);
    dispatch(getMetricFunnel(item));
  };

  const handleFourteenDays = () => {
    const item = handleDays(14);
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    setPnlDays(14);
    setFlagModal(1);
    dispatch(getMetricFunnel(item));
  };

  const handleThreeMonth = () => {
    const dayInitial = new Date();
    const xDayInitial = 50;
    dayInitial.setDate(dayInitial.getDate() - xDayInitial);
    const dayFinal = new Date();
    const xDayFinal = 0;
    dayFinal.setDate(dayFinal.getDate() - xDayFinal);
    let firstDay = moment(dayInitial).format("YYYY-MM-DD");
    let lastDay = moment(dayFinal).format("YYYY-MM-DD");
    const dateFormat = {
      fecha_inicial: firstDay,
      fecha_final: lastDay,
    };
    const fechaInicio = new Date(firstDay).getTime();
    const fechaFin = new Date(lastDay).getTime();
    const diff = fechaFin - fechaInicio;
    setTitleDatePickerPNL(`${firstDay} - ${lastDay}`);
    setPnlDays(diff / (1000 * 60 * 60 * 24) + 1);
    setFlagModal(1);
    dispatch(getMetricFunnel(dateFormat));
  };

  const columnsTablePNL = [
    {
      title: "Fuente",
      field: "plataform",
      render: (dashboardMain: any) => (
        <TableStyle>{`${dashboardMain?.plataform}`}</TableStyle>
      ),
    },
    {
      title: "$Ingresos",
      field: "ingresos",
      render: (dashboardMain: any) => (
        <TableStyle>
          <>
            <FormatNumber number={dashboardMain?.ingresos} />
          </>
        </TableStyle>
      ),
    },
    {
      title: "#Gastos",
      field: "gastos",
      render: (dashboardMain: any) => (
        <TableStyle>{`${dashboardMain?.gastos.toFixed(2)}`}</TableStyle>
      ),
    },
    {
      title: "#Rentabilidad",
      field: "rentabilidad",
      render: (dashboardMain: any) => (
        <TextColors
          className={`${
            dashboardMain?.rentabilidad < 0 ? "text-danger" : "text-green"
          }`}
        >{`${dashboardMain?.rentabilidad.toFixed(2)}`}</TextColors>
      ),
    },
    {
      title: "%Rentabilidad",
      field: "porcentajerentabilidad",
      render: (dashboardMain: any) => (
        <TableStyle>
          {`${dashboardMain?.porcentajerentabilidad.toFixed(2)}`}
        </TableStyle>
      ),
    },
    {
      title: "#ROI",
      field: "roi",
      render: (dashboardMain: any) => (
        <TableStyle>{`${dashboardMain?.roi.toFixed(2)}`}</TableStyle>
      ),
    },
    {
      title: "#Leads",
      field: "leeds",
      render: (dashboardMain: any) => (
        <TableStyle>{`${dashboardMain?.leeds.toFixed(2)}`}</TableStyle>
      ),
    },
    {
      title: "#Bookings",
      field: "bookings",
      render: (dashboardMain: any) => (
        <TableStyle>{`${dashboardMain?.bookings.toFixed(2)}`}</TableStyle>
      ),
    },
  ];

  console.log("columnsTablePNL", columnsTablePNL);

  return (
    <Main>
      <Card>
        <Title fontSize="17px" color="#123249">
          Dashboard
        </Title>
        <div className="row">
          <Bar></Bar>
          <div className="col-sm-7">
            <div className="d-flex justify-content-between">
              <Title fontSize="14px" color="#192a3e">
                {`PNL (${pnlDays})`}
              </Title>
              <div className="d-flex mt-2">
                <SourceFilter
                  // dashboardMain={dashboardMain}
                  groupPlataform={groupPlataform}
                  setGroupPlataform={setGroupPlataform}
                  setSelectPlatform={setSelectPlatform}
                />
                <DateFilter
                  titleDatePickerPNL={titleDatePickerPNL}
                  handleDateDashboardMain={handleDateDashboardMain}
                  flagModal={flagModal}
                  setFlagModal={setFlagModal}
                  currentCalendar={currentCalendar}
                  setCurrentCalendar={setCurrentCalendar}
                  handleYesterday={handleYesterday}
                  handleToday={handleToday}
                  handleSevenDay={handleSevenDay}
                  handleCurrentWeek={handleCurrentWeek}
                  handleLastWeek={handleLastWeek}
                  handleThirtyDays={handleThirtyDays}
                  handleCurrentMonth={handleCurrentMonth}
                  handleFourteenDays={handleFourteenDays}
                  handleThreeMonth={handleThreeMonth}
                />
              </div>
            </div>
            <TablePNL
              tablePnl={groupPlataform}
              columnsTablePNL={columnsTablePNL}
              selectPlatform={selectPlatform}
            />
          </div>
          <div className="col-sm-5">
            <Graphics dashboardMain={dashboardMain} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <AccordionFunnel />
          </div>
        </div>
        {/* <section>
          <Accordion items={accordionItems} />
        </section> */}
      </Card>
      <NewFunnel>
        <ButtonFunnel onClick={toggleModal}>+</ButtonFunnel>
      </NewFunnel>

      <Modal
        title={"Agregar Funnel"}
        isOpen={isModalOpen}
        onClose={toggleModal}
        width="55vw"
        padding="50px"
        btnClose={1}
      >
        <AddFunnelInput />
        <StepsFunnel />
        <AdAccount />
      </Modal>
      <FooterMenu />
    </Main>
  );
};

export default Dashboard;
